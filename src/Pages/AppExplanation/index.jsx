import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View, handleNavHome } from "react-native";
import DefaulButton from "../../common/DefaultButton";
import ExplanationCard from "../../common/explanation/ExplanationCard";
import ChangeNavigationService from "../../services/ChangeNavigationService";
export default function AppExplanation(){
    const navigation = useNavigation()
    const [showHome, setShowHome] = useState("false");
    const startDate = new Date();
    const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;

    function handleNavHome(){
        navigation.navigate('Home')
    }

    function handleSetShowHome() {
        if (showHome !== "true") {
          ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
            .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
            .catch((err) => console.log(err));
          setShowHome("true");
    
          handleNavHome();
        }
    
        handleNavHome();
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
                    <DefaulButton buttonText={'Continuar'} handlePress={handleSetShowHome} width={250} height={50}/>
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