import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import {BASEURL} from '@env';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../slices/user';
import axios from 'axios';

export default function SUform({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regno, setRegno] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [hostel, setHostel] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASEURL}/user`, {email, password, regno, phoneno, hostel, name});
            console.log(response.data);
            await dispatch(login(response.data));
            alert(`You are logged in as ${response.data.name}`);
            navigation.navigate('UserHome');
        } catch (err) {
            setError(err.response.data.error);
            console.log(err.response.data.error);
        }
    }

    return (
        <View style={styles.container}>
            <View  style={styles.scrollable}>
            <ScrollView>
                <View style={styles.email}>
                    <Text>Name</Text>
                    <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)}/>
                </View>
                <View style={styles.password}>
                    <Text>Email Address</Text>
                    <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.password}>
                    <Text>Registration Number</Text>
                    <TextInput style={styles.input} value={regno} onChangeText={(text) => setRegno(text)}/>
                </View>
                <View style={styles.password}>
                    <Text>Phone Number</Text>
                    <TextInput style={styles.input} value={phoneno} onChangeText={(text) => setPhoneno(text)}/>
                </View>
                <View style={styles.password}>
                    <Text>Hostel Number</Text>
                    <TextInput style={styles.input} value={hostel} onChangeText={(text) => setHostel(text)}/>
                </View>
                <View style={{...styles.password, marginBottom: 100}}>
                    <Text>Password</Text>
                    <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)}/>
                </View>
                
            </ScrollView>
            </View>
            <View style={styles.error}>
                <Text style={styles.errortext}>{error}</Text>
            </View>
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Sign Up
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
        paddingTop: 50
    },
    error: {
        backgroundColor: '#F2F2F2',
        height: 50,
        bottom: 20,
        justifyContent: 'center'
    },
    errortext: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '700'
    },
    scrollable: {
        height: '75%',
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