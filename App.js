import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './components/Signup'
import Daniel from './components/DanielProfile'

const Stack = createStackNavigator();

const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
    )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IntroScreen}/>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="DanielLay" component={Daniel}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text='Music Sharing'/>
      <Text>Connect with your friends!</Text>
      <Button title="Sign in"
        onPress={() =>
          navigation.navigate('SignIn', { name: 'Sign in' })
        }/>
      <Button title="SignUp"
        onPress={() =>
          navigation.navigate('SignUp', {name: 'SignUp'})
        }/>
      <Button title="About"
        onPress={() =>
          navigation.navigate('About', {name: 'About'})
        }/>
    </View>
  );
};
const SignIn = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button title="Confirm"
        onPress={() =>
          navigation.navigate('MainScreen', {name: 'MainScreen'})
        }/>
    </View>
  )
};
const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <Button title="Listen to Music"/>
      <Button title="Send Requests"/>
      <Button title="View Friend Reviews"/>
    </View>
  )
};
const SignUp = ({ navigation, route }) => {
  return (
    <SignUpScreen/>
  )
};
const About = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState(" Leave Feedback...");

  return (
    <View style={styles.container}>
      <Text>View Profiles of the developers</Text>
      <Button title="Profiles"
        onPress={() =>
          navigation.navigate('ProfileScreen', { name: 'ProfileScreen' })
        }/>
      <Text>Created by Team2</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    </View>
  )
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Button title="Daniel Lay"
        onPress={() =>
          navigation.navigate('DanielLay', { name: 'DanielLay' })
        }/>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection:'row',
  },
  helloText: {
    fontSize: 40,
    color: 'blue'
  },
  logo:{
    width: 1526,
    height: 900,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
