import produce from 'immer';
import { SELECT_CELL } from './constants';

export const initialState = {
  selectedCell: [null, null],
};

const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_CELL:
        // action.cellRow
        //   // Delete prefixed '@' from the github username
        draft.selectedCell = action.cellIndex;
        //   draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

export default boardReducer;
