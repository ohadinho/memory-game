import { INIT_MATCHES_LEFT, SELECT_CELL } from './constants';

export function selectCell(cellIndex) {
  return {
    type: SELECT_CELL,
    cellIndex,
  };
}

export function initMatchesLeft() {
  return {
    type: INIT_MATCHES_LEFT
  };
}
