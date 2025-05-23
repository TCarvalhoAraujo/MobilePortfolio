import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Thiago Araujo</Text>
      <Link href="/sobre">Ir para Sobre</Link>
    </View>
  );
}
