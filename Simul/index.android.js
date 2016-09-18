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
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Enter') {
      return (
        <Enter
          navigator={navigator} />
      );
    }
    if (routeId === 'Home') {
      return (
        <Home
          navigator={navigator} />
      );
    }
    if (routeId === 'Message') {
      return (
        <Message
            navigator={navigator} />
      );
    }
    if (routeId === 'Profile') {
      return (
        <Profile
          navigator={navigator} />
      );
    }
    if (routeId === 'Story') {
      return (
        <Story
            navigator={navigator} />
      );
    }
    if (routeId === 'UserMessages') {
      return (
        <UserMessages
            navigator={navigator} />
      );
    }
    if (routeId === 'UserStories') {
      return (
        <UserStories
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>NO ROUTE ERROR</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <Navigator
          initialRoute={{id: 'Enter', name: 'Enter'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}

      />
    );
  }
}
//NAV BAR ATTEMPT
// navigationBar={
// <Navigator.NavigationBar
// routeMapper={{
//   LeftButton: (route, navigator, index, navState) =>
//    { return (<Text>Cancel</Text>); },
//   RightButton: (route, navigator, index, navState) =>
//     { return (<Text>Done</Text>); },
//   Title: (route, navigator, index, navState) =>
//     { return (<Text>Awesome Nav Bar</Text>); },
// }}
// style={{backgroundColor: 'gray'}}
// />
// }
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
