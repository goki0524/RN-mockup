import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder='    ログインID'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          placeholder='   パスワード'
          containerStyle={{marginTop: 20}}
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='black'
            />
          }
        />
        <SocialIcon
          title='Sign In Oaks'
          button
          type='medium'
          style={{marginTop: 40}}
        />

        <View style={styles.socialIcon}>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          <SocialIcon
            title='Sign In With Twitter'
            button
            type='twitter'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  socialIcon: {
    marginTop: 80,
  }
});
