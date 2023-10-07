import React from 'react';
import { Text } from 'react-native';
import DefaultScreen from '../../components/DefaultScreen';
import { HomeTabParamList } from '@src/navigations/HomeTab/HomeTabNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const DetailScreen = ({navigation}:NativeStackScreenProps<HomeTabParamList>) => {
    return <DefaultScreen title="Detail Screen">
        <Text onPress={()=>navigation.navigate("HOME")} style={{marginTop: 30,color: "blue"}}>to Setting by parent</Text>
</DefaultScreen>
}

export default DetailScreen