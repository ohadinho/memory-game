import React, { memo } from 'react';
import { selectCell } from '../Board/actions';
import reducer from '../Board/reducer';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

export default function Cell({ cellIndex, onCellSelected, value }) {
  useInjectReducer({ key, reducer });

  return (<div onClick={onCellSelected}>
    {value}
  </div>);
}

Cell.propTypes = {
  cellIndex: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
//  cellIndex: makeSelectCellIndex(),
// value: makeSelectCellValue()
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCellSelected: evt => dispatch(selectCell(ownProps.cellIndex)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cell);
