import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import map from '../assets/map.png';
import burger from '../assets/burger.png';
import myicon from '../assets/myicon.png';

export default FourthScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
            <MaterialIcons
            name='arrow-back'
            size={24}
            color='black'
            // onPress={() => navigation.navigate('Address')}
            onPress={() => navigation.goBack()}
          />
            </View>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={map}
                    />
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.textrow}>
                        <View style={styles.row}>
                            <View style={styles.circleAvatar}>
                                <MaterialIcons name="access-time" size={24} color="white" />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text1}>Delivery time</Text>
                                <Text style={styles.text2}>3:00 pm(max 20 min)</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.circleAvatar}>
                                <MaterialIcons name="location-on" size={24} color="white" />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text1}>Delivery access</Text>
                                <Text style={styles.text2}>Hostel 9</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.phonecont}>
                        <View style={styles.row}>
                            <Image
                                style={styles.avatarImage}
                                source={myicon}
                            />
                            <Text style={styles.text3}>Ayan khatri</Text>
                            <View style={styles.circleAvatarphone}>
                                <MaterialIcons name="phone" size={24} color="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Startup')}>

                <Text style={styles.buttonText}>
                    Complete Order
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
    container: {
        flex: 1,
        backgroundColor: '#F5F4F6',
    },
    appBar: {
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        // backgroundColor: '',
        // elevation: 2,
        paddingHorizontal: 16,
      },
    // appBarImage: {
    //     height: 36,
    //     width: 36,
    //     resizeMode: 'contain',
    // },
    content: {
        // top: 10,
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textrow: {
        top: 10,
        // backgroundColor: 'red',
        width: 350,
        alignSelf: 'center',
        alignItems: 'stretch',
        alignContent: 'space-between'
    },
    phonecont: {
        top: 20,
        alignContent: 'center',
        width: 350,
        height: 100,
        borderRadius:20,
        backgroundColor: '#F2F1F1',
        // alignContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        bottom: 15,

    },
    image: {
        top: 20,
        height: 400,
        width: 450,
        resizeMode: 'cover',
    },
    subcontainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    circleAvatar: {
        // marginLeft: 50,
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#FFC83A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleAvatarphone: {
        marginRight:20,
        marginLeft: 30,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#FFC83A',
        alignItems: 'center',
        // alignSelf: '//#endregion',
        justifyContent: 'center',
    },
    subContainer: {
        backgroundColor: 'white',
        // top: ,
        flex: 1,
        paddingHorizontal: 16,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'
    },
    column: {
        marginLeft: 40,
    },
    text1: {
        fontSize: 15,
        fontWeight: '200'
    },
    text2: {
        fontsize :18,
        fontWeight: '500',
    },
    text3: {
        marginLeft: 4,
        marginRight: 26,
        fontSize: 18,
    },
    avatarImage: {
        // top: 100,
        marginLeft: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
        resizeMode: 'cover',
    },
});
