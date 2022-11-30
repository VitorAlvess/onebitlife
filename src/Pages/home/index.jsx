import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LifeStatus from "../../common/LifeStatus";

export default function Home(){
    const navigation = useNavigation();

    function handleNavAppExplanation(){
        navigation.navigate('AppExplanation')
    }

    return(
        <View style={style.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={style.dailyChecks}> ❤ 20 dias - ✔️ 80 checks </Text>

                    <LifeStatus />

                    
                </View>
                <Text style={style.explanationText} onPress = {() => 
                    handleNavAppExplanation()
                }>
                Ver explicação novamente

                </Text>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21, 21, 21, 0.98)',
    },
    dailyChecks: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 25,
    }
})