import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import burgericon from '../assets/burgericon.png';
import pizzaicon from '../assets/pizzaicon.png';
import spaghettiicon from '../assets/spaghettiicon.png';

const CircleAvatar = ({ name, text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Avatar
                size="large"
                rounded
                source={name}
                containerStyle={styles.avatarContainer}
            />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default Screen3 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <MaterialIcons
                    name='arrow-back'
                    size={24}
                    color='black'
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.avatarContainer}>
                <Avatar
                    size={150}
                    rounded
                    source={spaghettiicon}
                />
                <Text style={styles.title}>Chicken Spaghetti</Text>
                <Text style={styles.subtitle}>Rs 880</Text>
            </View>

            <View style={styles.divider} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Delivery Info</Text>
                    <Text style={styles.contentDescription}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Return Policy</Text>
                    <Text style={styles.contentDescription}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Cart')}>

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
