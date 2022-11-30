import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View, handleNavHome } from "react-native";
import DefaulButton from "../../common/DefaultButton";
import ExplanationCard from "../../common/explanation/ExplanationCard";
export default function AppExplanation(){
    const navigation = useNavigation()

    function handleNavHome(){
        navigation.navigate('Home')
    }


    return( 
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style ={styles.tittle}>
                        Antes, deixa {"\n"} eu te explicar
                    </Text>
                    <ExplanationCard />
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nivel na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual
                    </Text>
                    <DefaulButton buttonText={'Continuar'} handlePress={handleNavHome} width={250} height={50}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(21,21,21,0.98)',
    },
    tittle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 40,
    },
    descriptionCta:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    }
})