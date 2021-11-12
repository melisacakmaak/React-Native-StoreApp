import React, { useState, useEffect } from "react";
import { Button, FlatList, View } from "react-native";
import axios from "axios";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Loading from "../../../lottie/Loading/Loading";
import { URL } from "../../Config";
import { useDispatch } from "react-redux";

export default function Products({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await axios.get(URL);
    setData(response.data);
    setLoading(false);
  }

  function handleProductSelect(id) {
    navigation.navigate("DetailsPage", { id });
  }

  const renderStore = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      style={{ backgroundColor: "#503269" }}
      data={data}
      renderItem={renderStore}
    />
  );
}
