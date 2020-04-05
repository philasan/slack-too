import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import SearchModal from '../components/SearchModal';
import { usersSelector } from '../selectors';

function SearchModalContainer(props) {
  return (<SearchModal {...props} />);
}

const mapStateToProps = (state) => {
  return {
    users: usersSelector(state),
  };
};

SearchModalContainer.propTypes = {
  users: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(SearchModalContainer);

