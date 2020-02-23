import { UPDATE_MATCHES_LEFT } from './constants';

export function updateMatchesLeft(matchesLeft) {
  return {
    type: UPDATE_MATCHES_LEFT,
    matchesLeft,
  };
}
