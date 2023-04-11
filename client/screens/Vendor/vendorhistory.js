import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASEURL } from '@env';



import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';


export default VendorHistory = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [history, setHistory] = useState([]);

    //const [fetcheditems, fetchedsetItems] = useState([]);
    console.log('page refreshed');

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            fetchHistory();

        };
    }, [isFocused]);

    useEffect(() => {
    }, [history]);


    const changeStatus = async (status, orderId) => {
        console.log('status change', status, orderId);
        try {
            const response = await axios.post(`${BASEURL}/order/update/${orderId}`, {status});
            //console.log(response.data);
            // await dispatch(setVendor(response.data[0]));
            //await setVenders(response.data);
            // await setItems(response.data);
            // await fetchedsetItems(response.data);
            console.log('order complete', response.data);
            fetchHistory();


        } catch (err) {
            console.log(err);
            console.log(err.response.data.error);
        }
    };




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
                {/* <View style={styles.divider} /> */}
                <View style={{ marginBottom: 20 }}>
                    {history.map((item) => {
                        return (
                            <Pressable key={item.id} style={styles.itemss} onPress={() => { null }}>
                                <View>
                                    <Text style={{ fontSize: 8, alignSelf: 'center', marginBottom: 10 }}>OrderID: {item.id}</Text>
                                </View>
                                {item.orderitems.map((order) => {
                                    return (
                                        <View key={order.id} style={styles.itemouter}>

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
                                <View style={{ marginTop: 10, justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: '300' }}>Ordered by: {item.userid_fk.name}</Text>
                                    <Text style={{ fontWeight: '300' }}>Hostel No: {item.userid_fk.hostel}</Text>
                                    <Text style={{ fontWeight: '300' }}>Phone No: {item.userid_fk.phoneno}</Text>
                                    <Text style={{ fontWeight: '300' }}>Order Time: {item.ordertime.split('T')[0]} {item.ordertime.split('T')[1].split('.')[0]}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ fontWeight: '900' }}>Status: {item.status}</Text>
                                    <Text style={{ fontWeight: '900' }}>Total: {item.orderitems.reduce((accumulator, currentValue) => accumulator + (currentValue.itemId_fk.price * currentValue.quantity), 0)}</Text>
                                </View>


                                <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                                    <Pressable style={{ ...styles.status, backgroundColor: item.status === "In Queue" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('In Queue', item.id)}>
                                        <Text style={styles.statustext}>In Queue</Text>
                                    </Pressable>
                                    <Pressable style={{ ...styles.status, backgroundColor: item.status === "Delivering" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('Delivering', item.id)}>
                                        <Text style={styles.statustext} >Delivering</Text>
                                    </Pressable>
                                    <Pressable style={{ ...styles.status, backgroundColor: item.status === "Rider is Outside" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('Rider is Outside', item.id)}>
                                        <Text style={styles.statustext} >Rider is Outside</Text>
                                    </Pressable>
                                    <Pressable style={{ ...styles.status, backgroundColor: item.status === "Delivered" ? '#EFB60E' : '#D8D8D8' }} onPress={() => changeStatus('Delivered', item.id)}>
                                        <Text style={styles.statustext} >Delivered</Text>
                                    </Pressable>
                                </View>

                            </Pressable>
                        )
                    })}
                </View>
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
    container: {
        top: 40,
        height: 740,
        paddingTop: 20,
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
        paddingHorizontal: 30
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
