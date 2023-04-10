
import { StyleSheet, Text, View, Button, Pressable, 
    Image, TextInput, ScrollView,Switch,TouchableOpacity } from 'react-native';

import { useState } from 'react';
import VSIform from './vsiform';
import VSUform from './vsuform';

export default function Vendorsignin({ navigation, route }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(false);
    const [category, setCategory] = useState('');

    const handleConfirm = () => {
        // Code to add the new item to the menu
        console.log('New item added to the menu');
        // Navigate back to the menu screen
        navigation.goBack();
    };

    const [form, setForm] = useState('VSI');

    let sistyle = {}
    let sustyle = {}

    if (form === "VSI") {
        sistyle = { borderColor: 'black' }
    } else if (form === "VSU") {
        sustyle = { borderColor: 'black' }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                    style={styles.image}

                    source={require('./../../assets/noodles.jpg')}
                />
            </View>

            <View style={styles.nestedcontainer}>
                <View style={styles.scrollable}>
                    <ScrollView>
                        <View style={styles.email}>
                            <Text>Name</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.password}>
                            <Text>Description</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.password}>
                            <Text>Image</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.password}>
                            <Text>Price</Text>
                            <TextInput style={styles.input} keyboardType='numeric'/>
                        </View>
                        <Text style={styles.label}>Availability:</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>
                            {available ? 'Available' : 'Not Available'}
                        </Text>
                        <Switch
                            value={available}
                            onValueChange={setAvailable}
                            trackColor={{ false: '#767577', true: 'white' }}
                            thumbColor={available ? '#FFCC82' : '#f4f3f4'}
                        />
                    </View>
                    <Text style={styles.label}>Category:</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.categoryButton}
                            onPress={() => setCategory('fastfood')}
                        >
                            <Text style={styles.categoryButtonText}>Fast Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryButton}
                            onPress={() => setCategory('desi')}
                        >
                            <Text style={styles.categoryButtonText}>Desi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryButton}
                            onPress={() => setCategory('others')}
                        >
                            <Text style={styles.categoryButtonText}>Others</Text>
                        </TouchableOpacity>
                    </View>

                    </ScrollView>
                </View>

                <Pressable style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>
                        Confirm
                    </Text>
                </Pressable>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 100,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 50,
    },
    logocontainer: {

        backgroundColor: '#FFCC82',

        height: '40%',
        width: '100%',
        top: 0,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOpacity: 20,
        shadowColor: 'black',
    },

    SigninContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        left: '15%',
        justifyContent: 'center',
        borderColor: '#FFEC5F',
        borderBottomWidth: 4
    },
    SignupContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        right: '15%',
        justifyContent: 'center',
        borderColor: '#FFEC5F',
        borderBottomWidth: 4
    },
    buttonText: {
        textAlign: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        top: 30,
        alignSelf: 'center'

    },
    nestedcontainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignContent: 'center',
        paddingTop: 50
    },
    error: {
        backgroundColor: '#F2F2F2',
        height: 50,
        bottom: 20,
        justifyContent: 'center'
    },
    errortext: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '700'
    },
    scrollable: {
        height: '75%',
    },
    input: {
        backgroundColor: '#F2F2F2',
        borderBottomWidth: 1,
        height: 40
    },
    email: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    password: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#EFB60E',
        borderRadius: 30,
        width: 320,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginHorizontal: 30,
        marginVertical: 10
        // backgroundColor: 'pink',
    },
    switchContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchText: {
        flex: 1,
        marginRight: 20,
    },
    buttonContainer: {
        height: 100,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-evenly'
    },

    categoryButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        marginBottom: 20,
        // backgroundColor: '#fff'
        backgroundColor: '#FFCC82',
    },



});
