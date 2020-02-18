import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { selectCell } from '../Cell/actions';
import { useInjectReducer } from '../../utils/injectReducer';
import Cell from '../Cell';
import { makeSelectMemoryBoard } from './selectors';
import Row from './Row';

const key = 'board';

export function Board({ memoryBoard }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      {
        <div>
          {memoryBoard.map((row, i) => (
            <Row>
              {row.map((col, j) => (
                <Cell cellIndex={[i, j]} cellData={col} />
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
  memoryBoard: makeSelectMemoryBoard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onCellSelected: evt => dispatch(selectCell(evt.target.value)),
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
