import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Channel from '../components/Channel';
import { selectedChannelSelector, messagesForSelectedChannelSelector } from '../selectors';

function ChannelContainer(props) {
  return (<Channel {...props} />);
}

const mapStateToProps = (state) => {
  return {
    channel: selectedChannelSelector(state),
    messages: messagesForSelectedChannelSelector(state),
  };
}

ChannelContainer.propTypes = {
  channel: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(ChannelContainer);