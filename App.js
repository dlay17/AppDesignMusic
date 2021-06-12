import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        <Stack.Screen name="Squat" component={Squats} />
        <Stack.Screen name="Deadlift" component={Deadlift} />
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text='Get Swole. The App.'/>
      <Text>This is a fitness app that looks at your form in real time and guides you on the perfect squat!</Text>
      <Button title="Learn to Squat"
        onPress={() =>
          navigation.navigate('Squat', { name: 'Learn to Squat' })
        }/>
      <Button title="Learn to Deadlift"
        onPress={() =>
          navigation.navigate('Deadlift', {name: 'Learn to Deadlift'})
        }/>
      <Button title="About"
        onPress={() =>
          navigation.navigate('About', {name: 'About'})
        }/>
    </View>
  );
};
const Squats = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
          style= {styles.logo}
          source={{
            uri: 'https://myfamilychiropractor.com.au/wp-content/uploads/2015/04/squats.png',
          }}
      />
      <Text>Here is good form</Text>
    </View>
  )
};
const Deadlift = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
          style= {styles.logo}
          source={{
            uri: 'https://i1.wp.com/physicalculturestudy.com/wp-content/uploads/2016/01/romaniandeadlift1.jpg?resize=563%2C331&ssl=1',
          }}
      />
      <Text>Here is good form</Text>
    </View>
  )
};
const About = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState(" Leave Feedback...");

  return (
    <View style={styles.container}>
      <Text>Created by Daniel Lay</Text>
      <Text>Email: dlay@brandeis.edu</Text>
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
