import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoard = (state) => {
  return state.board || initialState;
};

const makeSelectMemoryBoard = () =>
  createSelector(
    selectBoard,
    boardState => boardState.memoryBoard
  );

const makeSelectFoundMatch = () =>
  createSelector(
    selectBoard,
    boardState => boardState.isFoundMatch
  );

export { selectBoard, makeSelectMemoryBoard, makeSelectFoundMatch };
