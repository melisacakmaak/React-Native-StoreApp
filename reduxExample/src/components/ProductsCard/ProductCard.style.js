import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#DCD2E4",
    borderWidth: 1,
    borderColor: "lightslategrey",
    margin: 2,
    borderRadius: 10,
    top: 5,
  },
  textCard: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
  },

  text: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  price: {
    marginLeft: 5,
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  content_container: {
    flexDirection: "row",
  },
});

export default styles;
