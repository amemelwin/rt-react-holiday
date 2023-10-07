import DefaultScreen from '../components/DefaultScreen';
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '@src/navigations';
import { Text } from "react-native";
import React from 'react';

const SettingScreen = ({navigation}:NativeStackScreenProps<RootTabParamList>) => {
    const toHome = ()=>{
        navigation.navigate("HOME");
    }
    return <DefaultScreen title="Setting Screen">
        <Text onPress={toHome} style={{marginTop: 30,color: "blue"}}>Go to HOME</Text>
    </DefaultScreen>
}

export default SettingScreen