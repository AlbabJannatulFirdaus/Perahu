import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React,{Component} from 'react'

import HomeScreen from './Slide/beranda'
import Pesanan from './Slide/pesanan-saya'
import Tiket from './Slide/konfirmasi-tiket'
import Buat from './Slide/RicianTiket'
import Stack from './Slide/stack'
import RincianTiket from './Slide/RicianTiket';
import Beranda from './Slide/beranda';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Beranda" component={Stack}/>
          <Tab.Screen name="Pesanan" component={Pesanan}/>
          <Tab.Screen name="Pembatalan" component={Tiket}/>
          <Tab.Screen name="Lainnya" component={Stack}/>
        </Tab.Navigator>

        

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#770',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;