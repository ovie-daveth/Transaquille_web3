import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './utils/Button'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native';
import { Image } from 'react-native';
import tailwind from 'twrnc';
import { ScrollView } from 'react-native';

const Welcome = ({username}) => {
    const [next, setNext] = useState(false)

    const nextProp = () => {
        setNext(true)
    }

    const skipProp = () => {
        setNext(false)
    }
  return (
   <ScrollView >
    <View style={tailwind`p-4 py-12 flex gap-2 items-center h-full flex flex-col`}>

    <View style={tailwind`flex flex-col gap-2`}>
          <Text style={tw`font-bold text-lg`}>We want to get to Know you, {username}</Text>
          <Text style={tailwind`text-gray-400 font-medium text-[16px]`}>You are special. Please complete the simple steps to have a personalized experience</Text>
        </View>
        <View style={tailwind`mt-3`}>
            <Image source={require("../assets/welcome.png")} style={tw`rounded-xl`} />
        </View>
        <View style={style.button}>
            <CustomButton title="Next" onPress={nextProp} />
            <CustomButton title="Skip" onPress={skipProp} />
        </View>
    </View>
   </ScrollView>
  )
}

const style = StyleSheet.create({
    button: {
        flexDirection: 'column',
        width: '100%',
        gap: 6,
        marginTop: 10,
    }
})

export default Welcome
