import produce from 'immer';

export const initialState = {};

const cellReducer = (state = initialState) => produce(state, draft => {});

export default cellReducer;
