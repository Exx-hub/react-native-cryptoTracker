import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

export const { width: SIZE } = Dimensions.get("window");

export default function Chart({
  name,
  image,
  symbol,
  currentPrice,
  priceChange,
  sparkline,
}) {
  const priceColor = priceChange > 0 ? "green" : "red";

  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      return `$${currentPrice}`;
    }

    return `$ ${value.toLocaleString("en-US", { currency: "USD" })}`;
  };
  return (
    <ChartPathProvider
      data={{ points: sparkline, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartContainer}>
        <View style={styles.titleWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeft}>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.subtitle}>
                {name} ({symbol.toUpperCase()})
              </Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>
          </View>

          <View style={styles.bottomTitles}>
            <ChartYLabel format={formatUSD} style={styles.title} />
            {/* <Text style={styles.title}>${currentPrice}</Text> */}
            <Text style={[styles.percent, { color: priceColor }]}>
              {priceChange.toFixed(2)}%
            </Text>
          </View>
        </View>

        <View>
          <ChartPath height={SIZE / 2} stroke="red" width={SIZE} />
          <ChartDot style={{ backgroundColor: "black" }} />
        </View>
      </View>
    </ChartPathProvider>
  );
}

const styles = StyleSheet.create({
  chartContainer: {},
  titleWrapper: {
    marginBottom: 25,
  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  upperLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 5,
  },
  bottomTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
  },
  percent: {
    fontSize: 20,
  },
});
