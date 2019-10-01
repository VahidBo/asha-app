/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Card, Button, Icon } from "react-native-elements";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Avatar
              size="large"
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
              }}
              rounded
              showEditButton
            />
            <Text style={styles.username}>Username</Text>
          </View>
          <View style={styles.analyticsWrapper}>
            <View style={styles.analyticsContainer}>
              <View style={styles.analyticsDetail}>
                <Text style={styles.analyticsDetailText}>11</Text>
                <Text style={styles.analyticsDetailText}>Point(s)</Text>
              </View>
              <View style={styles.analyticsDetail}>
                <Text style={styles.analyticsDetailText}>34</Text>
                <Text style={styles.analyticsDetailText}>Win(s)</Text>
              </View>
              <View style={styles.analyticsDetail}>
                <Text style={styles.analyticsDetailText}>234</Text>
                <Text style={styles.analyticsDetailText}>Follower(s)</Text>
              </View>
            </View>
            <Button
              icon={<Icon name="edit" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 15,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                height: 30,
              }}
              titleStyle={{ fontSize: 12 }}
              title="Edit Profile"
            />
          </View>
        </View>
        <View style={styles.body}>
          <Card>
            <Text style={{ marginBottom: 10 }}>
              This is some bio. This is some bio. This is some bio. This is some
              bio. This is some bio. This is some bio. This is some bio...
            </Text>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  header: {
    flexDirection: "row",
    height: 120,
    marginTop: 24,
  },
  body: {

  },
  avatarContainer: {
    flex: 1,
    alignItems: "center",
  },
  username: {
    flex: 1,
    marginTop: 12,
    alignItems: "center",
  },
  analyticsWrapper: {
    flex: 2,
    paddingHorizontal: 8,
  },
  analyticsContainer: {
    paddingVertical: 16,
    flexDirection: "row",
  },
  analyticsDetail: {
    flex: 1,
  },
  analyticsDetailText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
