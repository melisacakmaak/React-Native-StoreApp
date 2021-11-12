import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCD2E4",
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bodyContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  desc: {
    fontStyle: "italic",
    marginVertical: 20,
    fontSize: 18,
  },
  price: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "right",
  },
});
export default styles;
