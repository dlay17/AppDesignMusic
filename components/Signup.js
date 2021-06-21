import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';

const Signup = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [reconfirmPassword, setReconfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Music Share</Text>
      <Text>The tinder of music</Text>
      <View style={styles.signup}>
        <Text>Username:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={setUsername}
          value={username}
        />
        <Text>Email:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={setEmail}
          value={email}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={setPassword}
          value={password}
        />
        <Text>Confirm Password:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={setReconfirmPassword}
          value={reconfirmPassword}
        />
        <Button title="Confirm"
          onPress={() =>
            navigation.navigate('MainScreen', {name: 'MainScreen'})
          }/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    backgroundColor: '#f9c2ff',
    marginVertical: 4,
    marginHorizontal: 8,
    width: '75%',
    height: '50%'
  },
  header: {
    fontSize:40,
    color:'blue'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput:{
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 8,
    fontSize:20
  },
});

export default Signup;
