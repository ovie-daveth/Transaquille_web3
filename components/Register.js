import React, { useState } from 'react'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { View,Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import tailwind from 'twrnc'
import CustomButton from './utils/Button'

const Register = ({setisLogin}) => {
    const [text, setText] = useState('')
    
    const onChangeText = (texts) => {
        setText(texts)
    }  

    const handlePress = async () => {
      if(text.length < 4){
        alert("Name too short, must be at least 4 characters")
      } else{
        await AsyncStorage.setItem('user', text);
        setisLogin(true)
      }

   
       
    }
  return (
    <View style={style.container}>
        <View style={tailwind`flex flex-col gap-2 py-3`}>
            <Text style={tailwind`font-bold text-xl`}>Welcome to Transquile Buddy</Text>
            <Text style={tailwind`font-medium text-[16px] text-gray-500 leading-[22px]`}>Choose a pseudonym to maintain anonymity on our platform</Text>
        </View>
        <View>
            <Text style={tailwind`text-gray-900 text-lg font-semibold`}>Choose a pseudonym</Text>
            <TextInput  placeholder="useless placeholder"
             style={style.input}
             onChangeText={onChangeText}
             value={text}/>
        </View>
        <View>
            <CustomButton title="Create An Account" onPress={handlePress} />
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      fontWeight: 'bold',
      fontVariant: 'italic', 
      fontSize: 20,
      flexDirection: 'column',
      gap: 18,
    },
    input:{
        borderWidth:1,
        borderColor:"grey",
        borderRadius: 5,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
    }
  })

export default Register
