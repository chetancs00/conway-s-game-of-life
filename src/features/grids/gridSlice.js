import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grids: [],
  selectedGridIndex: null,
};

const gridsSlice = createSlice({
  name: 'grids',
  initialState,
  reducers: {
    addGrid: (state) => {
      const newGrid = {
        numRows: 22,
        numCols: 40,
        running: false,
        initialCellState: 0,
        cellColorAlive: 'black',
        cellColorDead: 'white',
        gridName: `Grid ${state.grids.length + 1}`,
      };
      state.grids.push(newGrid);
    },
    selectGrid: (state, action) => {
      state.selectedGridIndex = action.payload;
    },
    setRunning: (state, action) => {
      state.grids[action.payload.index].running = action.payload.value;
    },
    updateCellState: (state, action) => {
      const { rowIndex, colIndex, newValue } = action.payload;
      state.grids[state.selectedGridIndex].grid[rowIndex][colIndex] = newValue;
    },
    clearGrid: (state) => {
      state.grids[state.selectedGridIndex].grid = generateEmptyGrid(
        state.grids[state.selectedGridIndex].numRows,
        state.grids[state.selectedGridIndex].numCols
      );
    },
  },
});


export const { addGrid, selectGrid, setRunning, updateCellState, clearGrid } = gridsSlice.actions;

export default gridsSlice.reducer;
