import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, SocialIcon, ListItem, Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { 
  createAppContainer, 
  createStackNavigator, 
  StackActions, 
  NavigationActions
} from 'react-navigation'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder='ログインID'
          inputStyle={{marginLeft: 15}}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          placeholder='パスワード'
          containerStyle={{marginTop: 20}}
          inputStyle={{marginLeft: 10}}
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='black'
            />
          }
        />
        <SocialIcon
          title='Oaksアカウントでログイン'
          button
          type='medium'
          style={{marginTop: 40}}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />

        <View style={styles.socialIcon}>
          <SocialIcon
            title='Facebookアカウントでログイン'
            button
            type='facebook'
          />
          <SocialIcon
            title='Twitterアカウントでログイン'
            button
            type='twitter'
          />
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  render() {
    var list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ]

    return (
      <View>
        <Card
          title='Oaksへようこそ !'
          image={require('./images/pic1.png')}>
          <Text style={{marginBottom: 10}}>
            現在地から近いワーカーが２名見つかりました。
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='オファーする' />
        </Card>

       {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </View>
    )
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

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
