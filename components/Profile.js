import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';
import DanielProfile from '../assets/Daniel.jpg'

const Profile = (props) => {
  let photo
  switch(props.name) {
    case 'Daniel Lay':
      photo = DanielProfile
      break
    case 'backsquat':
      photo = backsquat
      break
    default:
      photo = "null"
  }
  return(
    <View style={styles.container}>
      <Text style={styles.header}>{props.name}</Text>
      <Image
            style= {styles.logo}
            source=  {photo}
            alt= 'daniel'
        />
      <Text>{props.bio}</Text>
      <Text>Contact: {props.email}</Text>
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
  logo:{
    width: 305,
    height: 300,
    marginVertical: 10
  },
  header: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10
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

export default Profile;
