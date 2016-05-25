'use strict';

const React = require('react');
const { PropTypes } = React;
const {
  StyleSheet,
  Image
} = require('react-native');

var CustomMarker = React.createClass({

  propTypes: {
    pressed: PropTypes.bool,
  },

  render: function () {
    return (
      <Image
        style={styles.image}
        source={this.props.pressed ? require('./ruby.png') : require('./diamond.png')}
        resizeMode='contain'
      />
    );
  }
});

var styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});

module.exports = CustomMarker;
