import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default Otheritems = () => {
    return(
        <View style={styles.container}>
            <Text>Other Items</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        height: '50%',
        marginHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});