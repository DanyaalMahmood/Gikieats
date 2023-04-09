import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { useState } from 'react';
import VSIform from './vsiform';
import VSUform from './vsuform';

export default function Vendorsignin({ navigation, route }) {
    const [form, setForm] = useState('VSI');

    let sistyle = {}
    let sustyle = {}

    if (form === "VSI") {
        sistyle = { borderColor: 'black' }
    } else if (form === "VSU") {
        sustyle = { borderColor: 'black' }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                    style={styles.image}
                    source={require('./../../assets/shwarma2.png')}
                />
                {/*<Pressable style={{...styles.SigninContainer, ...sistyle}} onPress={() => setForm('VSI')}>

                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
                <Pressable style={{...styles.SignupContainer, ...sustyle}} onPress={() => setForm('VSU')}>

                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </Pressable>*/}
            </View>

            {form === "VSI" ? <VSIform navigation={navigation} /> : <VSUform navigation={navigation} />}

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
        backgroundColor: '#FFEA40',
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
