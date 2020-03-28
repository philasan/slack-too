import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChannelList from '../components/ChannelList';
import { channelListSelector, selectedChannelNameSelector } from '../selectors';
import { ui } from '../reducers';

function ChannelListContainer(props) {
  return (<ChannelList {...props} />);
}

const mapStateToProps = (state) => {
  return {
    channels: channelListSelector(state),
    selectedChannelName: selectedChannelNameSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectChannel: (channelName) => dispatch(ui.actions.selectChannel(channelName)),
  };
};

ChannelListContainer.propTypes = {
  channels: PropTypes.array.isRequired,
  selectChannel: PropTypes.func.isRequired,
  selectedChannelName: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListContainer);
