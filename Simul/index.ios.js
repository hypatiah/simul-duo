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
  TouchableOpacity,
  Navigator,
} from 'react-native';

import Enter from './app/components/enter'
import Home from './app/components/home'
import Message from './app/components/message'
import Profile from './app/components/profile'
import Story from './app/components/story'
import UserMessages from './app/components/userMessages'
import UserStories from './app/components/userStories'

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Login',
    enter: 'Enter',
    register: 'Register',
    home: 'Home',
    search: 'Search',
    username: 'Username',
    password: 'Password',
    name: 'Name',
    location: 'Location',
    bio: 'Bio',
    skills: 'Skills/Expertise',
    contactInformation: 'Contact Information',
    resourceRequest: 'Resource Request',
    seeking: 'Opportunities Seeking',
    story: 'Story',
    stories: 'Stories',
    message: 'Message',
    messages: 'Messages',
    profile: 'Profile',
    createAccount: 'Create a Simul Account',
    inbox: 'Inbox',
    from: 'From:',
    date: 'Date:',
    subject: 'Subject:',
    content: 'Content:',
    senderContact: "Sender's contact info:",
    newStory: 'New Story',
    addStory: '+ Story',
    contact: 'Contact',
    send: 'Send',
    about: 'About',
    storiesBy: 'Stories by',
    post: 'Post',
    writeStoryHere: 'Write your story here.',
    photo: 'Photo',
    addPhoto: '+ Photo',
    upload: 'Upload',
    addImage: 'Add Image',
    go: 'Go',
    searchDot: 'Search...',
    latestStory: 'LATEST STORY',
  },
  ar: {
    login: 'دخول',
    username: 'اسم المستخدم',
    password: 'كلمه السر',
    name: 'اسم',
    enter: 'أدخل',
    register: 'تسجيل',
    home: 'منزل',
    search: 'بحث',
    bio: 'سيرة ذاتية',
    location: 'موقع',
    contactInformation: 'معلومات الاتصال',
    skills: 'مهارات',
    seeking: 'فرص تسعى',
    resourceRequest: 'الموارد أريد',
    story: 'قصة',
    stories: 'قصص',
    message: 'الرسالة',
    messages: 'رسائل',
    profile: 'الملف الشخصي',
    createAccount: 'إصنع حساب',
    inbox: 'صندوق الوارد',
    from: 'من',
    date: 'تاريخ',
    subject: 'موضوع',
    content: 'محتوى',
    senderContact: 'معلومات المرسل الاتصال',
    newStory: 'قصة جديدة',
    addStory: '+ قصة',
    contact: 'اتصال',
    send: 'إرسال',
    about: 'عن',
    storiesBy: 'قصص من',
    post: 'تابع',
    writeStoryHere: 'اكتب قصتك هنا',
    photo: 'صورة',
    addPhoto: '+ صورة',
    upload: 'تحميل',
    addImage: 'إضافة صورة',
    go: 'اذهب',
    searchDot: 'بحث...',
    latestStory: 'أحدث قصة',
  }
}

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
