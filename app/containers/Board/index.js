import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { useInjectReducer } from '../../utils/injectReducer';
import Cell from '../Cell';
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
};

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps(dispatch) {
  return {
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
