import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import Menu from './menu';
import History from './history';

const Tab = createBottomTabNavigator();

const Test1 = () => {
    return (
        <View style={styles.test}>
            <Text style={{fontSize:30, textAlign: 'center'}}>Home</Text>
        </View>
    )
}

const Test2 = () => {
    return (
        <View style={styles.test}>
            <Text style={{fontSize:30, textAlign: 'center'}}>Profile</Text>
        </View>
    )
}

const Test3 = () => {
    return (
        <View style={styles.test}>
            <Text style={{fontSize:30, textAlign: 'center'}}>History</Text>
        </View>
    )
}

export default function UserHome({ navigation, route }) {
    return (
        <Tab.Navigator initialRouteName='Menu' screenOptions={{tabBarShowLabel: true, headerShown: false}} tabBar={(props) => <Tabbar {...props}/>} >
            <Tab.Screen name="Test1" component={Test1} />
            <Tab.Screen name="Test2" component={Test2} />
            <Tab.Screen name="Test3" component={Test3} />
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Menu" component={Menu}/>
            <Tab.Screen name="History" component={History}/>
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

    if (currentRoute === 'Menu') {
        b1 = {...b1, ...styles.buttonSelected}
    }
    if (currentRoute === 'Profile') {
        b2 = {...b2, ...styles.buttonSelected}
    }
    if (currentRoute === 'History') {
        b3 = {...b3, ...styles.buttonSelected}
    }
    
    return (

            <View style={styles.bottomNavigator}>
                <Pressable style={b1} onPress={() => navigation.navigate('Menu')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/homeicon.png')}
                    />
                </Pressable>
                <Pressable style={b2} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/profileicon.png')}
                    />
                </Pressable>
                <Pressable style={b3} onPress={() => navigation.navigate('History')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/historyicon.png')}
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
        left: 60,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 19
    },
    buttonSelected: {
        backgroundColor: '#EFB60E',
        borderRadius: 40,
       
    },
    button2: {
        width: 60,
        height: 50,
        position: 'absolute',
        left: '43%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 19
    },
    button3: {
        width: 60,
        height: 50,
        position: 'absolute',
        right: 60,
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
