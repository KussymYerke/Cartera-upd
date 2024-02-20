import { View, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");


export default function SucessIdScreen() {

    const navigation = useNavigation();
    const goBack = () => {navigation.navigate('Профиль')};

  return (
    <View className="flex bg-[#4F97A3]">
      <ImageBackground className="bg-cover h-screen" source={require('./SF Symbol/background.png')}>  
        <View className="items-center">
            <Text className="text-2xl text-white font-semibold text-center" style={{marginTop: height*0.65}}>Face Id был{"\n"} установлен успешно</Text>  
            <TouchableOpacity
                className="bg-[#3CAE8B] bg-cover py-4 items-center rounded-xl mt-5"
                style={{width: width*0.75}}
                onPress={goBack} 
            >
                <Text className="color-white text-xl font-semibold">OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="relative bg-white bg-cover py-4 px-8 rounded-xl mt-5" 
            >
                <Text className="color-black text-xl font-semibold">Сканировать повторно</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
      
    </View>
  )
}