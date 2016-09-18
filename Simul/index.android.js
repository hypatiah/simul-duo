/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Enter from './app/components/enter'
import Home from './app/components/home'
import Message from './app/components/message'
import Profile from './app/components/profile'
import Story from './app/components/story'
import UserMessages from './app/components/userMessages'
import UserStories from './app/components/userStories'


class Simul extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Enter', index: 0 }}
        renderScene={(route, navigator) => {
          return (
            <Enter
             title={route.title}

             onForward={ () => {
               const nextIndex = route.index + 1;
               navigator.push({
                 title: 'Scene ' + nextIndex,
                 index: nextIndex,
               });
             }}

             onBack={() => {
               if (route.index > 0) {
                 navigator.pop();
               }
             }}
           />
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  },
});

AppRegistry.registerComponent('Simul', () => Simul);
