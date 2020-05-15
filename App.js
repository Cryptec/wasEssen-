import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import random from './random';
import SecuritySVG from './homesvg';
import * as Svg from 'react-native-svg';
import { generate } from './random';

export default function App() {
  return (
   
    <View style={styles.container}>
      <Text style={{ fontSize: 23, marginTop: 35, textAlign: 'center', color: 'white' }}>Yummy!</Text>

      <View style={styles.svg}>
      <SecuritySVG >
              
           </SecuritySVG>
      </View>

      <TouchableOpacity
       
          onPress={generate}
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
    marginHorizontal: 0,
    zIndex:20,
    
 },
});
