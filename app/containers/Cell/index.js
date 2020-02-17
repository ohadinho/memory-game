import React from 'react';
import { selectCell } from '../Board/actions';
import reducer from '../Board/reducer';

export default function Cell({ cellIndex }) {
  useInjectReducer({ key, reducer });

  return <div />;
}

export function mapDispatchToProps(dispatch) {
  return {
    onCellSelected: evt => dispatch(selectCell(evt.target.value)),
  };
}
