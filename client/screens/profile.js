import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import myicon from '../assets/myicon.png';

export default Profile = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
        <View style={{flex: 1}} >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsHeader}>
                <View style={styles.profiletext}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>My Profile</Text>
                </View>
            </View>

            <View style={styles.detailsHeader}>
                <Text style={styles.detailsHeaderText}>Personal Details</Text>
                <TouchableOpacity>
                    <Text style={styles.detailsHeaderText2}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.avatarcontainerwrapper}>
                <View style={styles.avatarContainer}>
                    <Avatar
                        rounded
                        style={styles.avatar}
                        source={myicon}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Muzamil Khatri</Text>
                        <Text style={styles.emailText}>johndoe@gmail.com</Text>
                        <Text style={styles.phoneText}>+92 321 8457 269</Text>
                        <Text style={styles.locationText}>New York, NY</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('VC')}
            >
                <Text style={styles.buttonText}>Orders</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('VC')}
            >
                <Text style={styles.buttonText}>Pending reviews</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('VC')}
            >
                <Text style={styles.buttonText}>Faq</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Cart')}
            >
                <Text style={styles.buttonText}>Help</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 120, // set the desired width of the Avatar
        height: 120,
        borderRadius: 60,
        overflow: 'hidden'
    },
    avatarcontainerwrapper: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 14,
        width: 350,
        alignSelf: 'center',
    },
    profiletext: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    container: {
        top: 50,
        flexGrow: 1,
        backgroundColor: '#F5F5F8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
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
        // height: 200,
        left: 20,
        bottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 16,
        marginVertical: 20,

    },
    textContainer: {
        marginTop: 35,
        marginLeft: 16,
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
