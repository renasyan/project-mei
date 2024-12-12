import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomePage = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-center p-8 py-28">
      <View className="flex h-full justify-between">
        <View className="flex gap-2">
          <View className="aspect-square w-full rounded-full py-3">
            <Image
              className="aspect-square h-full"
              source={require("@/assets/images/moms-holding-fruits.png")}
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
          {/* <TouchableOpacity
            onPress={() => {
              router.replace("/welcome");
            }}
          >
            <Text> Lewati </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {
              router.replace("/(tabs)/nutriWise");
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
