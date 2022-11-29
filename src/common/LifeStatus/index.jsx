import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from 'lottie-react-native';

export default function LifeStatus(){
    return(
        <View style={styles.container}>
            <Lottie source={require("../../assets/education/education-50.json")} autoPlay loop style={styles.educacaoAnimacao}></Lottie>
            <Lottie source={require("../../assets/money/money-100.json")} autoPlay loop style={styles.moneyAnimacao}></Lottie>
            <Lottie source={require("../../assets/robot/robot-100-100.json")} autoPlay loop style={styles.roboAnimacao}></Lottie>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    roboAnimacao: {
        width: 190,
        marginTop:30,
        marginLeft: 25,
    },
    educacaoAnimacao: {
        width: 100,
        marginTop:50,
        marginLeft: 5,
        position: "absolute"
    }, 
    moneyAnimacao: {
        width: 100,
        marginTop:50,
        marginLeft: 95,
        position: "absolute"
    },
})