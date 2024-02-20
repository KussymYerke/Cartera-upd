import { View, Text, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity, Touchable} from 'react-native'
import React from 'react'
import HomeScreen from "../HomeScreen";
import Feed from "../Profile";
const {width, height} = Dimensions.get('window')
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function ParentHomeScreen() {

  const Tab = createBottomTabNavigator();

  return (
    <View>
      <SafeAreaView>
        <ScrollView >
          <View className="items-center mt-3">
            <View 
              className="flex border border-[#0F52BA] bg-[#0F52BA] rounded-t-[40px]"
              style={{width: width*0.85}}
            >
              <Text 
                className="color-white text-2xl font-bold py-3 pl-10" 
              >
                РОДИТЕЛЬ
              </Text>
            </View>
            <View>
              <View 
                className=" bg-white border border-white rounded-b-[40px]"
                style={{width: width*0.85}}
              >
                <View 
                  className='flex-row items-center gap-7 pl-5 pt-5 pb-16  '
                >
                  <Image 
                    style={{height: height*0.08, width: width*0.19}} 
                    source={require("./../../../assets/ava.png")}
                  />
                  <View>
                      <Text className="text-xl font-semibold mb-[-5px]">Гульмира</Text>
                      <Text className="text-xl font-semibold">Сакенова</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="flex-row gap-2 mt-5">
              <View className="w-[16px] rounded-[6px] h-[8px] bg-[#272727]"></View>
              <View className="bg-[#D9D9D9] rounded-full w-[8px] h-[8px]"></View>
            </View>
          </View>
          <View 
            className="bg-white items-center pt-10 border border-white marker:rounded-t-[40px] mt-12 pb-6"
          >
            <View className="mb-2">
              <TouchableOpacity>
                <Image 
                  className=""
                  source={require('./report.png')} 
                  style={{width: width*0.9, height: height*0.2}}/>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-3">
              <TouchableOpacity>
                <Image 
                  source={require('./news.png')} 
                  style={{width: width*0.43, height: height*0.21}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image 
                  source={require('./deen.png')}
                  style={{width: width*0.43, height: height*0.21}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}