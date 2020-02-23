import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Board from '../Board';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { updateGameStatus } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from '../Game/reducer';

const key = 'game';

export function Game() {
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
      <Board />
    </div>
  );
}

Game.propTypes = {
  onGameStatusUpdate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps(dispatch) {
  return {
    onGameStatusUpdate: evt => dispatch(updateGameStatus(evt)),
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
