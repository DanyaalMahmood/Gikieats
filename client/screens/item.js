import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SetCart } from '../slices/cart';


export default Screen3 = ({ navigation }) => {
    const item = useSelector((state) => state.item);
    const itemName =item.name;
    let cart = useSelector((state) => state.cart.cartItems);
    let dispatch = useDispatch();

    const addItem = async () => {
        let newcart = {};

        if(cart[itemName] === undefined) {
            newcart[itemName] = { qty: 1, id: item.id, price: item.price };
        } else {
            newcart[itemName] = { qty: 1 + (cart[itemName]).qty, id: item.id, price: item.price}
        }
        newcart = {...cart, ...newcart};

        await dispatch(SetCart({ cartItems: newcart }));
        navigation.navigate('UserHome');
        
    };

    

    return (
        <SafeAreaView style={styles.container}>
            

            <View style={styles.avatarContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>Rs {item.price}</Text>
            </View>

            <View style={styles.divider} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Delivery Info</Text>
                    <Text style={styles.contentDescription}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Description</Text>
                    <Text style={styles.contentDescription}>{item.description}</Text>
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={addItem}>

                <Text style={styles.buttonText}>
                    Add to cart
                </Text>
            </Pressable>

        </SafeAreaView>
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
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appBar: {
        top: 30,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingHorizontal: 16,
    },
    avatarContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        top: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EFB60E',

    },
    text: {
        textAlign: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    scrollContainer: {
        paddingHorizontal: 16,
        marginHorizontal: 40,
    },
    contentContainer: {
        marginVertical: 20,
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contentDescription: {
        fontSize: 16,
    },
});
