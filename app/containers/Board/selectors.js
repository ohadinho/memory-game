import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoard = state => state.board || initialState;

const makeSelectMemoryBoard = () =>
  createSelector(
    selectBoard,
    boardState => boardState.memoryBoard
  );

const makeSelectFoundMatch = () =>
  createSelector(
    selectBoard,
    boardState => boardState.foundMatch
  );

export { selectBoard, makeSelectMemoryBoard, makeSelectFoundMatch };
