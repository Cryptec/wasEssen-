import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert, Modal } from 'react-native';
import SecuritySVG from './homesvg';
import { generate } from './random';

function Home(props) {
  const { navigation } = props
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>

<TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <SecuritySVG style={styles.svg}  >
        
     </SecuritySVG>



     <TouchableOpacity
       
       onPress={generate}
       style={styles.button}>
       <Text style={{ fontSize: 23, textAlign: 'center', color: 'white' }}>Mahlzeit Anzeigen</Text>
     </TouchableOpacity>
 
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A006F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 80,
    zIndex: 15,
    marginTop: 80,
  },
  svg: {
    marginTop:80,
    marginHorizontal: 0,
    zIndex:20,
 },
 modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#252525",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 15,
},
centeredView: {
  flex: 1,
  
  marginTop: 145
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#3A006F',
    borderRadius: 5,
    padding: 30,
    marginTop: -120,
    marginLeft: -260
  },
  buttonText: {
    fontSize: 40,
    color: '#fff'
  }
})

export default Home