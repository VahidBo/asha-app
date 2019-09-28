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

export default class NewPost extends Component<Props> {
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <>
        <View style={styles.bodyView}>
          <Text>new post page.</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {},

});
