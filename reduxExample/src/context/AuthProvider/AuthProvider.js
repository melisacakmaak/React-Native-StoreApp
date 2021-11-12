import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import React from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@USER").then((userSession) => {
      userSession && setUser(JSON.parse(userSession));
    });
    setAuthLoading(false);
  }, []);

  const store = createStore(reducers, { user, authLoading });
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
