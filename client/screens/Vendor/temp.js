import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default Vendorform = ({ navigation }) => {
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cart</Text>
                <View style={{ flex: 1 }} />
            </View>
            <Text style={styles.swipeText}>Enter item details</Text>

            <ScrollView contentContainerStyle={styles.maincontainer}>
                <View style={styles.form}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter name"
                    />

                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Enter description"
                    />

                    <Text style={styles.label}>Image:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setImage}
                        value={image}
                        placeholder="Enter image URL"
                    />

                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPrice}
                        value={price}
                        placeholder="Enter price"
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Availability:</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>
                            {available ? 'Available' : 'Not Available'}
                        </Text>
                        <Switch
                            value={available}
                            onValueChange={setAvailable}
                            trackColor={{ false: '#767577', true: 'white' }}
                            thumbColor={available ? '#EFB60E' : '#f4f3f4'}
                        />
                    </View>
                    { /*<Picker
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                    >
                        <Picker.Item label="Fast Food" value="fastfood" />
                        <Picker.Item label="Desi" value="desi" />
                        <Picker.Item label="Others" value="others" />
                    </Picker>
                   */}
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

                    <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                        <Text style={styles.confirmButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',
        // backgroundColor: '#EFB60E',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
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
        fontWeight: '500',
    },
    formContainer: {
        flex: 1,
        padding: 16,
    },
    formInput: {
        height: 40,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    formLabel: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    formSelect: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 16,
        marginBottom: 16,
        justifyContent: 'center',
    },
    formSelectOption: {
        fontSize: 16,
    },
    formSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    formSwitchLabel: {
        marginLeft: 16,
    },
    formConfirmButton: {
        backgroundColor: '#EFB60E',
        borderRadius: 30,
        width: 320,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 16,
    },
    formConfirmButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    itemContainer: {
        backgroundColor: '#FFF',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 5,
    },
    itemImage: {
        width: 64,
        height: 64,
        borderRadius: 5,
        marginRight: 16,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 14,
        marginBottom: 4,
    },
    itemPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    itemAvailability: {
        fontSize: 14,
        marginBottom: 4,
    },
    itemCategory: {
        fontSize: 14,
    },
    scrollContainer: {
        flex: 1,
        paddingTop: 100,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
        // backgroundColor: '#fff',
        backgroundColor: '#F5F5F8',
        // backgroundColor: '#EFB60E',
        // borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    swipeText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        color: 'black',
    },
    maincontainer: {
        padding: 20,
    },
    form: {
        marginBottom: 20,
        // backgroundColor: 'white',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        // backgroundColor: 'pink',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        // backgroundColor: 'white',
        backgroundColor: '#EFB60E',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchText: {
        flex: 1,
        marginRight: 20,
    },
    confirmButton: {
        backgroundColor: '#EFB60E',
        // backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 50,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    buttonContainer: {
        height: 100,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: 'yellow',
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
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
        backgroundColor: '#EFB60E',
    },
    categoryText: {
        fontSize: 16,
        color: '#444'
    },
    categoryArrow: {
        marginLeft: 10
    }

})