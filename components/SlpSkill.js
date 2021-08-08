import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function SlpSkill() {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.itemWrapper}>
          <View style={styles.leftWrapper}>
            <Image
              source={{
                uri: "https://assets.coingecko.com/coins/images/10366/small/SLP.png?1578640057",
              }}
              style={styles.tokenImage}
            />
            <View style={styles.titlesWrapper}>
              <Text style={styles.title}>Smooth Love Potion</Text>
              <Text style={styles.subTitle}>SLP</Text>
            </View>
          </View>

          <View style={styles.rightWrapper}>
            <Text style={styles.title}>$0.186415</Text>
            <Text style={[styles.subTitle, { color: "red" }]}>-9.1%</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.itemWrapper}>
          <View style={styles.leftWrapper}>
            <Image
              source={{
                uri: "https://assets.coingecko.com/coins/images/15334/small/cryptoblade.PNG?1620596874",
              }}
              style={styles.tokenImage}
            />
            <View style={styles.titlesWrapper}>
              <Text style={styles.title}>CryptoBlades (SKILL)</Text>
              <Text style={styles.subTitle}>SKILL</Text>
            </View>
          </View>

          <View style={styles.rightWrapper}>
            <Text style={styles.title}>$39.72</Text>
            <Text style={[styles.subTitle, { color: "red" }]}>-14.9%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
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
