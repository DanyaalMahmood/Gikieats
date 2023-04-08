import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './screens/startup';
import VC from './screens/vc';
import Signin from './screens/signin';
import Cart from './screens/cart';
import Address from './screens/address';
import UserHome from './screens/userhome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Startup" component={Startup}/>
        <Stack.Screen name="VC" component={VC}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="UserHome" component={UserHome}/>
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 100,
    backgroundColor: '#EFB60E',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  text: {
    fontSize: 50,
    fontWeight: '900',
    color: 'white',
    bottom: 380
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 320,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50
  },
  buttonText: {
    color: '#EFB60E',
    fontSize: 20,
    fontWeight: '500'
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    bottom: 250
  }
});
