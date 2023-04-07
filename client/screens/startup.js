import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function Startup({navigation, route}) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Giki Eats</Text>

      <Image
        style={styles.stretch}
        source={require('./../img/burger.png')}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('VC')}>

        <Text style={styles.buttonText}>
          Get Started
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
