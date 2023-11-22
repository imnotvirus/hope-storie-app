import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Social from "./src/components/Social";
import Roupas from "./src/components/Roupas";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        style="dark"
        backgroundColor="transparent"
      />
      <Header />
      <Roupas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
