import PropTypes from 'prop-types';
import React from 'react';

export default function GameStatus({ matchesLeft }) {
  return (
    <div>{matchesLeft}</div>
  )
}

GameStatus.propTypes = {
  matchesLeft: PropTypes.any,
};
