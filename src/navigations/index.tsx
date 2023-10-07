import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import React from 'react';
import HomeTabNavigation from './HomeTab/HomeTabNavigation';
export type RootTabParamList = {
    HOME : undefined;
    SETTING : undefined;
}
const TabNavigation = () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen 
            name='HOME'
            component={HomeTabNavigation}
            // component={()=><HomeScreen/>}
        />
        <Tab.Screen
            name='SETTING'
            component={SettingScreen}
            // component={(some)=><SettingScreen />}
        />
       
            
       </Tab.Navigator>

    </NavigationContainer>
  )
}

export default TabNavigation;