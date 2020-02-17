import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoard = state => state.board || initialState;

const makeSelectMemoryBoard = () =>
  createSelector(
    selectBoard,
    boardState => boardState.memoryGame,
  );

export { selectBoard, makeSelectMemoryBoard };
