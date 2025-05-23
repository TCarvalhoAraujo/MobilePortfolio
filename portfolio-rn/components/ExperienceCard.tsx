import { View, Text, StyleSheet } from "react-native";

type Props = {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
};

export default function ExperienceCard({ title, institution, period }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.institution}>{institution}</Text>
      <Text style={styles.period}>{period}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e3f2fd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  institution: {
    fontSize: 16,
    color: "#1976d2",
  },
  period: {
    fontSize: 14,
    color: "gray",
  },
});
