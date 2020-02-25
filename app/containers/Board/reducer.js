import produce from 'immer';
import { SELECT_CELL, SET_FOUND_MATCH } from './constants';

export const initialState = {
  memoryBoard: [
    [
      { value: 7, isVisible: false },
      { value: 8, isVisible: false },
      { value: 1, isVisible: false },
      { value: 7, isVisible: false },
    ],
    [
      { value: 6, isVisible: false },
      { value: 3, isVisible: false },
      { value: 2, isVisible: false },
      { value: 8, isVisible: false },
    ],
    [
      { value: 4, isVisible: false },
      { value: 5, isVisible: false },
      { value: 1, isVisible: false },
      { value: 2, isVisible: false },
    ],
    [
      { value: 5, isVisible: false },
      { value: 6, isVisible: false },
      { value: 4, isVisible: false },
      { value: 3, isVisible: false },
    ],
  ],
  firstSelectedCell: [null, null],
  secondSelectedCell: [null, null],
  clickToFlip: false,
  isFoundMatch: false
};

const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_FOUND_MATCH:
        setFoundMatch(draft, action.isFoundMatch);
        break;
      case SELECT_CELL:
        if (state.clickToFlip) {
          flipSelected(draft);
          return;
        }

        const isCellAlreadySelected =
          cellAlreadySelected(action.cellIndex, state.firstSelectedCell) ||
          cellAlreadySelected(action.cellIndex, state.firstSelectedCell);

        if (isCellAlreadySelected) return;

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

const setFoundMatch = (draft, isFoundMatch) => {
  draft.isFoundMatch = isFoundMatch;
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
  setFoundMatch(draft, true);
  initSelectedCells(draft);
};

const initSelectedCells = draft => {
  draft.firstSelectedCell = [null, null];
  draft.secondSelectedCell = [null, null];
};

export default boardReducer;
