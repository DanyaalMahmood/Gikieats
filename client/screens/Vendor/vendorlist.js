import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { BASEURL } from '@env';
import { useIsFocused } from '@react-navigation/native'

import Fastfood from './../menuScreens/fastfood';
import Desifood from './../menuScreens/desifood';
import Otheritems from './../menuScreens/otheritems';
import { SetItem } from '../../slices/item';

export default VendorList = ({ navigation, route }) => {
    const [search, setSearch] = useState('Search');
    const [items, setItems] = useState([]);
    const [fetcheditems, fetchedsetItems] = useState([]);
    //const state = useSelector((state) => state.vendor);

    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused) {
            fetchItems();
            console.log('use effect on initial mount');
        };
    }, [isFocused]);

    const dispatch = useDispatch();

    const fetchItems = async () => {
        try {
            const response = await axios.get(`${BASEURL}/items`);
            //console.log(response.data);
            // await dispatch(setVendor(response.data[0]));
            //await setVenders(response.data);
            await setItems(response.data);
            await fetchedsetItems(response.data);
            //console.log(response.data[0], 'hellooooo');
        } catch (err) {
            //console.log(err);
            console.log(err.response.data.error);
        }
    };

    const onSearch = (text) => {
        if(text === "") {
            setItems(fetchItems);
        }
        console.log(text, 'text');
        let newitems = fetcheditems.filter((item) => item.name.toLowerCase().search(text.toLowerCase()) !== -1);
        console.log('newitem', newitems)
        console.log('fitems', fetcheditems)
        setItems(newitems);
    }


    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => alert('menu pressed')}>
                        <Ionicons name="menu-outline" size={32} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('menu pressed')}>
                        <Ionicons name="cart-outline" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Your Food                          Items</Text>
                </View>
                <View style={styles.search}>
                    <Ionicons name="search-outline" size={32} color="black" />
                    <TextInput style={styles.searchinput} onChangeText={onSearch} />
                </View>

                {/* <Pressable style={styles.itemss} onPress={() => alert("helloooo")}>
                        <Text style={{fontSize:26}}>Pizza Sandwich</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Rs 700</Text>
                </Pressable> */}


                {items.map((item) => {
                    return (
                        <Pressable key={item.id} style={styles.itemss} onPress={() => {navigation.navigate('Vendoritemform'); dispatch(SetItem(item))}}>
                            <Text style={{ fontSize: 26 }}>{item.name}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rs.{item.price}</Text>
                        </Pressable>
                    )
                })}

                <Pressable style={styles.button} onPress={() => {navigation.navigate('Vendornewitemform')}}>
                    <Text style={styles.buttonText}>
                        Add New Item
                    </Text>
                </Pressable>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 40,
        height: 740
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        height: 80
    },
    title: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 25,
        height: 100,
        bottom: 20,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    itemss: {
        flexDirection: 'row',
        backgroundColor: '#D8D8D8',
        height: 100,
        marginHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 15
    },
    search: {
        backgroundColor: '#D8D8D8',
        height: 60,
        borderRadius: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        marginBottom: 30,
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
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: '4%',
        marginTop: 30,
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
    },
    button: {
        backgroundColor: '#EFB60E',
        borderRadius: 30,
        width: '90%',
        height: 75,
        marginVertical: 20,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
})
