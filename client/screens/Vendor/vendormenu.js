import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch ,Pressable} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default Vendormenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cart</Text>
                <View style={{ flex: 1 }} />
            </View>
            <Text style={styles.swipeText}>Press the add button to</Text>
            <Text style={styles.swipeText}>add menu items</Text>
            
            <Pressable style={styles.button} onPress={() => navigation.navigate('Vform')}>

                <Text style={styles.buttonText}>
                    Add
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    swipeText: {
        top: 50,
        fontSize:20,
        fontWeight: '600',
        justifyContent: 'center',
        alignSelf: 'center',
    },
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
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
      },
    maincontainer: {
        top: 100,
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',
    },
    header: {
        top: 30,
        color: '#F5F5F8',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        backgroundColor: '#FFF',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    
})
