import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Detail.style";
import axios from "axios";
import { URL } from "../../Config";

export default function Detail({ route }) {
  const { id } = route.params;
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    const response = await axios.get(`${URL}/${id}`);
    setDataDetail(response.data);
  }

  // console.log(id)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: dataDetail.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{dataDetail.title}</Text>
        <Text style={styles.desc}> {dataDetail.description}</Text>
        <Text style={styles.price}>{dataDetail.price} $</Text>
      </View>
    </View>
  );
}
