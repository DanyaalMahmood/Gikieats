import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import logomain from '../assets/Giki.png';

export default function Startup({ navigation, route }) {
  return (
    <View style={styles.container}>

      {/* <Text style={styles.text}>Giki Eats</Text> */}

      <Avatar
        rounded
        size={80}
        source={logomain}
        containerStyle={styles.avatar}
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
    backgroundColor: '#ece5db',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  text: {
    fontSize: 50,
    fontWeight: '900',
    color: 'white',
    bottom: 150
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
  },
  avatar: {
    marginRight: 16,
    width: 400,
    height: 400,
    bottom: 200
},
});
