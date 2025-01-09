import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const StartPage = () => {
  console.log("StartPage");
  return (
    <View>
      <Text>aaa</Text>
      <TouchableOpacity onPress={() => router.push("/(auth)/onboard")}>
        <Text>bbb</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartPage;
