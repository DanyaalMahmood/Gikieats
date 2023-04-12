import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VendorList from './vendorlist';
import VendorHistory from './vendorhistory';
import VendorProfile from './vendorprofile';

const Tab = createBottomTabNavigator();


export default function VendorHome({ navigation, route }) {
    return (
        <Tab.Navigator initialRouteName='VendorList' screenOptions={{tabBarShowLabel: true, headerShown: false}} tabBar={(props) => <Tabbar {...props}/>} >

            <Tab.Screen name="VendorList" component={VendorList}/>
            <Tab.Screen name="VendorHistory" component={VendorHistory}/>
            <Tab.Screen name="VendorProfile" component={VendorProfile}/>
        </Tab.Navigator>
    );
}

const Tabbar = ({state, navigation}) => {
    index = state.index;
    routes = state.routes;
    currentRoute = routes[index].name;
    let b1 = styles.button;
    let b2 = styles.button;
    let b3 = styles.button;

    if (currentRoute === 'VendorList') {
        b1 = {...styles.button, ...styles.buttonSelected}
    }
    if (currentRoute === 'VendorHistory') {
        b2 = {...styles.button, ...styles.buttonSelected}
    }
    if (currentRoute === 'VendorProfile') {
        b3 = {...styles.button, ...styles.buttonSelected}
    }

    
    return (

            <View style={styles.bottomNavigator}>
                <Pressable style={b1} onPress={() => navigation.navigate('VendorList')}>
                    <Image
                        style={styles.image}
                        source={require('./../../img/homeicon.png')}
                    />
                </Pressable>
                <Pressable style={b2} onPress={() => navigation.navigate('VendorHistory')}>
                    <Image
                        style={styles.image}
                        source={require('./../../img/historyicon.png')}
                    />
                </Pressable>
                <Pressable style={b3} onPress={() => navigation.navigate('VendorProfile')}>
                    <Image
                        style={styles.image}
                        source={require('./../../img/profileicon.png')}
                    />
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigator: {
        width: '100%',
        height: 80,
        bottom: 0,
        position: 'absolute',
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 40,
        paddingBottom: 5,
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
