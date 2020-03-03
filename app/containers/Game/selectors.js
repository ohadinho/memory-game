import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGameState = state => state.game || initialState;

const makeSelectMemoryBoard = () =>
  createSelector(
    selectGameState,
    gameState => gameState.memoryBoard
  );

const makeSelectGameStatus = () =>
  createSelector(
    selectGameState,
    gameState => gameState.gameStatus,
  );

export { selectGameState, makeSelectMemoryBoard, makeSelectGameStatus };
