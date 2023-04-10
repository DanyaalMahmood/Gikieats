import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import {BASEURL} from '@env';
import axios from 'axios';

export default function Vendoritemform({ navigation, route }) {
    const [form, setForm] = useState('VSI');
    const [item, setItem] = useState({});
    const setitem = useSelector((state) => state.item)
    console.log(setitem, 'item')



    useEffect(() => {
        setItem(setitem);
    }, []);
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASEURL}/items/${item.id}`, {...item, image:"noimage"});
            console.log(response.data);
            //await dispatch(login(response.data));
            //alert(`You are logged in as ${response.data.name}`);
            navigation.navigate('VendorHome');
        } catch (err) {
            console.log(err.response.data.error);
        }
    }
    
    

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                    style={styles.image}
                    source={require('./../../assets/shwarma2.png')}
                />
            </View>

            <View style={styles.nestedcontainer}>
                <ScrollView>

                    <View style={styles.email}>
                        <Text>Name</Text>
                        <TextInput style={styles.input} value={item.name} onChangeText={(text) => setItem({...item, name:text})}/>
                    </View>
                    <View style={styles.password}>
                        <Text>Description</Text>
                        <TextInput style={styles.input} value={item.description} onChangeText={(text) => setItem({...item, description:text})}/>
                    </View>
                    <View style={styles.password}>
                        <Text>Price</Text>
                        <TextInput style={styles.input} inputMode='numeric' value={(item.price)} onChangeText={(text) => setItem({...item, price:text})}/>
                    </View>
                    <View style={styles.password}>
                        <Text>Availability</Text>
                        <TextInput style={styles.input} value={item.availability} onChangeText={(text) => setItem({...item, availability:text})}/>
                    </View>
                    <View style={styles.password}>
                        <Text>Category</Text>
                        <TextInput style={styles.input} value={item.category} onChangeText={(text) => setItem({...item, category:text})}/>
                    </View>



                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            Confirm
                        </Text>
                    </Pressable>
                </ScrollView>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    nestedcontainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignContent: 'center',
        paddingTop: 20
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
        alignSelf: 'center',
        marginVertical: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        fontSize: 100,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
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

    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        top: 30,
        alignSelf: 'center'
    }

});
