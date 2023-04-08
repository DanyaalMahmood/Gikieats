import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Pressable,ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default AddressScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <View style={styles.appBar}>
        <MaterialIcons
          name='arrow-back'
          size={24}
          color='black'
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarText}>Address</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <Text style={styles.deliveryText}>Delivery</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.detailsText}>Address Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputName}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder='Address'
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Startup')}>

                <Text style={styles.buttonText}>
                    Confirm Address
                </Text>
            </Pressable>
    </ScrollView>
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
    backgroundColor: '#eee',
  },
  appBar: {
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    // backgroundColor: '',
    // elevation: 2,
    paddingHorizontal: 16,
  },
  appBarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryText: {
    top: 30,
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  detailsRow: {
    top: 40,
    paddingLeft:30,
    paddingRight:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  detailsText: {
    fontWeight: '500',
    fontSize: 16,
  },
//   changeText: {
//     // color: 'blue',
//     fontSize: 16,
//   },
  inputContainer: {
    borderRadius: 50,
    top: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 150,
    marginHorizontal: 50,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
  inputName: {
    fontWeight: '600',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
});


