import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import Loading from "../../components/Loading"
import Header from "../../components/Header"
import { useQuery } from "@tanstack/react-query";
import { fetchBreakingNews, fetchRecommendedNews } from "../../../utils/NewsApi";
import MiniHeader from "../../components/MiniHeader";
import NewsSection from "../../components/NewsSection";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsCarousel from './EventsCarousel';
import EventsSection from './EventsSection'

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  
  let recommendedNews = [
    {
        urlToImage: require('./1.png'),
        title: 'Однодневный семинар IELTS оффлайн/онлайн',
        publishedAt: '07 декабря 2023'
    },
    {
        urlToImage: require('./2.png'),
        title: 'ГОСТЕВАЯ ЛЕКЦИЯ: ПРИКЛАДНОЙ НЕЙРОМАРКЕТИНГ',
        publishedAt: '05 декабря 2023'
    },
    {
        urlToImage: require('./3.png'),
        title: 'ОЛИМПИАДА КБТУ ПО МАТЕМАТИКЕ 2024',
        publishedAt: '01 декабря 2023'
    },
  ]

  // Breaking News
  const { data, isLoading: isBreakingLoading } = useQuery({
    queryKey: ["breakingNewss"],
    queryFn: fetchBreakingNews,
  });

  

  return (
    <SafeAreaView className=" flex-1 bg-white dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />

      <View>
        {/* Header */}
        <Header />

        {/* Breaking News */}
        {isBreakingLoading ? (
          <Loading />
        ) : (
          <View className="mt-5">
            <EventsCarousel label="Breaking News" data={data.articles} />
          </View>
        )}

        <View>
            <MiniHeader label="Последние новости"/>

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: hp(80),
                }}>

            
                <EventsSection
                label="Популярные события"
                newsProps={recommendedNews}
                />
  
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
