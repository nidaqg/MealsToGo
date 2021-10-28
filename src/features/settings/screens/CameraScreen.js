import React, {useRef, useState, useEffect, useContext} from 'react';
import { Camera } from 'expo-camera';
import { AuthContext } from '../../../services/authentication/AuthenticationContext';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
//async stores locally on the phone, no server needed
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProfileCamera = styled(Camera)`
width: 100%;
height: 100%;
`
export const CameraScreen = () => {
    //have to get permissions from user to access camera
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef()
    const {user} = useContext(AuthContext)

    //function to take picture
    const snap = async () => {
        if (cameraRef) {
          const photo = await cameraRef.current.takePictureAsync();
          console.log(photo);
          AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        }
      }
    //check for camera permissions
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <TouchableOpacity onPress={snap}>
        <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        />
       </TouchableOpacity>
    )
}