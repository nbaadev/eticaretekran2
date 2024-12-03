import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Home, User } from 'lucide-react-native';

// Ürünler listesi
const products = [
  { id: 1, name: 'Ürün 1', image: 'https://via.placeholder.com/300x400' },
  { id: 2, name: 'Ürün 2', image: 'https://via.placeholder.com/300x400' },
  { id: 3, name: 'Ürün 3', image: 'https://via.placeholder.com/300x400' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentUser, setCurrentUser] = useState({
    name: 'Nuran Turan',
    email: 'nuranbadeturan@gmail.com',
    address: 'Edirne, Türkiye',
  });

  const updateUser = (field, value) => {
    setCurrentUser((prev) => ({ ...prev, [field]: value }));
  };

  // Ana Sayfa Ekranı
  const renderHomeScreen = () => (
    <View style={[styles.mainContent, styles.centeredContent]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.centeredScroll}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  // Profil Ekranı
  const renderProfileScreen = () => (
    <View style={[styles.mainContent, styles.centeredContent]}>
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.profilePicture}>
          <User size={48} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.profileInfoTitle}>Kullanıcı Bilgileri</Text>

        {/* Ad Soyad */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ad Soyad:</Text>
          <TextInput
            style={styles.textInput}
            value={currentUser.name}
            onChangeText={(text) => updateUser('name', text)}
            placeholder="Ad Soyad"
          />
        </View>

        {/* E-posta */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-posta:</Text>
          <TextInput
            style={styles.textInput}
            value={currentUser.email}
            onChangeText={(text) => updateUser('email', text)}
            placeholder="E-posta"
            keyboardType="email-address"
          />
        </View>

        {/* Adres */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adres:</Text>
          <TextInput
            style={styles.textInput}
            value={currentUser.address}
            onChangeText={(text) => updateUser('address', text)}
            placeholder="Adres"
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* İçerik Alanı */}
      <View style={styles.mainContent}>
        {activeTab === 'home' && renderHomeScreen()}
        {activeTab === 'profile' && renderProfileScreen()}
      </View>

      {/* TabBar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => setActiveTab('home')}
          style={[styles.tabBarItem, activeTab === 'home' && styles.tabBarItemActive]}
        >
          <Home size={24} color={activeTab === 'home' ? '#000' : '#666'} />
          <Text style={styles.tabBarItemText}>Anasayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('profile')}
          style={[styles.tabBarItem, activeTab === 'profile' && styles.tabBarItemActive]}
        >
          <User size={24} color={activeTab === 'profile' ? '#000' : '#666'} />
          <Text style={styles.tabBarItemText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Stil Tanımları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContent: {
    flex: 1,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    width: 200,
    height: 300,
    marginHorizontal: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePicture: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    width: '90%',
  },
  profileInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabBarItem: {
    alignItems: 'center',
    opacity: 0.5,
  },
  tabBarItemActive: {
    opacity: 1,
  },
  tabBarItemText: {
    fontSize: 12,
    marginTop: 4,
  },
});
