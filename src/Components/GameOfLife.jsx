import React, { useState, useCallback, useRef, useEffect } from 'react';
import { produce } from 'immer';

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

const Grid = ({ numRows, numCols, initialCellState, running, cellColorAlive, cellColorDead, gridName, setRunning }) => {
    const generateEmptyGrid = (rows, cols) => {
        const rowsArr = [];
        for (let i = 0; i < rows; i++) {
            rowsArr.push(Array.from(Array(cols), () => initialCellState));
        }
        return rowsArr;
    };

    const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols));

    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid((g) => {
            return produce(g, (gridCopy) => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if (
                                newI >= 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols
                            ) {
                                neighbors += g[newI][newJ];
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            });
        });

        setTimeout(runSimulation, 100);
    }, [numRows, numCols]);

    useEffect(() => {
        if (running) {
            runSimulation();
        }
    }, [running, runSimulation]);

    return (
        <>
            <h2>{gridName}</h2>
            {/* Buttons for controlling simulation */}
            <button onClick={() => setRunning(!running)}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button
                onClick={() => {
                    const rows = generateEmptyGrid(numRows, numCols);
                    setGrid(rows);
                }}
            >
                Randomize
            </button>
            <button
                onClick={() => {
                    const rows = generateEmptyGrid(numRows, numCols);
                    setGrid(rows);
                }}
            >
                Clear
            </button>
            {/* Display grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                }}
            >
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            key={`${i}-${j}`}
                            onClick={() => {
                                const newGrid = produce(grid, (gridCopy) => {
                                    gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                });
                                setGrid(newGrid);
                            }}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[i][j] ? cellColorAlive : cellColorDead,
                                border: 'solid 1px gray',
                            }}
                        />
                    ))
                )}
            </div>
        </>
    );
};

const Dashboard = ({ grids, selectGrid }) => (
    <div>
        <h1>Dashboard</h1>
        <ul>
            {grids.map((grid, index) => (
                <li key={index} onClick={() => selectGrid(index)}>
                    {grid.gridName}
                </li>
            ))}
        </ul>
    </div>
);

const GameOfLife = () => {
    const [grids, setGrids] = useState([]);
    const [selectedGridIndex, setSelectedGridIndex] = useState(null);

    const addGrid = () => {
        const newGrid = {
            numRows: 22,
            numCols: 40,
            running: false,
            initialCellState: 0,
            cellColorAlive: 'black',
            cellColorDead: 'white',
            gridName: `Grid ${grids.length + 1}`,
        };
        setGrids([...grids, newGrid]);
    };

    const selectGrid = (index) => {
        setSelectedGridIndex(index);
    };

    const setRunning = (index, value) => {
        const updatedGrids = [...grids];
        updatedGrids[index].running = value;
        setGrids(updatedGrids);
    };

    return (
        <div>
            <button onClick={addGrid}>Add Grid</button>
            <Dashboard grids={grids} selectGrid={selectGrid} />
            {selectedGridIndex !== null && (
                <Grid
                    {...grids[selectedGridIndex]}
                    setRunning={(value) => setRunning(selectedGridIndex, value)}
                />
            )}
        </div>
    );
};

export default GameOfLife;
