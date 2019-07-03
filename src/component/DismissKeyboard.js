import React, {Component} from 'react';
import {Keyboard, Button} from 'react-native';
import styles from '../styles';

export default class DismissKeyboard extends Component{
    constructor(props){
        super(props);
        this.disKeyboard = this.disKeyboard.bind(this);
    }

    disKeyboard(){
        Keyboard.dismiss();
      }
    
    render(){
        return(
            <Button 
            onPress={this.disKeyboard}
            title="Dismiss Keyboard"
            />
        );
    }
}