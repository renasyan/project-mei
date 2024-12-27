import { Link, router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { slides } from "@/components/Onboard/slides";
import React from "react";
import OnboardingItems from "@/components/Onboard/Items";

const WelcomePage = () => {
  console.log("welcome page");
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <View className="flex h-full justify-between">
        <View className="flex gap-2">
          <View className="aspect-square w-full rounded-full py-3">
            <Image
              className="aspect-square h-full"
              source={require("@/assets/images/onboarding/onbo1.png")}
            />
          </View>
          <Text className="font-semibold text-2xl">
            Solusi Nutrisi Terpecaya Untuk Anak!
          </Text>
          <Text className="text-sm">
            NutriWise memudahkan ibu hamil dan pengasuh dalam merencanakan
            makanan bergizi untuk anak.
          </Text>
        </View>
        <View className="flex-row flex justify-between">
          <TouchableOpacity
            onPress={() => {
              //   router.replace("/welcome");
            }}
          >
            <Text> Lewati </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.replace("../(tabs)/nutriWise");
            }}
            className="bg-darkPink aspect-square h-12 justify-center"
          >
            <Text className="text-center font-bold color-white"> - </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <View className="flex-1 items-center justify-between">
        <FlatList
          className="flex gap-2"
          data={slides}
          renderItem={({ item }) => <OnboardingItems item={item} />}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          //   onScroll={onScroll}
          //   scrollEventThrottle={32}
          //   onViewableItemsChanged={viewableItemsChanged}
          //   viewabilityConfig={viewConfig}
          //   ref={slidesRef}
          showsHorizontalScrollIndicator={false}
        />

        <View className="flex-row flex justify-between bg-white">
          <TouchableOpacity
            onPress={() => {
              //   router.replace("/welcome");
            }}
          >
            <Text> Lewati </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.replace("../(tabs)/nutriWise");
            }}
            className="bg-darkPink aspect-square h-12 justify-center"
          >
            <Text className="text-center font-bold color-white"> - </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
