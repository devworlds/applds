import React from 'react';
import {  View, StyleSheet, Text  } from 'react-native';

function Main() {
  return (  
    <View style={styles.container}>
      <Text style={styles.testando}>TESTANDO</Text>
      <View style={styles.insidecontainer}>

      </View>  
    </View>

   )
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#002',
  justifyContent: "center",
  alignItems: "center"
  },

  insidecontainer: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    backgroundColor: '#fff',
  },

  testando: {
    zIndex: 1,
    position: 'absolute',
    fontSize: 20,
    color: '#002',
  }
})
  



export default Main;