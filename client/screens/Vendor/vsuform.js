import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import BASEURL from './../../assets/baseurl';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../slices/user';
import { setVendor } from '../../slices/vendor';
import axios from 'axios';

export default function VSUform({ navigation }) {


    const [password, setPassword] = useState('hello123');
    const [confirmpassword, setconfirmPassword] = useState('hello123');
    const [phoneno, setPhoneno] = useState('03041442299');
    const [name, setName] = useState('Raju');

    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            if (password !== confirmpassword) {
                setError('Passwords do not match');
                return;
            }

            const response = await axios.post(`${BASEURL}/vendor`, { password, phoneno, name });
            console.log(response.data);
            await dispatch(setVendor(response.data));
            //alert(`You are logged in as ${response.data.name}`);
            navigation.navigate('VendorHome');

        } catch (err) {
            setError(err.response.data.error);
            console.log(err.response.data.error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.scrollable}>
                <ScrollView>
                    <View style={styles.email}>
                        <Text>Name</Text>
                        <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />
                    </View>
                    <View style={styles.password}>
                        <Text>Phone Number</Text>
                        <TextInput style={styles.input} value={phoneno} onChangeText={(text) => setPhoneno(text.replace(/[^0-9]/g, ''))}
                            keyboardType={'numeric'} />
                    </View>
                    <View style={styles.password}>
                        <Text>Password</Text>
                        <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                    </View>
                    <View style={styles.password}>
                        <Text>Confirm Password</Text>
                        <TextInput style={styles.input} value={confirmpassword} onChangeText={(text) => setconfirmPassword(text)} secureTextEntry={true} />
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