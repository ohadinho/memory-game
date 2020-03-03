import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Board from '../Board';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from '../Game/reducer';
import { makeSelectGameStatus, makeSelectMemoryBoard } from './selectors';
import GameStatus from '../GameStatus';
import { resetBoard, selectCell } from './actions';

const key = 'game';

export function Game({ onCellSelected, onReset, gameStatus, memoryBoard }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      <Helmet>
        <title>Game</title>
        <meta name="description"
              content="Memory Game"/>
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Board memoryBoard={memoryBoard}
             onCellSelected={onCellSelected} />
      <GameStatus matchesLeft={gameStatus.matchesLeft}
                  onReset={onReset}/>
    </div>
  );
}

Game.propTypes = {
  memoryBoard: PropTypes.any,
  onCellSelected: PropTypes.func,
  onReset: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  gameStatus: makeSelectGameStatus(),
  memoryBoard: makeSelectMemoryBoard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCellSelected: evt => {
      dispatch(selectCell(evt));
    },
    onReset: () => {
      dispatch(resetBoard());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Game);
