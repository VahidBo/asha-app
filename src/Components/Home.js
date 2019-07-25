/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Avatar, SocialIcon, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class Home extends Component<Props> {
  static options(passProps) {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'cameraButton',
            icon: require('../Asset/Images/camera_icon.png')
          }
        ],
        rightButtons: [
          {
            id: 'gameButton',
            icon: require('../Asset/Images/game_icon.png')
          }
        ],
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={{}} >
          <View style={{flexDirection: 'row'}}>
            <Avatar
              rounded
              size={42}
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              containerStyle={{flex: 0, marginRight: 12}}
            />
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Username</Text>
              <Text style={{fontSize: 12}}>Location</Text>
            </View>
          </View>
          <View style={{marginTop: 12}}>
            <Text numberOfLines={2}>This is a up to 50 characters caption and up to 3 hashtags.</Text>
          </View>
          <View style={{marginTop: 12}}>
            <Image
              source={require('../Asset/Images/shooting.jpeg')}
              resizeMode='contain'
              style={{width: null, height: 220}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SocialIcon
              type='twitter'
              light
              raised={false}
            />
            <SocialIcon
              light
              raised={false}
              type='instagram'
            />
          </View>
          <View style={{flex: 0, flexDirection: 'row'}}>
            <Icon
              name='note-add'
              type='material'
              color='#517fa4'
            />
          </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
