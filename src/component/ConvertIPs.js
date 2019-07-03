import React, {Component} from 'react';
import {Text,View} from 'react-native';
import styles from '../styles';
import {toDec, splitIP} from '../common/convertIPs.js'

export default class ConvertIP extends React.Component{
    constructor(props){
      super(props);
    }
    render() {
    var resu = toDec(splitIP(this.props.decIP))
      return(
        <View>
          {this.props.decIP.length == 8 && <Text style={styles.results} selectable={true}>{resu}</Text>}
        </View>
      );
    }
  }