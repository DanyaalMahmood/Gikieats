import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

import { MotiView } from 'moti'

export const FadeInLogo = () => (
  <MotiView
    from={{ opacity: 0, bottom: 800 }}
    animate={{ opacity: 1, bottom: 180 }}
    transition={{ type: 'timing', duration: 1000, delay: 500 }}
  >
    <Image
      style={styles.stretch}
      source={require('./../assets/gikieats.png')}
    />

  </MotiView>
)

export const Button1 = ({navigation}) => (
  <MotiView
    from={{ left: 1000 }}
    animate={{ left: 0 }}
    transition={{ type: 'spring', delay: 1500 }}
    style={styles.vendor}
  >
    <Pressable style={{ flex: 1, width: '100%',justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('VendorSi') }}>

      <Text style={styles.buttonText}>
        Vendor
      </Text>
    </Pressable>

  </MotiView>
)
export const Button2 = ({navigation}) => (
  <MotiView
    from={{ left: 1000 }}
    animate={{ left: 0 }}
    transition={{ type: 'spring', delay: 2000 }}
    style={styles.customer}
  >
    <Pressable style={{flex: 1, width: '100%',justifyContent: 'center', alignItems: 'center'}} onPress={() => { navigation.navigate('Signin') }}>

      <Text style={styles.buttonText}>
        Customer
      </Text>
    </Pressable>

  </MotiView>
)


export default function VC({ navigation, route }) {
  return (

    <View style={styles.container}>

      <FadeInLogo />
      <Button1 navigation={navigation}/>
      <Button2 navigation={navigation}/>
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
    bottom: 380
  },
  vendor: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 320,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20
  },
  customer: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 320,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#EFB60E',
    fontSize: 20,
    fontWeight: '900'

  },
  stretch: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  }
});
