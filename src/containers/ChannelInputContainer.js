import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChannelInput from '../components/ChannelInput';
import {
  currentUserSelector,
  selectedChannelNameSelector
} from '../selectors';
import { messages } from '../reducers';

function ChannelInputContainer(props) {
  return (<ChannelInput {...props} />);
}

const mapStateToProps = (state) => {
  return {
    currentUser: currentUserSelector(state),
    selectedChannelName: selectedChannelNameSelector(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMessage: (channelName, message) => dispatch(
      messages.actions.createMessage({ channelName, message })
    ),
  };
};

ChannelInputContainer.propTypes = {
  createMessage: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  selectedChannelName: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChannelInputContainer);
