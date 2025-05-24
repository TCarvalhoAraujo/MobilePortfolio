import { Text, StyleSheet, Pressable, Image, Linking } from "react-native";
import colors from "../constants/colors";

type Props = {
  readonly title: string;
  readonly description: string;
  readonly picture: any;  
  readonly url: string;
};

export default function ProjectCard({ title, description, url, picture }: Props) {
  return (
    <Pressable style={styles.card} onPress={() => Linking.openURL(url)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={picture} style={styles.image} />
      <Text style={styles.link}>Tap to view on GitHub</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: colors.darkGreen,
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  description: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    flexWrap: "wrap",
  },
  link: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
