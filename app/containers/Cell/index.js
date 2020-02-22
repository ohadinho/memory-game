import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from '../Board/reducer';
import { useInjectReducer } from '../../utils/injectReducer';
import Column from './Column';
import CellValue from './CellValue';

const key = 'cell';

export function Cell({ onCellSelected, cellData }) {
  useInjectReducer({ key, reducer });

  return (
    <Column onClick={onCellSelected}>
      {cellData.isVisible ? <CellValue>{cellData.value}</CellValue> : 'X'}
    </Column>
  );
}

Cell.propTypes = {
  onCellSelected: PropTypes.func,
  cellData: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCellSelected: () => {
      ownProps.onCellSelected(ownProps.cellIndex);
    },
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
