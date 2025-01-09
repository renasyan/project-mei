import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { Slide } from "./slides";

interface ItemsProps {
  item: Slide;
}
const OnboardingItems: React.FC<ItemsProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  const titleWords = item.title.split(" ");

  return (
    <View className="px-0 gap-16" style={[{ width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
        className="px-6 object-contain"
      />
      <View className="gap-7">
        <Text style={styles.title} className="text-white px-6">
          {titleWords.map((word, index) => {
            if (
              index >= item.highlightIndexStart &&
              index <= item.highlightIndexEnd
            ) {
              return (
                <Text key={index} style={styles.highlighted}>
                  {word}{" "}
                </Text>
              );
            }
            return `${word} `;
          })}
        </Text>
        <Text style={styles.description} className="px-6">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItems;

const styles = StyleSheet.create({
  image: {
    // flex: 0.4,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: "#ffffff",
    textAlign: "left",
    wordWrap: "break-word",
  },
  highlighted: {
    fontWeight: "800",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#ffffff",
    textAlign: "left",
  },
});
