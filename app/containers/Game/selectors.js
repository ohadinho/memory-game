import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGameStatus = state => state.game || initialState;

const makeSelectGameStatus = () =>
  createSelector(
    selectGameStatus,
    gameStatusState => gameStatusState.gameStatus,
  );

export { selectGameStatus, makeSelectGameStatus };
