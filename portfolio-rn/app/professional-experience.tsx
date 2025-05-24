import { ScrollView, StyleSheet } from "react-native";
import ExperienceCard from "../components/ExperienceCard";
import colors from "../constants/colors";

export default function ProfessionalExperience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      institution: "FCxLabs",
      description: "Contributed to the development of financial microservices, working with a multidisciplinary team to design, implement, and test scalable backend solutions. Gained hands-on experience with microservice patterns, API integration, and continuous deployment workflows.",
      picture: require("../assets/fcxlabs-logo.jpg"),
      period: "2024 – 2025",
    },
    {
      title: "Process Analyst Intern",
      institution: "SIDI",
      description: "Focused on analyzing and optimizing agile software development processes, collaborating with cross-functional teams to improve workflow efficiency. Worked closely with product owners and developers to ensure alignment with agile best practices, documentation, and process improvement initiatives.",
      picture: require("../assets/sidi-logo.png"),
      period: "2025 – Present",
    },
  ];


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {experiences.map((exp) => (
        <ExperienceCard
          key={`${exp.title}-${exp.institution}`}
          title={exp.title}
          institution={exp.institution}
          description={exp.description}
          picture={exp.picture}
          period={exp.period}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: colors.background
  },
});
