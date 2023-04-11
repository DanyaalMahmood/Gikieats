import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import Menu from './menu';
import History from './history';

const Tab = createBottomTabNavigator();

export default function UserHome({ navigation, route }) {
    return (
        <Tab.Navigator initialRouteName='Menu' screenOptions={{tabBarShowLabel: true, headerShown: false}} tabBar={(props) => <Tabbar {...props}/>} >
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
    let b1 = styles.button;
    b2 = styles.button;
    b3 = styles.button;

    if (currentRoute === 'Menu') {
        b1 = {...styles.button, ...styles.buttonSelected}
    }
    if (currentRoute === 'Profile') {
        b2 = {...styles.button, ...styles.buttonSelected}
    }
    if (currentRoute === 'History') {
        b3 = {...styles.button, ...styles.buttonSelected}
    }
    
    return (

            <View style={styles.bottomNavigator}>
                <Pressable style={b1} onPress={() => navigation.navigate('Menu')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/homeicon.png')}
                    />
                </Pressable>
                <Pressable style={b3} onPress={() => navigation.navigate('History')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/historyicon.png')}
                    />
                </Pressable>
                <Pressable style={b2} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={styles.image}
                        source={require('./../img/profileicon.png')}
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
        backgroundColor: '#F2F2F2',
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 40,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 60,
        height: 50,
        //left: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSelected: {
        backgroundColor: '#EFB60E',
        borderRadius: 40,
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
