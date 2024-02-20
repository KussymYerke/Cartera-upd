import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function NewsSection({ newsProps }) {
  const navigation = useNavigation();
  const [urlList, setUrlList] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState([]);

  // Function to format the date
  function formatDate(isoDate) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        className="mb-4 mx-4 space-y-1"
        key={index}
        onPress={() => {}}
      >
        <View className="flex-row justify-start w-[100%]shadow-sm">
          {/* Image */}
          <View className="items-start justify-start w-[20%]">
            <Image
              source={item.urlToImage}
              style={{ width: hp(9), height: hp(10) }}
              resizeMode="cover"
              className="rounded-lg"
            />
          </View>

          {/* Content */}

          <View className="w-[70%] pl-4 justify-center space-y-1">
            {/* Author */}
            {/* <Text className="text-xs font-bold text-gray-900 dark:text-neutral-300">
              {item?.author?.length > 20
                ? item.author.slice(0, 20) + "..."
                : item.author}
            </Text> */}

            {/* Title */}
            <Text
              className="text-[#424242] uppercase max-w-[90%] font-semibold"
              style={{
                fontSize: hp(1.7),
              }}
            >
              {item.title.length > 45
                ? item.title.slice(0, 45) + "..."
                : item.title}
            </Text>

            {/* Date */}
            <Text className="text-xs text-[#424242]">
              {formatDate(item.publishedAt)}
            </Text>
          </View>

          {/* Bookmark */}
          <View className="w-[10%] justify-center">
            <TouchableOpacity
              onPress={() => toggleBookmarkAndSave(item, index)}
            >
              <BookmarkIcon
                color={bookmarkStatus[index] ? "#4F97A3" : "#9FABC9"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="space-y-2 bg-white dark:bg-neutral-900">
      {/* Header */}

      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={newsProps}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

