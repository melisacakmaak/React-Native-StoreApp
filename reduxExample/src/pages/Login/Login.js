import { Formik } from "formik";
import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { POST_URL } from "../../Config";
import usePost from "../../hooks/usePost/usePost";
import styles from "./Login.style";

const Login = ({ navigation }) => {
  const { data, loading, error, post } = usePost();
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    post(POST_URL + "/login", values);
  };

  if (data) {
    if (data.status === "Error") {
      Alert.alert("User not found!");
    } else {
      dispatch({ type: "SET_USER", payload: { user: data } });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          source={require("../../../lottie/shopping-bag.png")}
          style={styles.logo}
        />
        <Text style={styles.header_title}>Store</Text>
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter username.."
              value={values.username}
              onType={handleChange("username")}
              iconName="account-circle"
            />
            <Input
              placeholder="Enter your password.."
              value={values.password}
              onType={handleChange("password")}
              iconName="vpn-key"
              isSecure
            />
            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default Login;
