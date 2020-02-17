import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import messages from './messages';

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
    </div>
  );
}
