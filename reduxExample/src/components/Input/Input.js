import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({ placeholder, onType, value, iconName, isSecure }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} size={28} color="black" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};
export default Input;
