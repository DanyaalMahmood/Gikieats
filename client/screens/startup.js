import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import logomain from '../assets/Giki.png';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';


import { MotiView } from 'moti'

export const FadeIn = () => (
  <MotiView
    from={{ opacity: 0, bottom: 800 }}
    animate={{ opacity: 1, bottom: 200 }}
    transition={{ type: 'timing', duration: 1000, delay: 500 }}
  >
    <Avatar
      rounded
      size={80}
      source={logomain}
      containerStyle={styles.avatar}
    />

  </MotiView>
)


export const Button1 = ({navigation}) => (
  <MotiView
    from={{ left: 1000 }}
    animate={{ left: 0 }}
    transition={{ type: 'spring', delay: 1500 }}
    style={styles.button}
  >
    <Pressable style={{flex: 1, width: '100%',justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('VC')}>

      <Text style={styles.buttonText}>
        Get Started
      </Text>
    </Pressable>

  </MotiView>
)

export default function Startup({ navigation, route }) {
  const isFocused = useIsFocused();
  const [random, setRandom] = useState('true');

  useEffect(() => {
    if (isFocused) {
      console.log('use effect on initial mount in user home');
      if (random == 'true') setRandom('false');
      if (random == 'false') setRandom('true');
    };
  }, [isFocused]);

  return (
    <View style={styles.container}>

      {/* <Text style={styles.text}>Giki Eats</Text> */}

      <FadeIn />
      <Button1 navigation={navigation} />
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
    bottom: 50
  },
  buttonText: {
    color: '#EFB60E',
    fontSize: 20,
    fontWeight: '500',
    fontWeight: '900'
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
  },
});
