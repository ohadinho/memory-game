import { UPDATE_MATCHES_LEFT, SELECT_CELL, SET_FOUND_MATCH, RESET_BOARD } from './constants';

export function updateMatchesLeft(matchesLeft) {
  return {
    type: UPDATE_MATCHES_LEFT,
    matchesLeft,
  };
}

export function selectCell(cellIndex) {
  return {
    type: SELECT_CELL,
    cellIndex
  };
}

export function setFoundMatch(isFoundMatch) {
  return {
    type: SET_FOUND_MATCH,
    isFoundMatch
  };
}

export function resetBoard() {
  return {
    type: RESET_BOARD
  };
}
