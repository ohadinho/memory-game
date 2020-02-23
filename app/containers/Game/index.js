import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Board from '../Board';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { updateMatchesLeft } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from '../Game/reducer';
import { makeSelectGameStatus } from './selectors';
import GameStatus from '../GameStatus';

const key = 'game';

export function Game({ onMatchesLeftUpdate, gameStatus }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      <Helmet>
        <title>Game</title>
        <meta name="description" content="Memory Game" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Board onMatchesLeftUpdate={onMatchesLeftUpdate} matchesLeft={gameStatus.matchesLeft} />
      <GameStatus matchesLeft={gameStatus.matchesLeft} />
    </div>
  );
}

Game.propTypes = {
  onMatchesLeftUpdate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  gameStatus: makeSelectGameStatus()
});

export function mapDispatchToProps(dispatch) {
  return {
    onMatchesLeftUpdate: evt => dispatch(updateMatchesLeft(evt)),
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
