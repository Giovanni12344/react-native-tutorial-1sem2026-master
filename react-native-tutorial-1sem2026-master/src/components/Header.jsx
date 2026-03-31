import {View, Text, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather';
import {useRouter} from 'expo-router'

export default function Header(){
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View>
            <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
            <Text style={styles.logotipo}>Logo</Text>
            </View>
           <Feather name="user-plus" size={24} color="white" onPress={() => (router.push('/singup'))} />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flexDirection: "row",
        backgroundColor: "#000000",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    }
})