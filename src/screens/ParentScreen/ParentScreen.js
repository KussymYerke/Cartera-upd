import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import { COLORS, SIZES } from "../../../constants";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { BottomTabBar } from "@react-navigation/bottom-tabs";


const SignInScreen = () => {
  const [parent, setParent] = useState("");

  const navigation = useNavigation();

  const onParentPressed = () => {
    navigation.navigate("Home");
  };

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={{flex:1, backgroundColor: COLORS.white}}>
      <View style={{padding: SIZES.large}}>
            <View className="pt-14 pb-8 flex-row items-center">
              <ArrowLeftIcon size={25} color="#569DA9" strokeWidth={2} onPress={goBack}/>
              <Text className="text-2xl font-semibold ml-10">Добавить родителя</Text>
            </View>
            <CustomInput
              placeholder ={"Введите почту"}
              value={parent}
              setValue={setParent}
            />
            <View style={{ width: "100%", marginTop: 125 }}>
              <CustomButton text={"Продолжить"} onPress={onParentPressed} />
            </View>
        </View>
      </ScrollView>
);
};

export default SignInScreen;
