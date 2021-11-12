import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <LottieView
      source={require("../9930-loading-ring-medium.json")}
      autoPlay
      loop
    />
  );
}
