import produce from 'immer';
import { SELECT_CELL, BOARD_SIZE_VALUE, RESET_BOARD } from './constants';

export const getInitializedBoard = (size) => {
  const board = createEmptyBoard(size);
  const numbersToGuess = size * 2;

  for (let currentNumberToGuess = 1; currentNumberToGuess <= numbersToGuess; currentNumberToGuess++) {
    placeNumber(size, board, currentNumberToGuess);
    placeNumber(size, board, currentNumberToGuess);
  }

  return board;
};

const placeNumber = (size, board, number) => {
  const randomPlace = getFreeRandomPlace(size, board);
  board[randomPlace.rowIndex][randomPlace.columnIndex] = { value: number, isVisible: false };
};

const getFreeRandomPlace = (size, board) => {
  let randomPlace;

  do {
    randomPlace = getRandomPlace(size);
  }
  while (board[randomPlace.rowIndex][randomPlace.columnIndex]);

  return randomPlace;
};

const getRandomPlace = (size) => {
  let rowIndex = Math.floor(Math.random() * size); // 0 to (size - 1)
  let columnIndex = Math.floor(Math.random() * size); // 0 to (size - 1)
  return { rowIndex: rowIndex, columnIndex: columnIndex };
};

const createEmptyBoard = (size) => {
  const board = Array(size).fill(null).map(() => Array(size).fill(null));
  return board;
};

const getInitializedGameStatus = (size) => {
  const gameStatus = { matchesLeft: BOARD_SIZE_VALUE*BOARD_SIZE_VALUE/2 };
  return gameStatus;
};

const setNewGame = (draft) => {
  draft.memoryBoard = getInitializedBoard(BOARD_SIZE_VALUE);
  draft.gameStatus = getInitializedGameStatus(BOARD_SIZE_VALUE);
};

export const initialState = {
  firstSelectedCell: [null, null],
  secondSelectedCell: [null, null],
  clickToFlip: false,
  memoryBoard: getInitializedBoard(BOARD_SIZE_VALUE),
  gameStatus: getInitializedGameStatus(BOARD_SIZE_VALUE),
};

const gameReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case RESET_BOARD:
      setNewGame(draft);
      break;
    case SELECT_CELL:
      if (state.clickToFlip) {
        flipSelected(draft);
        return;
      }

      const isCellAlreadySelected =
        cellAlreadySelected(action.cellIndex, state.firstSelectedCell) ||
        cellAlreadySelected(action.cellIndex, state.secondSelectedCell);

      const isCellAlreadyVisible = cellAlreadyVisible(action.cellIndex, state.memoryBoard);

      if (isCellAlreadySelected || isCellAlreadyVisible) return;

      const cellNotSelected = notSelected(state.firstSelectedCell);
      if (cellNotSelected) {
        draft.firstSelectedCell = action.cellIndex;
        draft.memoryBoard[action.cellIndex[0]][
          action.cellIndex[1]
          ].isVisible = true;
        return;
      }

      draft.secondSelectedCell = action.cellIndex;
      draft.memoryBoard[action.cellIndex[0]][
        action.cellIndex[1]
        ].isVisible = true;

      matchProcess(draft);
      break;
    default:
      break;
  }
});

const notSelected = selectedCell => {
  const isNotSelected = selectedCell[0] == null && selectedCell[1] == null;
  return isNotSelected;
};

const cellAlreadySelected = (selectedCellIndex, cellToCheck) => {
  const isCellAlreadySelected =
    cellToCheck[0] === selectedCellIndex[0] &&
    cellToCheck[1] === selectedCellIndex[1];
  return isCellAlreadySelected;
};

const cellAlreadyVisible = (selectedCellIndex, memoryBoard) => {
  const isCellAlreadyVisible = memoryBoard[selectedCellIndex[0]][selectedCellIndex[1]].isVisible;
  return isCellAlreadyVisible;
};

const flipSelected = draft => {
  draft.memoryBoard[draft.firstSelectedCell[0]][
    draft.firstSelectedCell[1]
    ].isVisible = false;
  draft.memoryBoard[draft.secondSelectedCell[0]][
    draft.secondSelectedCell[1]
    ].isVisible = false;
  draft.clickToFlip = false;
  initSelectedCells(draft);
};

const isCellsMatch = (draft) => {
  const isMatch =
    draft.memoryBoard[draft.firstSelectedCell[0]][draft.firstSelectedCell[1]]
      .value ===
    draft.memoryBoard[draft.secondSelectedCell[0]][draft.secondSelectedCell[1]]
      .value;
  return isMatch;
};

const matchProcess = (draft) => {
  const isMatch = isCellsMatch(draft);
  if (!isMatch) {
    noMatchProcess(draft);
    return;
  }

  foundMatchProcess(draft);
};

const noMatchProcess = (draft) => {
  draft.clickToFlip = true;
};

const foundMatchProcess = (draft) => {
  initSelectedCells(draft);
  decreaseMatchesLeft(draft);
};

const initSelectedCells = draft => {
  draft.firstSelectedCell = [null, null];
  draft.secondSelectedCell = [null, null];
};

const decreaseMatchesLeft = draft => {
  draft.gameStatus.matchesLeft -= 1;
};

export default gameReducer;
