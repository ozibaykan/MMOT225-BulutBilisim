/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
            <Text style={styles.header}>KAYDOL</Text>

            <TextInput style={styles.TextInput} placeholder="AD SOYAD"
                     underlineColorAndroid={'transparent'} />

            <TextInput style={styles.TextInput} placeholder="Email Adress"
                       underlineColorAndroid={'transparent'} />

             <TextInput style={styles.TextInput} placeholder="Parola "
               secureTextEntry={true} underlineColorAndroid={'transparent'} />

               <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>KAYIT</Text>
               </TouchableOpacity>


        </View>
    </>
  );
};

const styles = StyleSheet.create({
container:{
alignSelf:'stretch',
               flex:1,
               backgroundColor:'#87CEFA',
               alignItems:'center',
               justifyContent:'center',
               paddingLeft:60,
               paddingRight:60,},
 header:{
    fontSize: 24,
    color: '#f5deb3',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,

 },
 textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,

 },
 button:{
 alignSelf: 'stretch',
 alignItems:'center',
 padding: 20,
 backgroundColor:'red',
 marginTop: 30,
 },
 btnText: {
 color:  '#fff',
 fontWeight: 'bold',
 },
});

export default App;
