import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function DefaulButton({
    buttonText,
    handlePress,
    width,
    height
    //Assim que pede coisas, bacana
}) {
    return (
        <TouchableOpacity
            style={[styles.button, {width: width, height: height}]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,

    },
    buttonText:{
        color: '#ffffff',
        fontWeight: 'bold',
        
    }
})