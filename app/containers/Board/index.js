import React, { memo } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import PropTypes from 'prop-types';
import { selectCell } from './actions';
import { createStructuredSelector } from 'reselect';
import Cell from '../Cell';

export default function Board({ memoryBoard }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      {
        <div>
          {memoryBoard.map((row, i) => (
            <div key={i}>
              {row.map((col, j) => (
                <Cell cellIndex={[i, j]} key={j} value={col}></Cell>
              ))}
            </div>
          ))}
        </div>
      }
    </div>
  );
}

Board.propTypes = {
  memoryBoard: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
//  memoryGame: makeSelectMemoryGame(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCellSelected: evt => dispatch(selectCell(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Board);
