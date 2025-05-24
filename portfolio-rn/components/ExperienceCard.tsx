import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../constants/colors";

type Props = {
  readonly title: string;
  readonly institution: string;
  readonly description: string;
  readonly picture: any;
  readonly period: string;
};

export default function ExperienceCard({ title, institution, description, picture, period }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.institution}>{institution}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={picture} style={styles.image} />
      <Text style={styles.period}>{period}</Text>
    </View>
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
  institution: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    flexWrap: "wrap",
  },
  description: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "justify",
    flexWrap: "wrap",
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  period: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    color: colors.primary,
  },
});
