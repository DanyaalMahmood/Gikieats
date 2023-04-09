import { StyleSheet, Text, View, Button, Pressable, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SUform({ navigation }) {
    return (
        <View style={styles.container}>
            <View  style={styles.scrollable}>
            <ScrollView>
                <View style={styles.email}>
                    <Text>Name</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.password}>
                    <Text>Email Address</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.password}>
                    <Text>Registration Number</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.password}>
                    <Text>Phone Number</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.password}>
                    <Text>Hostel Number</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.password}>
                    <Text>Password</Text>
                    <TextInput style={styles.input} />
                </View>
                
            </ScrollView>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Startup')}>

                <Text style={styles.buttonText}>
                    Sign Up
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignContent: 'center',
        paddingTop: 50
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

});