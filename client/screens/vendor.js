import React from 'react';
import { View, Text, StyleSheet, Pressable, RefreshControl } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import burgericon from '../assets/pasta.png';
import pizzaicon from '../assets/pizzaicon.png';
import spaghettiicon from '../assets/spaghettiicon.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setVendor } from '../slices/vendor';
import { useDispatch } from 'react-redux';
import BASEURL from '../assets/baseurl';
import { SetCart } from '../slices/cart';
import { ScrollView } from 'react-native-gesture-handler';




export default Screen2 = ({ navigation }) => {

    const [venders, setVenders] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchVendors();
    }, [])


    const fetchVendors = async () => {
        try {
            const response = await axios.get(`${BASEURL}/vendor`);
            //console.log(response.data);
            // await dispatch(setVendor(response.data[0]));
            await setVenders(response.data);
        } catch (err) {
            console.log(err.response.data.error);
        }
    }

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchVendors();
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
    };


    return (
        <View style={styles.maincontainer}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Select A Vendor</Text>
                </View>


                {venders.map((item) => {
                    return (
                        <Pressable style={styles.itemContainer} key={item.id} onPress={() => { navigation.navigate('UserHome'); dispatch(setVendor(item)); dispatch(SetCart({ cartItems: {} })) }}>

                            <View style={styles.avatarContainer}>
                                <Avatar
                                    rounded
                                    size={80}
                                    source={burgericon}
                                    containerStyle={styles.avatar}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.avatarText}>{item.name}</Text>
                                    <View style={styles.yellowContainer}>
                                        <Text style={styles.yellowText}>TUC</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 16,

        // marginLeft: 20,
        width: 350,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 20,
        marginVertical: 10,
    },
    appBar: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 56,
        paddingHorizontal: 16,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 20
    },

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
        top: 40,

        height: 740
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
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
        marginLeft: 15,
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 22,
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
        fontSize: 15,
        fontWeight: 'bold',
        color: '#EFB60E',
    },
    title: {
        margin: 25,

        backgroundColor: '#F2F2F2',

    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
});


