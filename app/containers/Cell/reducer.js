import produce from 'immer';

export const initialState = {};

const boardReducer = (state = initialState) => produce(state);

export default boardReducer;
