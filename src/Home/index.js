import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


const Home = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Qual Servico você precisa</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PerfilUsuario')} style={styles.profileIconContainer}>
          <Image source={require('../assets/job.png')} style={styles.profileIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListarServicos')} style={styles.profileIconContainer}>
          <Image source={require('../assets/job.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="pesquise um serviço..."
          style={styles.searchInput}
        />
        

      </View>

      <TouchableOpacity style={styles.banner}>
        <Image source={require('../assets/logo.png')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>Pegue cupom desconto</Text>
          <Text style={styles.bannerSubText}>Especialmente hoje!</Text>
          <Text style={styles.bannerCTA}>Ganhe até 40% de desconto!</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.categoriesContainer}>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Todas Categorias</Text>
          <Text style={styles.viewAllText}>Ver Todas</Text>
        </View>
        <View style={styles.categoriesRow}>



          <TouchableOpacity
            style={styles.categoryItem}
          // onPress={() =>
          //   navigation.navigate('CategoryServices', {
          //     categoryName: 'Reforma e Reparos',
          //     services: categoryData['Reforma e Reparos'],
          //   })
          // }
          >
            <Image source={require('../assets/reforma.png')} style={styles.categoryIcon} />
            <Text>Reforma e Reparos</Text>
          </TouchableOpacity>






          <View style={styles.categoryItem}>
            <Image source={require('../assets/casa.png')} style={styles.categoryIcon} />
            <Text>Serviços doméstico</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../assets/tec.png')} style={styles.categoryIcon} />
            <Text>Assistência Técnica</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../assets/tree.png')} style={styles.categoryIcon} />
            <Text>Design e Tecnologia</Text>
          </View>
        </View>
      </View>

      <View style={styles.recommendedContainer}>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Recomendado</Text>
          <Text style={styles.viewAllText}>Todos recomendados</Text>
        </View>

        <TouchableOpacity style={styles.serviceItem}
          onPress={() => navigation.navigate('PerfilProfissional')}>
          <Image source={require('../assets/paulo.png')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>Desenvolvedor sistemas</Text>
            <Text style={styles.servicePrice}>R$ 30/hr</Text>
            <Text style={styles.serviceRating}>4.9 (120 Vizualizações)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}
          onPress={() => navigation.navigate('PerfilProfissional')}>
          <Image source={require('../assets/tim.png')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>Professor de Patins</Text>
            <Text style={styles.servicePrice}>R$ 30/hr</Text>
            <Text style={styles.serviceRating}>4.8 (99 Vizualizações)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}
          onPress={() => navigation.navigate('PerfilProfissional')}>
          <Image source={require('../assets/2.jpg')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>Encanador</Text>
            <Text style={styles.servicePrice}>a combinar</Text>
            <Text style={styles.serviceRating}>4.8 (99 Vizualizações)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}
          onPress={() => navigation.navigate('PerfilProfissional')}>
          <Image source={require('../assets/4.jpg')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>Professor de Inglês</Text>
            <Text style={styles.servicePrice}>R$ 30/hr</Text>
            <Text style={styles.serviceRating}>4.8 (99 Vizualizações)</Text>
          </View>
        </TouchableOpacity>

        
   
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIconContainer: {
    padding: 5,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  banner: {
    backgroundColor: '#023f57',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  bannerImage: {
    width: 100,
    height: 80,
    marginRight: 10,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerSubText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  bannerCTA: {
    color: '#fff',
    fontSize: 14,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 14,
    color: '#005f9e',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    width: 70,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  recommendedContainer: {
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  serviceDetails: {
    justifyContent: 'center',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 14,
    color: '#555',
  },
  serviceRating: {
    fontSize: 12,
    color: '#777',
  },
  voltar: {
    width: 300,
    zIndex: 9999,
    marginRight: 10,
    fontSize: 14,
    color: '#005f9e',
  },

});

export default Home;


