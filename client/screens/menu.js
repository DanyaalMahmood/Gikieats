import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';


import Fastfood from './menuScreens/fastfood';
import Desifood from './menuScreens/desifood';
import Otheritems from './menuScreens/otheritems';

export default Menu = ({ navigation }) => {
    const [search, setSearch] = useState('Search');
    const [category, setCategory] = useState('Fast Food');
    const [items, setItems] = useState([]);
    const state = useSelector((state) => state.vendor);
    console.log(state);



    const fetchItems = async () => {
        try {
            const response = await axios.get(`${BASEURL}/Fastfood`);
            //console.log(response.data);
            // await dispatch(setVendor(response.data[0]));
            await setVenders(response.data);
        } catch (err) {
            console.log(err.response.data.error);
        }
    };


    
    let b1;
    let b2;
    let b3;

    let currentCategory = <></>;
    if(category === 'Fast food') {
        currentCategory = <Fastfood/>;
        b1 = {borderColor: '#EFB60E'};
    } else if(category === 'Desi food') {
        currentCategory = <Desifood/>;
        b2 = {borderColor: '#EFB60E'};
    } else {
        currentCategory = <Otheritems/>;
        b3 = {borderColor: '#EFB60E'};
    }




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => alert('menu pressed')}>
                    <Ionicons name="menu-outline" size={32} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('menu pressed')}>
                    <Ionicons name="cart-outline" size={32} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Delicious             food for you</Text>
            </View>
            <View style={styles.search}>
                <Ionicons name="search-outline" size={32} color="black"/>
                <TextInput style={styles.searchinput} value={search} onChangeText={(text) => setSearch(text)}/>
            </View>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity onPress={() => setCategory('Fast food')}>
                    <View style={{...styles.categoriesbox, ...b1}}>
                        <Text style={styles.categoriesText}>Fast Food</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('Desi food')}>
                    <View style={{...styles.categoriesbox, ...b2}}>
                        <Text style={styles.categoriesText}>Desi Food</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('Other food')}>
                    <View style={{...styles.categoriesbox, ...b3}}>
                        <Text style={styles.categoriesText}>Other Items</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            {currentCategory}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 40,
        flexGrow: 1,
        backgroundColor: '#F2F2F2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    title: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 25,
        height: '14%'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    search: {
        backgroundColor: '#D8D8D8',
        height: '6%',
        borderRadius: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14
    },
    searchinput: {
        backgroundColor: 'transparent',
        flex: 1,
        height: '70%',
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
    }
})
