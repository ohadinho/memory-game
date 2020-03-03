import PropTypes from 'prop-types';
import React from 'react';
import GameStatusContainer from './GameStatusContainer';
import GameStatusItem from './GameStatusItem';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ResetButton from './ResetButton';

export default function GameStatus({ matchesLeft, onReset }) {
  return (
    <GameStatusContainer>
      <GameStatusItem>
        {isGameOver(matchesLeft) ?
          <FormattedMessage
            {...messages.gameOver}
          />
          :
          <FormattedMessage
            {...messages.messagesLeft}
            values={{ matchesLeft: matchesLeft }}
          />
        }
      </GameStatusItem>
      <GameStatusItem>
        { isGameOver(matchesLeft) && <ResetButton onClick={onReset}>Reset</ResetButton> }
      </GameStatusItem>
    </GameStatusContainer>
  );
}

GameStatus.propTypes = {
  matchesLeft: PropTypes.any,
  onReset: PropTypes.func,
};

const isGameOver = (matchesLeft) => {
  return matchesLeft === 0;
};
