# Conway's Game of Life

This project implements Conway's Game of Life using React and Redux Toolkit. It allows users to create and switch between multiple grids, with each grid representing a separate instance of the game.

## Features

- **Multiple Grids:** Users can create and switch between multiple grids, each with its own configuration and state.
- **Start/Stop Simulation:** Users can start and stop the simulation of each grid independently.
- **Cell Interaction:** Users can interact with cells by clicking to toggle their state.
- **Randomize Grid:** Users can randomize the grid to create initial configurations.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:


2. Install dependencies:


3. Start the development server:


4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Click the "Add Grid" button to create a new grid.
- Click on a grid in the Dashboard to select it.
- Use the "Start" and "Stop" buttons to control the simulation of the selected grid.
- Click on cells in the grid to toggle their state.
- Use the "Randomize" button to randomly populate the grid with initial cell states.

## Technologies Used

- React: JavaScript library for building user interfaces
- Redux Toolkit: State management library for managing application state
- Immer: Library for working with immutable data structures

## Project Structure

The project follows a folder structure for better organization:


Sure! Here's a basic README.md template for your project:

markdown
Copy code
# Conway's Game of Life

This project implements Conway's Game of Life using React and Redux Toolkit. It allows users to create and switch between multiple grids, with each grid representing a separate instance of the game.

## Features

- **Multiple Grids:** Users can create and switch between multiple grids, each with its own configuration and state.
- **Start/Stop Simulation:** Users can start and stop the simulation of each grid independently.
- **Cell Interaction:** Users can interact with cells by clicking to toggle their state.
- **Randomize Grid:** Users can randomize the grid to create initial configurations.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/conways-game-of-life.git

markdown
Copy code

2. Install dependencies:

cd conways-game-of-life
npm install

markdown
Copy code

3. Start the development server:

npm start

vbnet
Copy code

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Click the "Add Grid" button to create a new grid.
- Click on a grid in the Dashboard to select it.
- Use the "Start" and "Stop" buttons to control the simulation of the selected grid.
- Click on cells in the grid to toggle their state.
- Use the "Randomize" button to randomly populate the grid with initial cell states.

## Technologies Used

- React: JavaScript library for building user interfaces
- Redux Toolkit: State management library for managing application state
- Immer: Library for working with immutable data structures

## Project Structure

The project follows a folder structure for better organization:

src/
|-- components/
| |-- GameOfLife.js
|-- features/
| |-- grids/
| |-- gridsSlice.js
|-- store/
| |-- store.js
|-- index.js


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Immer](https://immerjs.github.io/immer/)
- [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
