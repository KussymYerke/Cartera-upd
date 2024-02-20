import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

var { width, height } = Dimensions.get("window");
const image = './btn.png'


export default function FaceIdScreen() {

  const navigation = useNavigation();


  const goBack = () => {
    navigation.goBack();
  }

  const scanPress = () => {
    navigation.navigate('SuccessId')
  }

  return (
    <SafeAreaView>
        <ScrollView>
          <View className='mt-10'>
          <Text className="text-3xl text-center font-bold" style={{marginBottom: height*0.06}}>Как настроить верификацию лица</Text>
          <View className="flex-row items-center justify-center gap-5" style={{marginBottom: height*0.05}}>
            <Image source={require("./Face1.png")} style={{height: hp(10), width: hp(8)}} />
            <Text className='w-[55%]'>
                Держите устройство на расстоянии примерно 25-50 см от лица, в нормальном положении
            </Text>
          </View>
          <View className="flex-row items-center justify-center gap-5" style={{marginBottom: height*0.05}}>
            <Image source={require("./Face2.png")} style={{height: hp(10), width: hp(8)}} />
            <Text className='w-[55%]'>
                Держите устройство на расстоянии примерно 25-50 см от лица, в нормальном положении
            </Text>
          </View>
          <View className="flex-row items-center justify-center gap-5">
            <Image source={require("./Face3.png")} style={{height: hp(10), width: hp(8)}} />
            <Text className='w-[55%]'>
                Держите устройство на расстоянии примерно 25-50 см от лица, в нормальном положении
            </Text>
          </View>
          <View className="flex items-center">
            <TouchableOpacity className="flex items-center" style={{marginTop: height *0.06}} onPress={scanPress}>
              <ImageBackground source={require('./btn.png')} className="bg-cover rounded-2xl justify-center" style={{width: width*0.8, height: height*0.078}}>
                <Text className="text-white text-center text-lg">Сканировать Face ID</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-md items-center w-[80%] py-3 mt-4" onPress={goBack}>
              <Text className='text-lg'>Не использовать Face ID</Text>
            </TouchableOpacity>
          </View>

          
          <Image />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}
