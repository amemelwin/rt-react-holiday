import { memo,ReactNode } from "react";
import { StyleSheet,View,Text } from "react-native"
import { StatusBar } from 'expo-status-bar';

type DefultScreenProps = {
    title: string,
    children?: ReactNode
}

const DefultScreen = ({title,children}:DefultScreenProps)=>{
    return <View style={styles.container}>
        <Text>{title}</Text>
        {children}
        <StatusBar style="auto" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default memo(DefultScreen);