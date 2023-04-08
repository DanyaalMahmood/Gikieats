import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch ,Pressable} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';
import burger from '../assets/burger.png';
import salad from '../assets/salad.png';
import pasta from '../assets/pasta.png';

export default CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cart</Text>
                <View style={{ flex: 1 }} />
            </View>
            <Text style={styles.swipeText}>Swipe on an item to rotate</Text>
            <View style={styles.maincontainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            rounded
                            size={80}
                            source={burger}
                            containerStyle={styles.avatar}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.avatarText}>HamBurger</Text>
                            <View style={styles.yellowContainer}>
                                <Text style={styles.yellowText}>$500</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.switchContainer}>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>1</Text>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            rounded
                            size={80}
                            source={salad}
                            containerStyle={styles.avatar}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.avatarText}>Fresh Salad</Text>
                            <View style={styles.yellowContainer}>
                                <Text style={styles.yellowText}>$250</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.switchContainer}>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>1</Text>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            rounded
                            size={80}
                            source={pasta}
                            containerStyle={styles.avatar}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.avatarText}>Chicken Pasta</Text>
                            <View style={styles.yellowContainer}>
                                <Text style={styles.yellowText}>$899</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.switchContainer}>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>1</Text>
                        <TouchableOpacity style={styles.switchButton}>
                            <Text style={styles.switchText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Address')}>

                <Text style={styles.buttonText}>
                    Order Now
                </Text>
            </Pressable>
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
        top: 50,
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
        padding: 16,
        margin: 16,
        width: 350,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius:30,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 16,
    },
    textContainer: {
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    yellowContainer: {
        // backgroundColor: '#FDE500',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    yellowText: {
        fontSize: 12,
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
        borderRadius: 4,
        width: 24,
        height: 24,
        alignItems: 'center'
    }
})
