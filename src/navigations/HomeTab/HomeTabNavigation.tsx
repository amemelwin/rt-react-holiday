import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "..";
import DetailScreen from "../../screens/Home/DetailScreen";
import HomeScreen from "../../screens/Home/HomeScreen";

export type HomeTabParamList = {
    HOME: undefined;
    HOME_DETAIL: undefined;
}
const HomeTabNavigation = ({navigation}:NativeStackScreenProps<RootTabParamList>)=> {
    const Tab = createBottomTabNavigator<HomeTabParamList>();
    const toSetting = ()=>{
        navigation.navigate("SETTING");
    }

    return <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen
                name="HOME"
                // component={HomeScreen}
                component={(props:NativeStackScreenProps<HomeTabParamList>)=><HomeScreen {...props} toSetting={toSetting} />}
            />
            <Tab.Screen
                name="HOME_DETAIL"
                component={DetailScreen}
            />
        </Tab.Navigator>
    </NavigationContainer>
}

export default HomeTabNavigation;