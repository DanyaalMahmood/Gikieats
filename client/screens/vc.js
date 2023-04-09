import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function VC({navigation, route}) {
  return (
    
    <View style={styles.container}>

      <Image
        style={styles.stretch}
        source={require('./../img/restaurant1.png')}
      />

 
      <Pressable style={styles.vendor} onPress={() => {navigation.navigate('Map')}}>
        <Text style={styles.buttonText}>
          Vendor
        </Text>
      </Pressable>

      <Pressable style={styles.customer} onPress={() => {navigation.navigate('Signin')}}>

        <Text style={styles.buttonText}>
          Customer
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
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
  vendor: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 320,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200
  },
  customer: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 320,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100
  },
  buttonText: {
    color: '#EFB60E',
    fontSize: 20,
    fontWeight: '500'
  },
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    bottom: 290
  }
});
