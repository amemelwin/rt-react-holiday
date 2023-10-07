import { HomeTabParamList } from "@src/navigations/HomeTab/HomeTabNavigation";
import DefaultScreen from "../../components/DefaultScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";

type HomeScreenProps = NativeStackScreenProps<HomeTabParamList> & {
    toSetting: ()=>void
}

const HomeScreen = ({navigation,toSetting}:HomeScreenProps)=>{
    return <DefaultScreen title="Home Screen">
      <Text onPress={toSetting} style={{marginTop: 30,color: "blue"}}>to Setting by parent</Text>
    </DefaultScreen>
}

export default HomeScreen;