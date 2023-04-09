import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import {BASEURL} from '@env';
import axios from 'axios';



export default function SIform({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("run");
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASEURL}/user/signin`, {email, password});
            console.log(response.data);
            alert(`You are logged in as ${response.data.name}`);
        } catch (err) {
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