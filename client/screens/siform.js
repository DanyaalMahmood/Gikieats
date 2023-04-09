import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../slices/user';
import {BASEURL} from '@env';
import axios from 'axios';



export default function SIform({navigation}) {
    const [email, setEmail] = useState('maaz@gmail.com');
    const [password, setPassword] = useState('hello123');
    const [error, setError] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASEURL}/user/signin`, {email, password});
            await dispatch(login(response.data));
            alert(`You are logged in as ${response.data.name}`);
            navigation.navigate('Vendor');
        } catch (err) {
            setError(err.response.data.error);
            console.log(err.response.data.error);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.email}>
                <Text>Email Address</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>
            </View>
            <View style={styles.password}>
                <Text>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)}/>
            </View>
            <View style={styles.error}>
                <Text style={styles.errortext}>{error}</Text>
            </View>
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Sign In
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignContent: 'center',
        paddingTop: 70
    },
    input: {
        backgroundColor: '#F2F2F2',
        borderBottomWidth: 1,
        height: 40
    },
    error: {
        backgroundColor: '#F2F2F2',
        height: 50,
        bottom: 0,
        justifyContent: 'center'
    },
    errortext: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '700'
    },
    email: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    password: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#EFB60E',
        borderRadius: 30,
        width: 320,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },

});