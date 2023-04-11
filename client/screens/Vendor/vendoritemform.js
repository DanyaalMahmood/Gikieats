import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import BASEURL from './../../assets/baseurl';
import axios from 'axios';

export default function Vendoritemform({ navigation, route }) {
    const [form, setForm] = useState('VSI');
    const [item, setItem] = useState({});
    const setitem = useSelector((state) => state.item);
    console.log(setitem, 'item')
    const [category, setCategory] = useState(item.category);
    const [availability, setAvailability] = useState(item.availability);



    useEffect(() => {
        setItem(setitem);
    }, []);

    useEffect(() => {
        setCategory(item.category);
        setAvailability(item.availability);
    }, [item]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASEURL}/items/${item.id}`, { ...item, image: "noimage", category, availability });
            console.log(response.data);
            //await dispatch(login(response.data));
            //alert(`You are logged in as ${response.data.name}`);
            navigation.navigate('VendorHome');
        } catch (err) {
            console.log(err.response.data.error);
        }
    }

    const changeStatus = async (status) => {
        console.log('status change', status);
        setCategory(status);
    };

    const changeAvailability = async (status) => {
        console.log('status change', status);
        setAvailability(status);
    };



    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                    style={styles.image}
                    source={require('./../../assets/noodles.jpg')}
                />
            </View>

            <View style={styles.nestedcontainer}>
                <ScrollView>

                    <View style={styles.email}>
                        <Text>Name</Text>
                        <TextInput style={styles.input} value={item.name} onChangeText={(text) => setItem({ ...item, name: text })} />
                    </View>
                    <View style={styles.password}>
                        <Text>Description</Text>
                        <TextInput style={styles.input} value={item.description} onChangeText={(text) => setItem({ ...item, description: text })} />
                    </View>
                    <View style={styles.password}>
                        <Text>Price</Text>
                        <TextInput style={styles.input} inputMode='numeric' value={(item.price)} onChangeText={(text) => setItem({ ...item, price: text })} />
                    </View>
                    <View style={styles.password}>
                        <Text>Availability</Text>
                        {/* <TextInput style={styles.input} value={item.availability} onChangeText={(text) => setItem({ ...item, availability: text })} /> */}
                        <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <Pressable style={{ ...styles.status, backgroundColor: availability === "true" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeAvailability('true')}>
                                <Text style={styles.statustext}>Available</Text>
                            </Pressable>
                            <Pressable style={{ ...styles.status, backgroundColor: availability === "false" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeAvailability('false')}>
                                <Text style={styles.statustext} >Not Available</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.password}>
                        <Text>Category</Text>
                        {/* <TextInput style={styles.input} value={item.category} onChangeText={(text) => setItem({...item, category:text})}/> */}
                        <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <Pressable style={{ ...styles.status, backgroundColor: category === "fastfood" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('fastfood')}>
                                <Text style={styles.statustext}>Fast Food</Text>
                            </Pressable>
                            <Pressable style={{ ...styles.status, backgroundColor: category === "desi" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('desi')}>
                                <Text style={styles.statustext} >Desi</Text>
                            </Pressable>
                            <Pressable style={{ ...styles.status, backgroundColor: category === "other" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('other')}>
                                <Text style={styles.statustext} >Other</Text>
                            </Pressable>
                        </View>

                    </View>



                    <Pressable style={{ ...styles.button, marginBottom: 100 }} onPress={handleSubmit}>
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
    status: {
        backgroundColor: '#D8D8D8',
        paddingVertical: 10,
        width: '100%',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 20
    },
    statustext: {
        fontSize: 20,
        fontWeight: '500'
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
        backgroundColor: '#FFCC82',
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
