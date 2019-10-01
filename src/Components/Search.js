/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ClownPoint from './general/ClownPoint';

type Props = {};

const screenWidth = Dimensions.get('window').width;

export default class Search extends Component<Props> {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const bigImageWidth2 = ((screenWidth - 12) * 2) / 3 + 2;
    const smallImageWidth2 = (screenWidth - 12) / 3 - 2;
    const smallImageWidth3 = (screenWidth - 16) / 3;
    return (
      <>
        <SearchBar
          lightTheme
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 1,
          }}
          inputContainerStyle={{ backgroundColor: '#eaeaea', borderRadius: 24 }}
          inputStyle={{}}
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.bodyView}>
          <View style={styles.threeImagesRowView}>
            <View
              style={{
                width: bigImageWidth2,
                marginRight: 4,
                marginTop: 4,
                overflow: 'hidden',
              }}
              >
              <Image
                source={require('../Asset/Images/shooting.jpeg')}
                resizeMode="cover"
                style={{ width: bigImageWidth2, height: bigImageWidth2 - 2 }}
              />
              <ClownPoint point={24}/>
            </View>
            <View
              style={{
                width: smallImageWidth2,
                marginHorizontal: 4,
                marginTop: 4,
              }}>
              <Image
                source={require('../Asset/Images/shooting.jpeg')}
                resizeMode="cover"
                style={{
                  width: smallImageWidth2,
                  height: smallImageWidth2,
                  marginBottom: 4,
                }}
              />
              <Image
                source={require('../Asset/Images/shooting.jpeg')}
                resizeMode="cover"
                style={{ width: smallImageWidth2, height: smallImageWidth2 }}
              />
            </View>
          </View>
          <View style={styles.sixImagesRowView}>
            {[1, 2, 3].map(item => (
              <View
                style={{
                  width: smallImageWidth3,
                  marginLeft: 4,
                  marginTop: 4,
                }}>
                <Image
                  source={require('../Asset/Images/shooting.jpeg')}
                  resizeMode="cover"
                  style={{
                    width: smallImageWidth3,
                    height: smallImageWidth3,
                    marginBottom: 4,
                  }}
                />
                <Image
                  source={require('../Asset/Images/shooting.jpeg')}
                  resizeMode="cover"
                  style={{ width: smallImageWidth3, height: smallImageWidth3 }}
                />
              </View>
            ))}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {},
  threeImagesRowView: {
    flexDirection: 'row-reverse',
  },
  sixImagesRowView: {
    flexDirection: 'row-reverse',
    marginLeft: 4,
  },
  clownIcon: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    width: 40,
    height: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
