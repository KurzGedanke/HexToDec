import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {toDec, splitIP} from './common/convertIPs.js'


class ConvertIP extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
  var resu = toDec(splitIP(this.props.decIP))
    return(
      <View>
        {this.props.decIP.length == 8 && <Text>{resu}</Text>}
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hexIP: '',
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Decimal IP!</Text>
        <Text>This app lets you convert a HEX IP to a Decimal IP.</Text>
        <TextInput
          style={styles.instructions}
          placeholder="Input HEX IP"
          onChangeText={(hexIP) => this.setState({hexIP})}
        />
        <ConvertIP decIP={this.state.hexIP} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 20,
  },
});
