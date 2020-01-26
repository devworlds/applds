import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Login({  navigation  }) {
  return (
    <View style={styles.container}>
      <Image style={styles.startscreen}
        source = {require("/Users/angel/Documents/applds/mobile/assets/EO-TFu2WsAE7Hnm.png")}  
      />
      
      <Animatable.View
            animation="fadeInLeft"
            useNativeDriver
            duration={2500}
            style={styles.initialbutton}
          >
          <TouchableOpacity onPress={() => {
              navigation.navigate('Main');
          }}>
            <Text>Entrar</Text>
          </TouchableOpacity>
      </Animatable.View>

      <Animatable.Text style={styles.register}
        animation="fadeInRight"
        useNativeDriver
        duration={2500}
      >
        Não tem uma conta? Clique aqui.
      </Animatable.Text>
        
      <View style={styles.boxlogin}
      >
        <Text style={styles.logintext}>Login</Text>
        <TextInput style={styles.input}/>
         <TextInput style={styles.input}/>
         <TouchableOpacity>
          <View style={styles.boxentrarbtn}>
            <Text style={styles.entrarbtn}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
        
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startscreen: {
    width: 370,
    height: 660,
    marginLeft: -10,
    marginTop: -20
  },

  initialbutton: {
    position: "absolute",
    width: '82%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 560,
    marginLeft: 28.5
  },

  register: {
    position: "absolute",
    width: '60%',
    height: 35,
    color: '#fff',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 605,
    marginLeft: 73
  },

  boxlogin: {
    position: "absolute",
    width: '85%',
    height: '45%',
    alignItems: "center",
    borderRadius: 5,
    marginTop: 640,
    marginLeft: 27.5,
    backgroundColor: '#fff'
  },

  logintext: {
    marginTop: 10,
    marginLeft: -7,
    fontSize: 20,
    color: "#0B0B3B"
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#777',
    padding: 4,
    //margin: 10,
    width: 220
  },

  boxentrarbtn: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#0B0B3B"

  },

  entrarbtn: {
    fontSize: 25,
    color: "#fff"
  }

});

export default Login;