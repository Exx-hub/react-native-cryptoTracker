import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import ListItem from "./components/ListItem";
import { Touchable } from "react-native";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { SAMPLE_DATA } from "./data/sampleData";
import Chart from "./components/Chart";
import { getMarketData } from "./services/cryptoService";
import SlpSkill from "./components/SlpSkill";

// const ListHeader = () => {
//   return (
//     <>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.largeTitle}>Markets</Text>
//       </View>
//       <View style={styles.divider} />
//     </>
//   );
// };

// this is for is you want the header to also scroll. you can also use SafeAreaView with this.***

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };

    fetchMarketData();
  }, []);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%"], []);

  const openModal = (item) => {
    setSelectedCoin(item);
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <StatusBar translucent />
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider} />
        {/* <SlpSkill /> */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <ListItem sampleData={item} pressHandler={() => openModal(item)} />
          )}
          // ListHeaderComponent={<ListHeader />}
        />
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View style={styles.contentContainer}>
          {selectedCoin && (
            <Chart
              name={selectedCoin.name}
              image={selectedCoin.image}
              symbol={selectedCoin.symbol}
              currentPrice={selectedCoin.current_price}
              priceChange={selectedCoin.price_change_percentage_7d_in_currency}
              sparkline={selectedCoin.sparkline_in_7d.price}
            />
          )}
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 14,
    marginTop: 12,
  },
  bottomSheet: {
    borderColor: "#d6d6d6",
    borderWidth: 1,
  },
});

// gotta research more on shadows for android
