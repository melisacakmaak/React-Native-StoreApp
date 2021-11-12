import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product, onSelect }) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={{
            minHeight: 100,
            minWidth: 100,
            resizeMode: "cover",
            borderRadius: 25,
          }}
        />
        <View style={styles.textCard}>
          <Text style={styles.title}> {product.title}</Text>
          <View style={styles.content_container}>
            <View style={styles.text}>
              <Text style={styles.price}> {product.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default ProductCard;
