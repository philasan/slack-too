import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChannelList from '../components/ChannelList';
import { channelListSelector } from '../selectors';

function ChannelListContainer(props) {
  return (<ChannelList {...props} />);
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    channels: channelListSelector(state),
  };
};

const mapDispatchToProps = {};

ChannelListContainer.propTypes = {
  channels: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListContainer);