// import React, { useEffect, useState } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     Alert,
//     Image,
//     ScrollView,
// } from 'react-native';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
// import { useMutation } from '@tanstack/react-query';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { cadastrarServicoItem } from '../../services/fetchs';

// const CadastroServicoItem = ({ navigation }) => {
//     const [nomeServico, setNomeServico] = useState('');
//     const [descricaoServico, setDescricaoServico] = useState('');
//     const [areaAtuacao, setAreaAtuacao] = useState('');
//     const [precoMin, setPrecoMin] = useState('');
//     const [imagem, setImagem] = useState(null);
//     const [idUsuario, setIdUsuario] = useState(null);

//     // Recupera o id_usuario do AsyncStorage
//     useEffect(() => {
//         const fetchUserId = async () => {
//             const user = await AsyncStorage.getItem('localUser');
//             if (user) {
//                 const parsedUser = JSON.parse(user);
//                 setIdUsuario(parsedUser.id_usuario); // Define o id_usuario no estado
//             }
//         };
//         fetchUserId();
//     }, []);

//     const mutation = useMutation({
//         mutationFn: ({ nomeServico, descricaoServico, areaAtuacao, precoMin, imagem }) => {
//             const formData = new FormData();
//             formData.append('id_usuario', idUsuario); // Adiciona o id_usuario ao FormData
//             formData.append('nomeServico', nomeServico);
//             formData.append('descricaoServico', descricaoServico);
//             formData.append('areaAtuacao', areaAtuacao);
//             formData.append('precoMin', precoMin);

//             if (imagem) {
//                 formData.append('imagem', {
//                     uri: imagem,
//                     type: 'image/jpeg',
//                     name: 'imagem.jpg',
//                 });
//             }

//             return cadastrarServicoItem(formData); // Chama a função do fetch
//         },
//         onSuccess: async (data) => {
//             console.log('Serviço cadastrado com sucesso:', data);
//             Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
//             navigation.navigate('Home'); // Redireciona para a Home após o cadastro
//         },
//         onError: (error) => {
//             console.error('Erro ao cadastrar serviço:', error);
//             Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o serviço.');
//         },
//     });

//     const handleImagemServico = () => {
//         Alert.alert(
//             'Selecione uma imagem',
//             'Informe de onde você quer pegar a foto',
//             [
//                 {
//                     text: 'Galeria',
//                     onPress: () => pickImageFromGalery(),
//                     style: 'default',
//                 },
//                 {
//                     text: 'Câmera',
//                     onPress: () => pickImageFromCamera(),
//                     style: 'default',
//                 },
//             ]
//         );
//     };

//     const pickImageFromGalery = async () => {
//         const options = {
//             mediaType: 'photo',
//         };
//         const result = await launchImageLibrary(options);
//         if (result?.assets && result.assets.length > 0) {
//             const imageUri = result.assets[0].uri;
//             setImagem(imageUri);
//         }
//     };

//     const pickImageFromCamera = async () => {
//         const options = {
//             mediaType: 'photo',
//         };
//         const result = await launchCamera(options);
//         if (result?.assets && result.assets.length > 0) {
//             const imageUri = result.assets[0].uri;
//             setImagem(imageUri);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView>
//                 <Text style={styles.label}>Nome do Serviço:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Digite o nome do serviço"
//                     value={nomeServico}
//                     onChangeText={setNomeServico}
//                 />

//                 <Text style={styles.label}>Descrição:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Descreva o serviço"
//                     value={descricaoServico}
//                     onChangeText={setDescricaoServico}
//                     multiline
//                 />

//                 <Text style={styles.label}>Região de Atuação:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Informe a região de atuação"
//                     value={areaAtuacao}
//                     onChangeText={setAreaAtuacao}
//                 />

//                 <Text style={styles.label}>Preço Mínimo:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Informe o preço mínimo"
//                     value={precoMin}
//                     onChangeText={setPrecoMin}
//                     keyboardType="numeric"
//                 />

//                 <TouchableOpacity style={styles.buttonImagem} onPress={handleImagemServico}>
//                     <Text style={styles.textButton}>Selecione uma imagem</Text>
//                 </TouchableOpacity>

//                 {imagem && (
//                     <Image source={{ uri: imagem }} style={styles.imagemSelecionada} />
//                 )}

//                 <TouchableOpacity
//                     style={styles.buttonCadastrar}
//                     onPress={() => {
//                         mutation.mutate({
//                             nomeServico,
//                             descricaoServico,
//                             areaAtuacao,
//                             precoMin,
//                             imagem,
//                         });
//                     }}
//                 >
//                     <Text style={styles.textButton}>Cadastrar Serviço</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 8,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         marginBottom: 16,
//         borderWidth: 1,
//         borderColor: '#ccc',
//     },
//     buttonImagem: {
//         backgroundColor: '#023f57',
//         padding: 10,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     buttonCadastrar: {
//         backgroundColor: '#023f57',
//         padding: 15,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     textButton: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     imagemSelecionada: {
//         width: 200,
//         height: 200,
//         alignSelf: 'center',
//         marginBottom: 16,
//         borderRadius: 8,
//     },
// });

// export default CadastroServicoItem;