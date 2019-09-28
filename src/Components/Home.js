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
import { Navigation } from 'react-native-navigation';

type Props = {};

export default class Home extends Component<Props> {
  static options(passProps) {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'cameraButton',
            icon: require('../Asset/Images/icons/camera_icon.png')
          }
        ],
        rightButtons: [
          {
            id: 'gameButton',
            icon: require('../Asset/Images/icons/game_icon.png')
          }
        ],
      }
    };
  }

  _onFabButtonPressed = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'NEW_POST',
        passProps: {},
        options: {
          topBar: {
            title: {
              text: 'New Post'
            }
          }
        }
      }
    });
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
            <Image
              source={require('../Asset/Images/icons/clown.png')}
              resizeMode='contain'
              style={{width: 22, height: 22, marginTop: 10, marginLeft: 8}}
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
        <Icon
          reverse
          containerStyle={styles.fabButton}
          name='plus'
          type='font-awesome'
          color='#f50'
          onPress={this._onFabButtonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  fabButton: {
    right: 20,
    bottom: 20,
    position: 'absolute',
  },
});
