import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';

export default Menu = ({ navigation }) => {
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
                <Ionicons name="cart-outline" size={32} color="black"/>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 30,
        flexGrow: 1,
        backgroundColor: 'pink',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    title: {
        backgroundColor: 'pink',
        paddingHorizontal: 25,
        height: '14%'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    search: {
        backgroundColor: 'red',
        height: '6%',
        borderRadius: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14
    }

    
})
