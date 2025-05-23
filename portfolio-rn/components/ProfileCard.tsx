import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";

type Props = {
  readonly picture: any;
  readonly name: string;
  readonly about: string;
};

export default function ProfileCard({ picture, name, about }: Props) {
  return (
    <View style={styles.card}>
      <Image source={picture} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.about}>{about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkGreen,
  },
  about: {
    fontSize: 16,
    color: colors.text,
  },
});
