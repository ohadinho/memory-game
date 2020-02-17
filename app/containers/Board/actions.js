import { SELECT_CELL } from './constants';

export function selectCell(cellRow, cellColumn) {
  return {
    type: SELECT_CELL,
    cellRow,
    cellColumn,
  };
}
