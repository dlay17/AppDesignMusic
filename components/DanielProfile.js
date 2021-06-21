import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';
import Profile from './Profile'

const DanielProfile = () => {
  const biography = 'My name is Daniel Lay, I am a graduating senior from Brandeis University majoring in Computer Science. I like to play ultimate frisbee in my free time.';
  return(
    <Profile name='Daniel Lay' image_path='../assets/Daniel.jpg' bio={biography} email='dlay@brandeis.edu'/>
  )
}
export default DanielProfile;
