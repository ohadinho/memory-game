import produce from 'immer';
import { SELECT_CELL } from './constants';

export const initialState = {
  memoryBoard: [
    [
      { value: 7, isVisible: false },
      { value: 8, isVisible: false },
      { value: 1, isVisible: false },
      { value: 7, isVisible: false },
    ],
    [
      { value: 6, isVisible: false },
      { value: 3, isVisible: false },
      { value: 2, isVisible: false },
      { value: 8, isVisible: false },
    ],
    [
      { value: 4, isVisible: false },
      { value: 5, isVisible: false },
      { value: 1, isVisible: false },
      { value: 2, isVisible: false },
    ],
    [
      { value: 5, isVisible: false },
      { value: 6, isVisible: false },
      { value: 4, isVisible: false },
      { value: 3, isVisible: false },
    ],
  ],
};

const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_CELL:
        // action.cellRow
        //   // Delete prefixed '@' from the github username
        //   draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

export default boardReducer;
