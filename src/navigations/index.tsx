import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@src/screens/Home/HomeScreen';
import SettingScreen from '@src/screens/SettingScreen';
import React from 'react';
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
            name='SETTING'
            component={SettingScreen}
        />
        <Tab.Screen 
            name='HOME'
            component={HomeScreen}
            // component={()=><HomeScreen/>}
        />
            
       </Tab.Navigator>

    </NavigationContainer>
  )
}

export default TabNavigation;