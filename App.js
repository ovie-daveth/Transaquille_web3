import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
import CustomButton from './components/utils/Button';
import Welcome from './components/Welcome';

export default function App() {
  const [isLogin, setisLogin] = useState(false)
  const [username, setUsername] = useState('');

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('user');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    retrieveData();
  }, [isLogin]);

  return (
    <>
    {
      !isLogin ? (
        <View style={tw`p-4 py-10 flex items-center h-full`}> 
          <Register setisLogin={setisLogin} />
        </View>
      ):(
        <>
        <Welcome username={username} />
       </>
      )
    }
     </>
  );
}

