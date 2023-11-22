import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { Feather, Octicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Feather name="filter" size={25} />
          <Text style={styles.buttonText}>Filtrar por</Text>
        </View>
      </TouchableNativeFeedback>
      <SvgUri
        uri="https://hopelingerie.vtexassets.com/assets/vtex/assets-builder/hopelingerie.lingerie-hope-theme/8.0.36/svg/hope-logo___13a0145bcd1e8064c4835a98a56d8388.svg"
        width={100}
        height={25}
      />

      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Octicons name="sort-desc" size={25} />
          <Text style={styles.buttonText}>Ordenar por</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    paddingBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
  buttonText: {
    fontSize: 12,
  },
});

export default Header;
