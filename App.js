import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Home, User } from "lucide-react-native";
import tw from "tailwind-react-native-classnames";

const products = [
  { id: 1, name: "Ürün 1", image: "https://via.placeholder.com/300x400" },
  { id: 2, name: "Ürün 2", image: "https://via.placeholder.com/300x400" },
  { id: 3, name: "Ürün 3", image: "https://via.placeholder.com/300x400" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState({
    name: "Nuran Turan",
    email: "nuranbadeturan@gmail.com",
    address: "Edirne, Türkiye",
  });

  // Kullanıcı bilgilerini güncelle
  const updateUser = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  let screenContent;

  // Ana Sayfa İçeriği
  if (activeTab === "home") {
    screenContent = (
      <ScrollView contentContainerStyle={tw`flex-grow items-center`}>
        {products.map((product) => (
          <View
            key={product.id}
            style={tw`w-48 h-72 bg-gray-100 rounded-xl p-2 items-center mx-2`}
          >
            <Image
              source={{ uri: product.image }}
              style={tw`w-36 h-36 rounded-lg`}
            />
            <Text style={tw`mt-2 text-lg font-bold`}>{product.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  } else if (activeTab === "profile") {
    screenContent = (
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`mb-4`}>
          <TouchableOpacity
            style={tw`w-24 h-24 bg-gray-200 rounded-full items-center justify-center`}
          >
            <User size={48} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={tw`bg-gray-100 rounded-xl p-4 w-11/12`}>
          <Text style={tw`text-xl font-bold text-center mb-4`}>
            Kullanıcı Bilgileri
          </Text>
          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold mb-2`}>Ad Soyad:</Text>
            <TextInput
              style={tw`w-full h-12 border border-gray-300 rounded-md p-2`}
              value={user.name}
              onChangeText={(text) => updateUser("name", text)}
              placeholder="Ad Soyad"
            />
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold mb-2`}>E-posta:</Text>
            <TextInput
              style={tw`w-full h-12 border border-gray-300 rounded-md p-2`}
              value={user.email}
              onChangeText={(text) => updateUser("email", text)}
              placeholder="E-posta"
              keyboardType="email-address"
            />
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`text-sm font-semibold mb-2`}>Adres:</Text>
            <TextInput
              style={tw`w-full h-12 border border-gray-300 rounded-md p-2`}
              value={user.address}
              onChangeText={(text) => updateUser("address", text)}
              placeholder="Adres"
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Ekran içeriği */}
      <View style={tw`flex-1`}>{screenContent}</View>

      {/* TabBar */}
      <View style={tw`flex-row justify-between items-center bg-gray-100 h-16`}>
        <TouchableOpacity
          onPress={() => setActiveTab("home")}
          style={tw`items-center flex-1`}
        >
          <Home size={24} color={activeTab === "home" ? "#000" : "#666"} />
          <Text style={tw`text-xs mt-0.5`}>Anasayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("profile")}
          style={tw`items-center flex-1`}
        >
          <User size={24} color={activeTab === "profile" ? "#000" : "#666"} />
          <Text style={tw`text-xs mt-0.5`}>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
