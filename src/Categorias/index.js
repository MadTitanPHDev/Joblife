import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lista from '../ListaCategorias';

export default function Categorias() {
    return (
        <SafeAreaView style={styles.container}>
            
            <TextInput
                style={styles.inputLogin}
                placeholder='procure um serviço'
            />
            <View style={{alignItems:'center'}}>
                <Text style={{color:'#023f57', fontWeight:'bold', fontSize: 25}}>Escolha uma Categoria</Text>
            </View>

            <Lista/>
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d1',
    },
    inputLogin: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop:50
    }
})