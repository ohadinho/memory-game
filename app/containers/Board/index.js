import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { selectCell } from './actions';
import { useInjectReducer } from '../../utils/injectReducer';
import Cell from '../Cell';
import { makeSelectFoundMatch, makeSelectMemoryBoard } from './selectors';
import Row from './Row';

const key = 'board';

export function Board({ memoryBoard, onCellSelected, onMatchesLeftUpdate }) {
  useInjectReducer({ key, reducer });

  const onInitMatchesLeft = () => {
    const matchesLeft = memoryBoard.length * memoryBoard[0].length / 2;
    onMatchesLeftUpdate(matchesLeft);
  };

  useEffect(() => {
    onInitMatchesLeft();
  });

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
  matchesLeft: PropTypes.any,
  onCellSelected: PropTypes.func,
  onInitMatchesLeft: PropTypes.func,
  onMatchesLeftUpdate: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  memoryBoard: makeSelectMemoryBoard(),
  foundMatch: makeSelectFoundMatch()
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCellSelected: evt => {
      dispatch(selectCell(evt));
      const foundMatch = makeSelectFoundMatch();
      if (foundMatch) {
        ownProps.onMatchesLeftUpdate(--ownProps.matchesLeft);
      }
    }
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
