import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function(props) {
  const { point } = props;
  return (
    <View style={styles.clownView}>
      <Image
        source={require('../../Asset/Images/icons/clown.png')}
        resizeMode="contain"
        style={{ width: 16, height: 16, marginTop: 0, marginRight: 8 }}
      />
      <Text>{point}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clownView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 8,
    left: 8,
    //width: 40,
    //height: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
