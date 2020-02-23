import { SELECT_CELL } from './constants';

export function selectCell(cellIndex) {
  return {
    type: SELECT_CELL,
    cellIndex
  };
}
