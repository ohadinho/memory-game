import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Board from '../Board';

export default function Game() {
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
