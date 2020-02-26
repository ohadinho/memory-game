import PropTypes from 'prop-types';
import React from 'react';
import GameStatusContainer from './GameStatusContainer';
import GameStatusText from './GameStatusText';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function GameStatus({ matchesLeft }) {
  return (
    <GameStatusContainer>
      <GameStatusText>
        {isGameOver(matchesLeft) ?
          <FormattedMessage
            {...messages.gameOver}
          /> :
          <FormattedMessage
            {...messages.messagesLeft}
            values={{ matchesLeft: matchesLeft }}
          />
        }
      </GameStatusText>
    </GameStatusContainer>
  )
}

GameStatus.propTypes = {
  matchesLeft: PropTypes.any,
};

const isGameOver = (matchesLeft) => {
  return matchesLeft === 0;
}
