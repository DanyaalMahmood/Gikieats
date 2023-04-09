import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { useState } from 'react';
import SIform from './siform';
import SUform from './sufomr';

export default function Signin({ navigation, route }) {
    const [form, setForm] = useState('SI');

    let sistyle = {}
    let sustyle = {}

    if(form === "SI") {
        sistyle = {borderColor: 'black'}    
    } else if(form === "SU") {
        sustyle = {borderColor: 'black'}
    }

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                    style={styles.image}
                    source={require('./../img/burgerlogo.jpg')}
                />
                <Pressable style={{...styles.SigninContainer, ...sistyle}} onPress={() => setForm('SI')}>

                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
                <Pressable style={{...styles.SignupContainer, ...sustyle}} onPress={() => setForm('SU')}>

                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>

            {form==="SI" ? <SIform navigation={navigation}/>:<SUform navigation={navigation}/>}
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 100,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 50,
    },
    logocontainer: {
        backgroundColor: '#FFEC5F',
        height: '40%',
        width: '100%',
        top: 0,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOpacity: 20,
        shadowColor: 'black',
    },
    button: {
        backgroundColor: '#000000',
        width: 100,
        height: 50,
        position: 'absolute',
        top: '80%',
        left: '10%',

    },
    SigninContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        left: '15%',
        justifyContent: 'center',
        borderColor: '#FFEC5F',
        borderBottomWidth: 4
    },
    SignupContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        right: '15%',
        justifyContent: 'center',
        borderColor: '#FFEC5F',
        borderBottomWidth: 4
    },
    buttonText: {
        textAlign: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        top: 30,
        alignSelf: 'center'
    }

});
