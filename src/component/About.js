import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import A from 'react-native-a'
import styles from '../styles';

export default class About extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Thank you!</Text>
                    <Text style={styles.text}>For downloading my first app. My name is KurzGedanke and I'm a Computer Science Student from Germany.</Text>
                    <Text style={styles.text}>HexToDec, or formerly "toDecimalIP" was my first Javascript project, which is now my first app project.</Text>
                    <Text style={styles.text}>This App is Open Source (MIT) and you can find the source code on <A href="https://github.com/KurzGedanke/decimalIP">GitHub</A>.</Text>
                    <Text style={styles.text}>If you like this App, please consider following me on <A href="https://twitter.com/KurzGedanke">Twitter,</A> <A href="https://chaos.social/@KurzGedanke">Mastodon</A> or take a listen on my <A href="https://kurzgedanke.me/">Podcast (German)</A>.</Text>
                    <Text style={styles.text}>And now have fun converting IPs!</Text>
                </ScrollView>
            </View>
        )
    }
}