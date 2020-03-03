import produce from 'immer';

export const initialState = {

};

const boardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  });



export default boardReducer;
