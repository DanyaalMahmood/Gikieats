import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';
import burger from '../assets/burger.png';
import salad from '../assets/salad.png';
import pasta from '../assets/pasta.png';
import { useState, useEffect } from 'react';
import { SetCart } from '../slices/cart';

import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export default CartScreen = ({ navigation }) => {

    const [cart, setCart] = useState({});
    const temp = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCart(temp);
    }, []);



    console.log('Inside cart', Object.keys(cart));
    const keys = Object.keys(cart);

    const addItem = async (key) => {
        console.log(cart, 'key', key);
        let newcart = cart;


        newcart[key] = { ...newcart[key], qty: 1 + (cart[key]).qty };

        newcart = { ...cart, ...newcart };

        await dispatch(SetCart({ cartItems: newcart }));
        setCart(newcart);
    };

    const subItem = async (key) => {
        console.log(cart, 'key', key);
        let newcart = { ...cart };

        if (newcart[key].qty === 1) {
            delete newcart[key];
            await dispatch(SetCart({ cartItems: newcart }));
            console.log(newcart, 'hellooasdfas')
            setCart(newcart);
            return;
        }

        newcart[key] = { ...newcart[key], qty: (cart[key]).qty - 1 };

        newcart = { ...cart, ...newcart };

        await dispatch(SetCart({ cartItems: newcart }));
        setCart(newcart);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Your Cart</Text>
                </View>

                {keys.map((key) => {
                    return (
                        <View style={styles.itemContainer} key={key}>
                            <View style={styles.textContainer}>
                                <Text style={styles.avatarText}>{key}</Text>
                                <View style={styles.yellowContainer}>
                                    <Text style={styles.yellowText}>Rs {cart[key].price * cart[key].qty}</Text>
                                </View>
                            </View>
                            <View style={styles.switchContainer}>
                                <TouchableOpacity style={styles.switchButton} onPress={() => subItem(key)}>
                                    <Text style={styles.switchText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>x{cart[key].qty}</Text>
                                <TouchableOpacity style={styles.switchButton} onPress={() => addItem(key)}>
                                    <Text style={styles.switchText}>+</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    )
                })}


                <View style={styles.total}>
                    <Text style={styles.totaltext}>Total:   Rs {keys.reduce((accumulator, currentValue) => accumulator + (cart[currentValue].price * cart[currentValue].qty), 0)}</Text>
                </View>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Address')}>

                    <Text style={styles.buttonText}>
                        Order Now
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EFB60E',
        borderRadius: 30,
        width: 320,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    title: {
        backgroundColor: '#F2F2F2',
        marginTop: 100,
        marginHorizontal: 25,
        height: 60,
    },
    total: {
        marginHorizontal: 25,
        marginVertical: 10
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    totaltext: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },

    container: {
        height: 810,
        backgroundColor: '#F5F5F8',
    },
    header: {
        color: '#F5F5F8',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#DDD',
        // backgroundColor: '#FFF',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    swipeText: {
        fontSize: 16,
        color: '#777',
        marginLeft: 16,
        marginTop: 12,
        alignSelf: 'center'
    },
    itemContainer: {
        // top: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 350,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        height: 120,
        paddingLeft: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 30,
        marginVertical: 10,
    },

    textContainer: {
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    yellowContainer: {
        // backgroundColor: '#FDE500',
        borderRadius: 4,
        paddingVertical: 6,
    },
    yellowText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EFB60E',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    switchButton: {
        backgroundColor: '#EFB60E',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        width: 40,
        height: 40,
        alignItems: 'center'
    },
    quantityText: {
        fontWeight: 'bold',
        fontSize: 25
    }
})
