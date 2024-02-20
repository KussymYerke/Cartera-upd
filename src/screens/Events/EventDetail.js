import { View, Image, ScrollView, Text} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function EventDetail({item}) {

    const navigation = useNavigation();

  return (
    <ScrollView>
        <View>
           <Image source={require('./event.png')} className='w-[100%]'/>
           <TouchableOpacity className="absolute" onPress={() => navigation.goBack()}>
             <Image source={require('./goBack.png')} className=" w-[35px] h-[35px] ml-5 mt-16"/> 
           </TouchableOpacity>
        </View>
        <View className="border-b pb-3 ml-5 mt-5">
            <Text className="color-[#B8B8B8]">
                07 декабря 2023
            </Text>
            <Text className="text-2xl font-bold">
                KAZ CODE YOUTUBE CHALLENGE
            </Text>
        </View>
        <View className="pt-3 w-[90%]">
            <Text className="color-[#888888] text-[16px] ml-5">
            KAZ CODE YOUTUBE CHALLENGE
            Федерация спортивного программирования приглашает вас принять участие в конкурсе KazCodeYouTubeChallenge по программированию на казахском языке.
            {"\n"}
            {"\n"}
            Немного о конкурсе:
            {"\n"}
            - Суммарный призовой фонд 1 000 000 тг.
            {"\n"}
            - Конкурс по категориям: "Разбор задач" по спортивному программированию и "Разбор тем" по алгоритмам и языкам программирования, приглашаем принять участие и начинающих программистов для разбора базовых тем.
            {"\n"}
            {"\n"}
            Все что нужно сделать:
            {"\n"}
            - Загрузить на свой YouTube канал не менее трех видео в рамках выбранной категории.
            {"\n"}
             - Заполнить форму отправки видео, предоставив ссылку на ваш канал YouTube. Мы приглашаем всех желающих принять участие в конкурсе и внести свой вклад в развитие казахскоязычного контента на YouTube! Поторопитесь, ведь конкурс продлится только до конца февраля 2024 года!
            </Text>
        </View>
        <View className="flex-row justify-center text-center my-5">
            <TouchableOpacity className=" bg-[#4F97A3] py-3 px-20 rounded-[10px]">
                <Text className="color-white  font-bold text-[20px] ">Оставить заявку </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}