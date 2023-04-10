import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './../profile';
import VendorList from './vendorlist';

const Tab = createBottomTabNavigator();


export default function VendorHome({ navigation, route }) {
    return (
        <Tab.Navigator initialRouteName='VendorList' screenOptions={{tabBarShowLabel: true, headerShown: false}} tabBar={(props) => <Tabbar {...props}/>} >

            <Tab.Screen name="VendorList" component={VendorList}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

const Tabbar = ({state, navigation}) => {
    index = state.index;
    routes = state.routes;
    currentRoute = routes[index].name;
    let b1 = styles.button1;
    b2 = styles.button2;
    b3 = styles.button3;

    if (currentRoute === 'VendorList') {
        b1 = {...b1, ...styles.buttonSelected}
    }
    if (currentRoute === 'Profile') {
        b3 = {...b3, ...styles.buttonSelected}
    }
    
    return (

            <View style={styles.bottomNavigator}>
                <Pressable style={b1} onPress={() => navigation.navigate('VendorList')}>
                    <Image
                        style={styles.image}
                        source={require('./../../img/homeicon.png')}
                    />
                </Pressable>
                <Pressable style={b3} onPress={() => navigation.navigate('History')}>
                    <Image
                        style={styles.image}
                        source={require('./../../img/historyicon.png')}
                    />
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigator: {
        width: '100%',
        height: '9%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#F2F2F2'
    },
    button1: {
        position: 'absolute',
        width: 60,
        height: 50,
        left: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 19
    },
    buttonSelected: {
        backgroundColor: '#EFB60E',
        borderRadius: 40,
       
    },
    button3: {
        width: 60,
        height: 50,
        position: 'absolute',
        right: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 19
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        opacity: 0.4,  
    },
    test: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        
    }
});
