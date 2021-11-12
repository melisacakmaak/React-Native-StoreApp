import { Dimensions, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: "#503269",
  },
  logo: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width * 0.9,
    resizeMode: "contain",
    alignSelf: "center",
  },
  logo_container: {
    flex: 1,
  },
  body_container: {
    flex: 1,
  },
  header_title: {
    fontSize: 70,
    fontWeight: "500",
    textAlign: "center",
    color: "#DCD2E4",
    margin: 10,
  },
});
export default styles;
