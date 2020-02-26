import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.GameStatus';

export default defineMessages({
  messagesLeft: {
    id: `${scope}.messagesLeft`,
    defaultMessage: 'Only {matchesLeft} matches are left !',
  },
  gameOver: {
    id: `${scope}.gameOver`,
    defaultMessage: 'Game Over !',
  },
});
