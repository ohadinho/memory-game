import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from '../Board/reducer';
import { selectCell } from './actions';
import { useInjectReducer } from '../../utils/injectReducer';
import Column from './Column';

const key = 'cell';

export function Cell({ cellIndex, onCellSelected, cellData }) {
  useInjectReducer({ key, reducer });

  return <Column onClick={onCellSelected}>{cellData.value}</Column>;
}

Cell.propTypes = {
  cellIndex: PropTypes.any,
  onCellSelected: PropTypes.func,
  cellData: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  //  cellIndex: makeSelectCellIndex(),
  // value: makeSelectCellValue()
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCellSelected: () => dispatch(selectCell(ownProps.cellIndex)),
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
