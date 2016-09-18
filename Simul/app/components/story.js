import React, { Component } from 'react';
import I18n from 'react-native-i18n'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';

import Profile from './profile.js';
import api from '../Utils/api.js';
import Home from './home.js'

class Story extends Component{
  constructor(props) {
    super(props);
    this.state = {
      story: '?',
    };
  }

  // componentDidMount() {
  //   this.fetchData().done()
  // }

  // async fetchData() {
  //   var url = "https://simulnos.herokuapp.com/api/users/2/stories"
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   const story = json.stories[0]
  //   this.setState({story: story})
  //   }

  _onPressProfile() {
      this.props.navigator.push({
        title: 'papa13',
        tintColor: "#29c5da",
        id: 'Profile',
        // passProps: {user: res.user, messages: res.messages, stories: res.stories}
      })
  }

  render() {
    var photo = "https://static6.businessinsider.com/image/566ee7822340f838008b5601-1200/istanbul-turkey.jpg"

    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{"The whole world in my hands".toUpperCase()}</Text>
          <Image source={{uri: photo}} style={{width: 400, height: 225}}/>

          <Text style={styles.content}>"I was at home when the telephone rang. It was my mother. She told me that there had been a bomb at the boys' school. I immediately tried to call the school, but nobody answered. Then I tried to call the bus driver but he didn't answer either. I imagined the worst. The roads were closed, so I couldn’t get to the school. All I could do was pace around the house. Finally the bus driver answered the phone and said that everyone was alive. The bomb had landed on the playground and only destroyed one wall of the school. After several hours the roads were reopened, and they came back home. When I hugged them, it felt like the whole world was in my hands."</Text>

          <TouchableHighlight onPress={this._onPressProfile.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>
            {"Mohammad Malouf's " + I18n.t('profile')}
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#27c2dc',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },

  title: {
   fontFamily: 'Avenir-Roman',
   color: '#6d6f6f',
   fontSize: 28,
   alignSelf: 'center',
   margin: 40,
  },
  content: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
    marginTop: 10,
    marginBottom: 5,
    color: '#4a4c4d',
    textAlign: 'center',
    padding: 5,
    paddingTop: 5,
  },

});

module.exports = Story;
