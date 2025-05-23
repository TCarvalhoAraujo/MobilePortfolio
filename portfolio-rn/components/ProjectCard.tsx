import { Text, StyleSheet, Pressable, Linking } from "react-native";

type Props = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
};

export default function ProjectCard({ title, description, url }: Props) {
  return (
    <Pressable style={styles.card} onPress={() => Linking.openURL(url)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.link}>Tap to view on GitHub</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fce4ec",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: "#c2185b",
  },
});
