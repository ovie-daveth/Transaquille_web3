import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import tailwind from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

function CustomButton({ title, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const gradientColors = title === "Skip" ? ["#FFFF", "#FFFF"] : ["#027579", "#14AE5C"];

  const activeColors = title === "Skip" ? ["#FFFF", "#FFFF"] : ["#14AE5C", "#027579"];

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <LinearGradient
        colors={isPressed ? activeColors : gradientColors}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={tailwind`px-10 py-3 rounded-lg w-[100%] ${isPressed ? "shadow-sm":""} ${
          title === "Next" ? "" : "border-[0.7px] border-[#14AE5C]"
        }`}
      >
        <Text
          style={tailwind`text-lg text-center ${
            title === "Skip" ? "text-[#14AE5C]" : "text-white"
          }`}
        >
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}

export default CustomButton;
