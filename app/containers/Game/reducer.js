import produce from 'immer';
import { UPDATE_MATCHES_LEFT } from './constants';

export const initialState = {
  gameStatus: { matchesLeft: -1 },
};

const gameReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case UPDATE_MATCHES_LEFT:
      draft.gameStatus.matchesLeft = action.matchesLeft;
      break;
  }
});

export default gameReducer;
