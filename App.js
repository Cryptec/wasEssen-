import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import random from './random';
import SecuritySVG from '../svgs/homesvg'
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
      <SecuritySVG 
              style={styles.svg}>
           </SecuritySVG>
      </View>
      <TouchableOpacity
       
          onPress={() => {Alert.alert(random)}}
          style={styles.button}>
          <Text style={{ fontSize: 23, textAlign: 'center', color: 'white' }}>Mahlzeit Anzeigen</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5858FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 80,
    zIndex: 15,
    marginTop: 300,
  },
  svg: {
    marginTop:0,
    marginLeft: 55,
 }
});
