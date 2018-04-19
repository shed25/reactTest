import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'react-twitter-widgets'

class TwitterView extends Component {
    render() {
        return (
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: this.props.userName
                }}
                options={{
                    username: this.props.userName,
                    height: '400',
                    width: '600'
                }}
                onLoad={() => this.props.changeButton()}
            />
        );
    }
}
TwitterView.propTypes = {
  userName: PropTypes.string,
  changeButton: PropTypes.func
}
export default TwitterView;