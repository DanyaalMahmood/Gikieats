import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';

export default function Signin({ navigation, route }) {
    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Pressable style={styles.SigninContainer} onPress={() => navigation.navigate('VC')}>

                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
                <Pressable style={styles.SignupContainer} onPress={() => navigation.navigate('VC')}>

                    <Text style={styles.buttonText}>
                        Sign Up
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
        paddingBottom: 50
    },
    logocontainer: {
        backgroundColor: '#ffffff',
        height: '40%',
        width: '100%',
        top: 0,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOpacity: 20,
        shadowColor: 'black',
    },
    button: {
        backgroundColor: '#000000',
        width: 100,
        height: 50,
        position: 'absolute',
        top: '80%',
        left: '10%',

    },
    SigninContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        left: '15%',
        justifyContent: 'center',
        borderColor: '#EFB60E',
        borderBottomWidth: 4
    },
    SignupContainer: {
        width: 120,
        height: 50,
        position: 'absolute',
        top: '84.5%',
        right: '15%',
        justifyContent: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 4
    },
    buttonText: {
        textAlign: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: '500'
    }

});
