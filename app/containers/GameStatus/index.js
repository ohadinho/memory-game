import PropTypes from 'prop-types';
import React from 'react';
import CenteredDiv from './CenteredDiv';

export default function GameStatus({ matchesLeft }) {
  return (
    <CenteredDiv>{matchesLeft}</CenteredDiv>
  )
}

GameStatus.propTypes = {
  matchesLeft: PropTypes.any,
};
