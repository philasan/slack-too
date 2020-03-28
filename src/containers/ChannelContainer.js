import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Channel from '../components/Channel';
import { channelSelector, messagesByChannelSelector } from '../selectors';

function ChannelContainer(props) {
  return (<Channel {...props} />);
}

const mapStateToProps = (state) => {
  return {
    channel: channelSelector(state, { channel: '#general' }),
    messages: messagesByChannelSelector(state, { channel: '#general' }),
  };
}

const mapDispatchToProps = {};

ChannelContainer.propTypes = {
  channel: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelContainer);