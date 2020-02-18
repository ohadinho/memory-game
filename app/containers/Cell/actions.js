import { SELECT_CELL } from '../Board/constants';

export function selectCell(cellIndex) {
  return {
    type: SELECT_CELL,
    cellIndex,
  };
}
