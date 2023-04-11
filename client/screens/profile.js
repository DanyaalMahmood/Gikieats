import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';
import { useSelector } from 'react-redux';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default Profile = ({ navigation }) => {
    const user = useSelector((state) => state.user);


    console.log(user);
    return (

        <View style={styles.container} >
            <ScrollView style={{ flex: 1 }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('VC')}>
                        <Ionicons name="arrow-back" size={32} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Ionicons name="cart-outline" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Personal Details</Text>
                </View>

                <View style={styles.avatarcontainerwrapper}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            rounded
                            style={styles.avatar}
                            source={myicon}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{user.name}</Text>
                            <Text style={styles.emailText}>{user.email}</Text>
                            <Text style={styles.phoneText}>{user.phoneno}</Text>
                            <Text style={styles.locationText}>Hostel {user.hostel}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('History')}
                >
                    <Text style={styles.buttonText}>Orders</Text>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => alert('Not Implented Yet')}
                >
                    <Text style={styles.buttonText}>Pending reviews</Text>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => alert('Not Implented Yet')}
                >
                    <Text style={styles.buttonText}>Faq</Text>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    avatar: {
        width: 120, // set the desired width of the Avatar
        height: 120,
        borderRadius: 60,
    },
    avatarcontainerwrapper: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 14,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40
    },
    profiletext: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10,

    },
    title: {
        //backgroundColor: '#F2F2F2',
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    container: {
        top: 40,
        height: 740,
        backgroundColor: '#F2F2F2',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    detailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    detailsHeaderText: {
        marginHorizontal: 16,
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailsHeaderText2: {
        right: 20,
        fontSize: 15,
        // fontWeight: 'bold',
    },
    avatarContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginVertical: 20,

    },
    textContainer: {
        
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    emailText: {
        fontWeight: '300',
        fontSize: 12,
        marginBottom: 12,
    },
    phoneText: {
        fontWeight: '300',
        fontSize: 14,
        marginBottom: 4,
    },
    locationText: {
        fontWeight: '300',
        fontSize: 14,
        marginBottom: 8,
    },
    buttonContainer: {
        borderRadius: 40,
        backgroundColor: 'white',
        width: 350,
        height: 60,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginHorizontal: 16,
        marginBottom: 24,
        paddingVertical: 12,
        paddingHorizontal: 25,
        top: 30,
        textAlignVertical: 'center',
    },
    buttonText: {
        alignContent: 'space-between',
        color: 'black',
        alignItems: 'flex-start',
        fontSize: 17,
        fontWeight: '600'
    },
},)
