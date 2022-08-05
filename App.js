import React, {useState, useEffect}from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function App(){


  const [name,setName] = useState('DS')
  const [input,setInput] = useState('')

  useEffect(()=>{
    async function mostarNome(){
      const nomeSalvo = await AsyncStorage.getItem('nome');
      if (nomeSalvo !== null) {
        setName(nomeSalvo)
      }
    }
    mostarNome();
  }, [])

useEffect(()=>{
  async function salvarNome(){
    await AsyncStorage.setItem('nome',name);
  }
  salvarNome();
},[name])  

function trocaNome(){

  setName(input)
  setInput("")
}

return (

  <View style ={ estilo.container}>

  <TextInput style= {estilo.input}  value={input}   onChangeText = {(texto)=> setInput(texto) }/>

 <TouchableOpacity style = {estilo.botao}   onPress = {()=>trocaNome()}>Trocar</TouchableOpacity>

  <Text style = {estilo.texto}>  {name} </Text>


  </View>



);


}


const estilo =  StyleSheet.create({

    container :{

      flex :1 ,
      alignItems:'center',
     


    },

    texto : {
          
      fontSize:25

    },

    botao:{

      width:'90%',
      backgroundColor:'orange',
      alignItems:'center',
      marginTop:10


    },
    input:{
      width:'90%',
      height:30,
      borderWidth:2,
      marginTop:10

    }



})