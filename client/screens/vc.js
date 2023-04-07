import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function VC({navigation, route}) {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.text}>What are you?</Text>

 
      <Pressable style={styles.vendor} onPress={() => {navigation.navigate('Startup')}}>
        <Text style={styles.buttonText}>
          Vendor
        </Text>
      </Pressable>

      <Pressable style={styles.customer} onPress={() => {navigation.navigate('Startup')}}>

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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    bottom: 250
  }
});
