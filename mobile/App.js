import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.startscreen}
        source = {require("./assets/EO-TFu2WsAE7Hnm.png")}  
      />
      
      <Animatable.View
            animation="fadeInLeft"
            useNativeDriver
            duration={2000}
            style={styles.initialbutton}
          >
          <TouchableOpacity >
            <Text>Entrar</Text>
          </TouchableOpacity>
      </Animatable.View>

        <Animatable.Text style={styles.register}
          animation="fadeInRight"
          useNativeDriver
          duration={2000}
        >
          Não tem uma conta? Clique aqui.
          </Animatable.Text>
    </View>

  );
}

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
  }

});
