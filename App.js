import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View, StatusBar, Keyboard, Button} from 'react-native';
import styles from './src/styles';
import ConvertIP from './src/component/ConvertIPs'
import About from './src/component/About'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hexIP: '',
      view: ['calc', 'about'],
      activeView: 'calc'
    };

    this.disKeyboard = this.disKeyboard.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  disKeyboard(){
    Keyboard.dismiss();
  }

  changeView(){
    console.log('CHange view!')
    if (this.state.activeView == 'calc'){
      this.setState({
        activeView: 'about'
      })
    } else {
      this.setState({
        activeView: 'calc'
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F5FCFF'}}>
          <StatusBar backgroundColor="blue" barStyle="dark-content" />
          {this.state.activeView == 'calc' && 
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to HexToDec</Text>
              <Text style={styles.text}>Please enter a hexadecimal IP to convert it into a decimal IP.</Text>
              <TextInput
              style={styles.input}
              placeholder="Input HEX IP e.g 7F000001"
              onChangeText={(hexIP) => this.setState({hexIP})}
              />
              <ConvertIP decIP={this.state.hexIP} />
              <Button 
                onPress={this.disKeyboard}
                title='dismiss keyboard'
              />
            </View>
      }
      {this.state.activeView == 'about' && <About />}
      <Button
      onPress={this.changeView}
      title='About'
      />
      </SafeAreaView>
    );
  }
}