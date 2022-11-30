import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LifeStatus from "../../common/LifeStatus";
import CreateHabit from "../../home/CreateHabit";
import StatusBar from "../../home/StatusBar";


export default function Home(){
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState()
    const [moneyHabit, setMoneyHabit] = useState()
    const [bodyHabit, setbodyHabit] = useState()
    const [funHabit, setFunHabit] = useState()


    function handleNavAppExplanation(){
        navigation.navigate('AppExplanation')
    }

    return(
        <View style={style.container}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <Text style={style.dailyChecks}> ❤ 20 dias - ✔️ 80 checks </Text>

                    <LifeStatus />
                    <StatusBar />
                    <CreateHabit habitArea="Mente" borderColor="90b7f3" />

                    
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