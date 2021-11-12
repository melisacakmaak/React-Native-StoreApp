import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products/Products";
import Details from "./src/pages/Detail/Detail";
import Login from "./src/pages/Login/Login";
import { useSelector } from "react-redux";
import Loading from "./lottie/Loading/Loading";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function App() {
  const Stack = createNativeStackNavigator();
  const userSession = useSelector((s) => s.user);
  const isAuthLoading = useSelector((s) => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthLoading ? (
          <Loading />
        ) : !userSession ? (
          <Stack.Screen
            name={"LoginPage"}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name={"ProductsPage"}
              component={Products}
              options={{
                title: "Store",
                headerStyle: { backgroundColor: "#503269" },
                headerTitleStyle: { color: "#DCD2E4" },
                headerRight: () => (
                  <MaterialIcons
                    name="logout"
                    size={28}
                    color="#DCD2E4"
                    onPress={() => dispatch({ type: "REMOVE_USER" })}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"DetailsPage"}
              component={Details}
              options={{
                title: "Product Detail",
                headerStyle: { backgroundColor: "#503269" },
                headerTitleStyle: { color: "#DCD2E4" },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
