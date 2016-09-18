import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import Avatar from 'react-native-interactive-avatar';
import I18n from 'react-native-i18n'
import NewStory from './newStory';
import UserMessages from './userMessages';
// import Contact from './contact';
import userStories from './userStories';

class Profile extends Component{

  constructor(props) {
    super(props)
    this.state = {
      userId: 2,
      name: 'Mohammad Malouf',
      username: 'papa13',
      messages: "ladeeda",
      // stories: this.props.stories,
    }
  }
  async fetchData() {
    var url = "https://simulnos.herokuapp.com/api/users/2"
    const response = await fetch(url)
    const json = await response.json()
    const user = json.user
    this.setState({user: user})
    }

  _onPressAddStory(){
      this.props.navigator.push({
        title: I18n.t('newStory'),
        tintColor: "#29c5da",
        component: NewStory,
        passProps: {userId: this.state.user.id, name: this.state.name, username: this.state.username,
        },
      })
    }

  _onPressViewMessages(){
    this.props.navigator.push({
      title: I18n.t('messages'),
      tintColor: "#29c5da",
      component: UserMessages,
      passProps: { userId: this.state.userId, name: this.state.name, messages: this.state.messages },
    })
  }

  latestStory() {
    // var recentStory = this.state.userId.stories.slice(-1)[0]
    return(
    <View style={{backgroundColor: '#FFB30F', borderWidth: 10, height: 100, width: 100, borderColor: '#27c2dc', padding: 10}}>
      <TouchableHighlight onPress={ () => this._onPressFeaturedStory()}>
      <Text style={{color: 'white'}}>{recentStory.content}</Text>
      </TouchableHighlight>
      <Text style={{textAlign: 'right'}}>{recentStory.name}</Text>
    </View>
  )

  }

  _onPressUserStories() {
    this.props.navigator.push({
      title: this.state.username,
      component: userStories,
      tintColor: "#29c5da",
      passProps: { userId: this.state.userId, username: this.state.username, name: this.state.name },
    })
  }
  // _onPressContact(){
  //   this.props.navigator.push({
  //     title: I18n.t('contact'),
  //     tintColor: "#29c5da",
  //     component: Contact,
  //     passProps: { userId: this.state.userId, name: this.state.name },
  //   })
  // }
  // cat avatar works https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif
  // dino avatar works https://media.giphy.com/media/13MGgJHu1nYAkE/giphy.gif

// fake person that works https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl2wCrCFBw9PnHukDYg6weIBSIMdSi8vSguLE6tjaRcps8OOw

  _onPressGive() {

  }
  render() {


    // var recentStory = this.props.stories.slice(-1)[0].content

    // if (this.props.user.photo !== null) {
      var photo = "https://static6.businessinsider.com/image/566ee7822340f838008b5601-1200/istanbul-turkey.jpg"
    // }

    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.container}>
          <Avatar
            source={photo}
            size={'default'}
            interactive={true}
            onChange={this.handleImageChange}
            />
        <Text style={styles.title}>{"Mohammad Malouf's " + I18n.t('profile')}</Text>

        <Text>July 24th, 2016</Text>
        <Text style={styles.newestStory}>"I was at home when the telephone rang. It was my mother. She told me that there had been a bomb at the boys' school. I immediately tried to call the school, but nobody answered. Then I tried to call the bus driver but he didn't answer either. I imagined the worst. The roads were closed, so I couldn’t get to the school. All I could do was pace around the house. Finally the bus driver answered the phone and said that everyone was alive. The bomb had landed on the playground and only destroyed one wall of the school. After several hours the roads were reopened, and they came back home. When I hugged them, it felt like the whole world was in my hands."</Text>
        <Text style={styles.newestStoryArabic}></Text>

        <View style={styles.personalInfo}>
        <Text style={styles.personalInfoHeading}>{I18n.t('about')} Mohammad </Text>
        <Text style={styles.personalInfoLocation}>Location: Istanbul, Turkey  </Text>
        <Text style={styles.personalInfoResources}>Resources Requesting: Resume writing in English and money so I can buy puzzles/toys for my kids.</Text>
        <Text style={styles.personalInfoSeeking}>Opportunities Seeking: Employment in electrical engineering. </Text>
        <Text style={styles.personalInfoSkills}>Skills/Expertise: Rail electrification, power generation, transmission and distribution. </Text>
        <Text style={styles.personalInfoBio}>Bio: "I love my children. They are my everything." </Text>
        </View>

          <TouchableHighlight onPress={() => this._onPressUserStories()} style={styles.button}>
            <Text style={styles.buttonText}> {"All " + I18n.t('stories') + " by Mohammed"} </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>
              {I18n.t('contact')}
            </Text>
          </TouchableHighlight>

         <View style={styles.donate}>
            <TextInput
              onChangeText={ (val)=> this.setState({username: val}) }
              placeholder="Enter amount in $"
              style={{ flex: 5, textAlign: 'center', backgroundColor: 'white', borderColor: '#27c2dc', borderWidth: 1}}
            />
          <TouchableHighlight onPress={() => this._onPressGive()} style={styles.giveContainer}>
              <Text style={styles.buttonGive}> Give </Text>
            </TouchableHighlight>
          </View>
          <Text style={{
              fontFamily: 'Avenir-Roman',
              color: 'white',
              textAlign: 'center',
              justifyContent: 'center',
              height: 20,
              backgroundColor: '#27c2dc',
              alignSelf: 'stretch',
              marginTop: 10,
              fontSize: 16,
              }}>Powered by</Text>
          <View style={styles.poweredContainer}>
            <Image
              style={styles.ingenico}
              source={require('../images/global_ingenico.png')}
            />
          </View>
      </View>
    </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  poweredContainer: {
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#27c2dc',
    alignSelf: 'stretch',
  },
  donate: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#27c2dc',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  amount: {
    flex: 5,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  giveContainer: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: 15,
  },
  buttonGive: {
    flex: 7,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
  },
  ingenico: {
    flex: 1,
    height: 110,
    width: 300,
    paddingBottom: 20,
    backgroundColor: '#27c2dc',
    // // alignSelf: 'stretch',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
   marginTop: 25,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  body: {
   flex: 0.1,
   borderColor: 'black',
   borderWidth: 1,
 },
  button: {
    height: 50,
    backgroundColor: '#27c2dc',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  newestStory: {
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
  newestStoryArabic: {
    backgroundColor: 'lightgrey',
  },
  personalInfoHeading: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
  },
  personalInfoLocation: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  personalInfoResources: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  personalInfoSeeking: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  personalInfoSkills: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  personalInfoBio: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Avenir-Roman',
  },
  personalInfo: {
    alignSelf: 'center',
    margin: 8,
    backgroundColor: '#beecf0',
  },
  });

module.exports = Profile;
