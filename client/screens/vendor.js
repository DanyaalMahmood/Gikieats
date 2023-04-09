import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import burgericon from '../assets/burgericon.png';
import pizzaicon from '../assets/pizzaicon.png';
import spaghettiicon from '../assets/spaghettiicon.png';

const CircleAvatar = ({ name, text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Avatar
                style={styles.avatar}
                // size="large"
                rounded
                source={name}
                containerStyle={styles.avatarContainer}
            />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default Screen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <MaterialIcons
                    name='arrow-back'
                    size={24}
                    color='black'
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.maincontainer}>
                <Pressable onPress={() => navigation.navigate('Startup')}>
                    <View style={styles.itemContainer}>
                        <View style={styles.avatarContainer}>
                            <Avatar
                                rounded
                                size={80}
                                source={burgericon}
                                containerStyle={styles.avatar}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.avatarText}>Raju Restaurant</Text>
                                <View style={styles.yellowContainer}>
                                    <Text style={styles.yellowText}>TUC</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Startup')}>
                    <View style={styles.itemContainer}>
                        <View style={styles.avatarContainer}>
                            <Avatar
                                rounded
                                size={80}
                                source={pizzaicon}
                                containerStyle={styles.avatar}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.avatarText}>Ayan Garden</Text>
                                <View style={styles.yellowContainer}>
                                    <Text style={styles.yellowText}>TUC</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Startup')}>
                    <View style={styles.itemContainer}>
                        <View style={styles.avatarContainer}>
                            <Avatar
                                rounded
                                size={80}
                                source={spaghettiicon}
                                containerStyle={styles.avatar}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.avatarText}>HotNSpicy</Text>
                                <View style={styles.yellowContainer}>
                                    <Text style={styles.yellowText}>TUC</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'center',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // maincontainer: {
    //     top: 150,
    //     color: 'white',
    // },
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
        borderRadius: 30,
        marginVertical: 20,
    },
    appBar: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 56,
        paddingHorizontal: 16,
        // backgroundColor: '',
        // elevation: 2,
    },
    // container: {
    //     // backgroundColor: '#EFB60E',
    //     flex: 1,
    //     justifyContent: 'center',
    //     // alignItems: 'center',
    //     // alignContent: 'center',
    //     // alignSelf: 'center'

    // },
    // avatarContainer: {
    //     marginVertical:40,
    //     alignSelf: 'center',
    //     marginBottom: 10,
    // },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 20
    },
    // avatar: {
    //     marginVertical:20,
    //     width: 120, // set the desired width of the Avatar
    //     height: 120,
    //     borderRadius: 60,
    //     overflow: 'hidden',
    //     justifyContent: 'center',
    //     alignSelf:'center'
    // },
    avatar: {
        marginRight: 16,
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
        top: 200,
        color: 'white',
        // bottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#EFB60E',
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
});


