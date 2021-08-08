import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const url =
  "https://assets.coingecko.com/coins/images/10366/small/SLP.png?1578640057";

export default function ListItem({ sampleData, pressHandler }) {
  //   console.log(sampleData);

  const priceColor =
    sampleData.price_change_percentage_7d_in_currency > 0 ? "green" : "red";
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source={{ uri: sampleData.image }} style={styles.tokenImage} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{sampleData.name}</Text>
            <Text style={styles.subTitle}>
              {sampleData.symbol.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${sampleData.current_price}</Text>
          <Text style={[styles.subTitle, { color: priceColor }]}>
            {sampleData.price_change_percentage_7d_in_currency.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  tokenImage: {
    height: 40,
    width: 40,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    marginTop: 2,
    fontSize: 13,
    color: "#A9ABB1", // default. overwritten by inline style array
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});
