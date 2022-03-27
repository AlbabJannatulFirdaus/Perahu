import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
//import DatePicker from 'react-native-date-picker';

const Beranda =(props)=> {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);


    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.Text}>
            KapalZy
          </Text>

          <Text style={styles.Text2}>
            Pelabuhan Awal
          </Text>

          <View style={styles.input}>
            <Icon name={'boat'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Pelabuhan awal" >

            </TextInput>
          </View>

          <Text style={styles.Text2}>
            Pelabuhan Tujuan
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Pelabuhan Tujuan" >

            </TextInput>
          </View>

          <Text style={styles.Text2}>
            Kelas Pelayanan
          </Text>
          <View style={styles.input}>
            <Icon name={'man'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Kelas Pelayanan" >

            </TextInput>
          </View>

          <Text style={styles.Text2}>
            Tanggal masuk Pelabuhan
          </Text>
          <View style={styles.input}>
            <Icon name={'calendar'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Tanggal masuk Pelabuhan" />

          </View>

          <Text style={styles.Text2}>
            Jam masuk Pelabuhan 
          </Text>
          <View style={styles.input}>
            <Icon name={'alarm'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Jam masuk Pelabuhan" >

            </TextInput>
          </View>

          <Text style={styles.Text2}>
            .
          </Text>

          <View style={styles.usia}>
            <TextInput
              style={styles.TextInput}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Dewasa     -     1 Orang"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.tombol} onPress={() => props.navigation.push('Buat')} >
            <Icon name={'search'}  size={28} color={'white'} />
            <Text style={styles.BuatTiket}>
              Buat Tiket
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :300,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : {
    color: "#00579c",
    marginTop:"70",
    fontWeight :"bold",
    fontSize : 40,
    marginBottom : 50,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  Text2 :{
    alignSelf :'flex-start',
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    paddingLeft: 15,
    fontWeight : 'bold'
  },
  usia:{
    fontSize : 15,
    fontWeight :"bold",
    
  },
  TextUsia :{
    height : 30,
    width : 280,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    marginTop :20,
    alignItems : "center",
    fontWeight : 'bold'
  },
  tombol :{
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    marginLeft : 20,
    fontWeight : 'bold',
  }
})

export default Beranda;