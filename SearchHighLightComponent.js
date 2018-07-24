/**
 * Created by LuoSiLv WebStorm.
 * Author: lv
 * Date:
 * Time:
 * Desc:
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput
} from 'react-native';

export default class SearchHighLightComponent extends Component {
  static propTypes = {
    frontStyle: TextInput.propTypes.style,
    delimiterStyle: TextInput.propTypes.style,
    behindStyle: TextInput.propTypes.style,
    style: View.propTypes.style,
    delimiter: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    style: {
      alignItems: 'flex-end'
    },
  };

  render() {
    const {value, delimiter, style, frontStyle, delimiterStyle, behindStyle} = this.props;
    const splits = value && delimiter && value.split(delimiter);
    if (!delimiter) {
      return (
        <View style={[{flexDirection: 'row'}, style]}>
          <Text style={frontStyle}>{value}</Text>
        </View>
      );
    }
    return (
      <View style={[{flexDirection: 'row'}, style]}>
        {splits && splits.map((item, index) => {
          if (index === 0) {
            return (<Text style={frontStyle} key={index}>{item}</Text>)
          }
          return (<Text key={index}><Text style={delimiterStyle}>{delimiter}</Text><Text
            style={frontStyle}>{item}</Text></Text>)
        })}
      </View>
    );
  }
}
