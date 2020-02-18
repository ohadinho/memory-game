import produce from 'immer';

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

  });

export default boardReducer;
