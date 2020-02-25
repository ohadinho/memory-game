import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { selectCell, setFoundMatch } from './actions';
import { useInjectReducer } from '../../utils/injectReducer';
import Cell from '../Cell';
import { makeSelectFoundMatch, makeSelectMemoryBoard } from './selectors';
import Row from './Row';

const key = 'board';

export function Board({ memoryBoard, onCellSelected, onMatchesLeftUpdate, onSetFoundMatch, matchesLeft, isFoundMatch }) {
  useInjectReducer({ key, reducer });

  if(matchesLeft === -1) {
    matchesLeft = memoryBoard.length * memoryBoard[0].length / 2;
    onMatchesLeftUpdate(matchesLeft);
  }

  useEffect(() => {
    matchesLeft = matchesLeft !== -1 ? matchesLeft : memoryBoard.length * memoryBoard[0].length / 2;
    if (isFoundMatch) {
      onMatchesLeftUpdate(--matchesLeft);
      onSetFoundMatch(false);
    }
  }, [isFoundMatch]);

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
  isFoundMatch: PropTypes.bool,
  onCellSelected: PropTypes.func,
  onMatchesLeftUpdate: PropTypes.func,
  onSetFoundMatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  memoryBoard: makeSelectMemoryBoard(),
  isFoundMatch: makeSelectFoundMatch()
});

export function mapDispatchToProps(dispatch) {
  return {
    onCellSelected: evt => {
      dispatch(selectCell(evt));
    },
    onSetFoundMatch: isFoundMatch => {
      dispatch(setFoundMatch(isFoundMatch))
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
