import { ScrollView, StyleSheet } from "react-native";
import ExperienceCard from "../components/ExperienceCard";

export const options = {
  title: "Professional Experience",
};

export default function ProfessionalExperience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      institution: "FCxLabs",
      period: "2024 – 2025",
    },
    {
      title: "Process Analyst Intern",
      institution: "SIDI",
      period: "2025 – Present",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {experiences.map((exp) => (
        <ExperienceCard
          key={`${exp.title}-${exp.institution}`}
          title={exp.title}
          institution={exp.institution}
          period={exp.period}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
