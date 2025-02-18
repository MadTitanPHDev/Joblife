// import React, { useEffect, useState } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     View,
//     FlatList,
//     Image,
//     TouchableOpacity,
//     ActivityIndicator,
// } from 'react-native';
// import { useQuery } from '@tanstack/react-query';
// import { listarServicos } from '../services/fetchs';

// const ListarServicos = ({ navigation }) => {
//     const { data: servicos, isLoading, error } = useQuery({
//         queryKey: ['servicos'],
//         queryFn: listarServicos,
//     });

//     if (isLoading) {
//         return (
//             <SafeAreaView style={styles.container}>
//                 <ActivityIndicator size="large" color="#023f57" />
//             </SafeAreaView>
//         );
//     }

//     if (error) {
//         return (
//             <SafeAreaView style={styles.container}>
//                 <Text style={styles.errorText}>Erro ao carregar serviços.</Text>
//             </SafeAreaView>
//         );
//     }

//     const renderItem = ({ item }) => (
//         <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => navigation.navigate('DetalhesServico', { servico: item })}
//         >
//             <Image source={{ uri: `http://192.168.50.18:3333/images/${item.foto_Servico}` }} style={styles.itemImagem} />
//             <View style={styles.itemDetalhes}>
//                 <Text style={styles.itemNome}>{item.nome_servico}</Text>
//                 <Text style={styles.itemDescricao}>{item.descricao_Servico}</Text>
//             </View>
//         </TouchableOpacity>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={servicos}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id_servico.toString()}
//                 ListEmptyComponent={<Text style={styles.emptyText}>Nenhum serviço cadastrado.</Text>}
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//         alignItems: 'center',
//     },
//     itemImagem: {
//         width: 80,
//         height: 80,
//         borderRadius: 8,
//         marginRight: 10,
//     },
//     itemDetalhes: {
//         flex: 1,
//     },
//     itemNome: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     itemDescricao: {
//         fontSize: 14,
//         color: '#555',
//     },
//     errorText: {
//         color: 'red',
//         textAlign: 'center',
//     },
//     emptyText: {
//         textAlign: 'center',
//         color: '#777',
//     },
// });

// export default ListarServicos;


import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { listarServicos } from '../services/fetchs';

const ListarServicos = ({ navigation }) => {
    const { data: servicos, isLoading, error } = useQuery({
        queryKey: ['servicos'],
        queryFn: listarServicos,
    });

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#023f57" />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Erro ao carregar serviços.</Text>
            </SafeAreaView>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DetalhesServico', { servico: item })}
        >
            <Image source={{ uri: `http://192.168.50.18:3333/images/${item.foto_Servico}` }} style={styles.itemImagem} />
            <View style={styles.itemDetalhes}>
                <Text style={styles.itemNome}>{item.nome_servico}</Text>
                <Text style={styles.itemDescricao}>{item.descricao_Servico}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={servicos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_servico.toString()}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhum serviço cadastrado.</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    itemImagem: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    itemDetalhes: {
        flex: 1,
    },
    itemNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescricao: {
        fontSize: 14,
        color: '#555',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    emptyText: {
        textAlign: 'center',
        color: '#777',
    },
});

export default ListarServicos;