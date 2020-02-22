import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { selectCell } from './actions';
import { useInjectReducer } from '../../utils/injectReducer';
import Cell from '../Cell';
import { makeSelectMemoryBoard } from './selectors';
import Row from './Row';

const key = 'board';

export function Board({ memoryBoard, onCellSelected }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      {
        <div>
          {memoryBoard.map((row, i) => (
            <Row key={`cell-item-row-${i}`}>
              {row.map((col, j) => (
                <Cell
                  key={`cell-item-column-${j}`}
                  cellIndex={[i, j]}
                  cellData={col}
                  onCellSelected={onCellSelected}
                />
              ))}
            </Row>
          ))}
        </div>
      }
    </div>
  );
}

Board.propTypes = {
  memoryBoard: PropTypes.any,
  onCellSelected: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  memoryBoard: makeSelectMemoryBoard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCellSelected: evt => dispatch(selectCell(evt)),
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
