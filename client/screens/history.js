import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASEURL } from '@env';


import Fastfood from './menuScreens/fastfood';
import Desifood from './menuScreens/desifood';
import Otheritems from './menuScreens/otheritems';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import fastfood from './menuScreens/fastfood';
import { fonts } from 'react-native-elements/dist/config';

export default History = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [history, setHistory] = useState([]);
    //const [fetcheditems, fetchedsetItems] = useState([]);

    const isFocused = useIsFocused();

    const vendor = useSelector((state) => state.vendor);
    //console.log(vendor);

    useEffect(() => {
        if (isFocused) {
            fetchHistory();
            console.log('use effect on initial mount in user home');
        };
    }, [isFocused]);

    useEffect(() => {
        console.log('history', history);
    }, [history]);


    const dispatch = useDispatch();

    const fetchHistory = async () => {
        try {
            const response = await axios.get(`${BASEURL}/order/history`);
            //console.log(response.data);
            // await dispatch(setVendor(response.data[0]));
            //await setVenders(response.data);
            await setHistory(response.data);
            //wait fetchedsetItems(response.data);
            //console.log(response.data, "history");

        } catch (err) {
            console.log(err);
            console.log(err.response.data.error);
        }
    };



    // const onSearch = (text) => {
    //     if (text === "") {
    //         setItems(fetchItems);
    //     }
    //     console.log(text, 'text');
    //     let newitems = fetcheditems.filter((item) => item.name.toLowerCase().search(text.toLowerCase()) !== -1);
    //     console.log('newitem', newitems)
    //     console.log('fitems', fetcheditems)
    //     setItems(newitems);
    // }



    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name='arrow-back'
                            size={24}
                            color='black'
                        // onPress={() => navigation.navigate('Address')}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('menu pressed')}>
                        <Ionicons name="cart-outline" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>History</Text>
                </View>
                <View style={styles.divider} />
                {history.map((item) => {
                    return (
                        <Pressable key={item.id} style={styles.itemss} onPress={() => { null }}>
                            <View>
                                <Text style={{fontSize: 10}}>{item.id}</Text>
                            </View>
                            {item.orderitems.map((order) => {
                                return (
                                    <View style={styles.itemouter}>

                                        <View style={styles.individualItem}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{order.itemId_fk.name}</Text>
                                            <Text style={{ fontSize: 20 }}>x {order.quantity}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: '#EFB60E', fontSize: 16 }}>Rs {order.itemId_fk.price * order.quantity}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </Pressable>
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    container: {
        top: 40,
        height: 740,
        backgroundColor: '#F2F2F2',

    },
    individualItem: {
        //backgroundColor: 'pink',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    itemouter: {
        backgroundColor: 'transparent',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // height: 150,
        // marginRight: 20,

    },
    itemss: {
        backgroundColor: '#FFF',
        width: 350,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderRadius: 30,
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        bottom: 10,
    },
    title: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 25,
        height: 70,
        // bottom: 20,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    search: {
        backgroundColor: '#D8D8D8',
        height: 60,
        borderRadius: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        marginBottom: 10,
        marginTop: 10
    },
    searchinput: {
        backgroundColor: 'transparent',
        flex: 1,
        height: '90%',
        fontSize: 20,
        padding: 10,
    },
    categoriesContainer: {
        //backgroundColor: 'transparent',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 50,
        marginBottom: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    categoriesbox: {
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderColor: 'transparent',
        borderBottomWidth: 2,
    },
    categoriesText: {
        fontSize: 14,
    }
})
