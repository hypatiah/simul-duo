import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Enter extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/simul_icon1.png')} style={styles.image}/>
        <Text style={styles.title}>SIMUL</Text>
        <TouchableHighlight>
          <Text style={styles.enter}>Enter</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
   fontSize: 40,
   alignSelf: 'center',
   margin: 30,
   backgroundColor: 'white',
   padding: 10,
   borderRadius: 6,
   fontFamily: 'Avenir-Roman',
   color: '#6d6f6f',
  },
  enter: {
    fontSize: 25,
    width: 300,
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#31d2cd',
    fontFamily: 'Avenir-Roman',
    color: 'white',
  }
});

module.exports = Enter;
