import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://lampungkode.id/wp-content/uploads/2021/08/react-native-logo.png",
        }}
      />
      <Text style={styles.txt}>Mari Kita Belajar React Native!</Text>
      <Button title="Click me" color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
});
