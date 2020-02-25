import { SELECT_CELL, SET_FOUND_MATCH } from './constants';

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
