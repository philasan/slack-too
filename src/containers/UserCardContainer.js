import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserCard from '../components/UserCard';
import { userSelector } from '../selectors';

function UserCardContainer(props) {
  return (<UserCard {...props} />);
}

const mapStateToProps = (state, props) => {
  return {
    user: userSelector(state, props),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

UserCardContainer.propTypes = {
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserCardContainer);