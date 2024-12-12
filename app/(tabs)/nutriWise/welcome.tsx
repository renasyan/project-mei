import { Text, View } from "@/components/Themed";
import "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, StatusBar, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Dashboard() {
  return (
    <>
      <StatusBar backgroundColor="#FFEAF1" barStyle="dark-content" />
      <SafeAreaView className="bg-[#FFEAF1] flex-1 container p-6 py-10 gap-6">
        <View className="flex flex-row justify-between gap-3 items-center p-4">
          <View className="aspect-square w-12 rounded-full">
            <Image
              className="aspect-square h-10"
              source={require("@/assets/images/ava.png")}
            />
          </View>
          <View className="flex-1 flex-col text-white">
            <Text className="text-white font-semibold">Hello, Putri sari</Text>
            <Text className="text-white font-medium">
              18 Januari 2024 | kamis
            </Text>
          </View>
          <View>
            <Pressable className="bg-white rounded-xl">
              <Image
                className="aspect-square h-10"
                source={require("@/assets/images/alarm.png")}
              />
            </Pressable>
          </View>
        </View>
        <Link className="bg-white p-4 rounded-2xl py-6" href="/nutriWise">
          <View>
            <Text className="text-white font-semibold text-2xl">
              nutri wise
            </Text>
            <View className="flex flex-row">
              <Text>a</Text>
              <Text>a</Text>
              <Text>a</Text>
              <Text>a</Text>
            </View>
          </View>
        </Link>
      </SafeAreaView>
    </>
  );
}
