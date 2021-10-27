import React, {useRef, useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

const ProfileCamera = styled(Camera)`
width: 100%;
height: 100%;
`
export const CameraScreen = () => {
    //have to get permissions from user to access camera
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef()

    //function to take picture
    const snap = async () => {
        if (cameraRef) {
          const photo = await cameraRef.current.takePictureAsync();
          console.log(photo);
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
        <TouchableOpacity>
        <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        />
       </TouchableOpacity>
    )
}