import { ScrollView, StyleSheet } from "react-native";
import ProjectCard from "../components/ProjectCard";

export const options = {
  title: "Projects",
};

export default function Projects() {
  const projects = [
    {
      title: "React Movie Ranking App",
      description: "Web app to rank movies using React and Back4app.",
      url: "https://github.com/pedromota001/omdbAPI-frontend-pwm",
    },
    {
      title: "Windows Forms Client Manager",
      description: "Desktop app to manage solar energy clients and reports.",
      url: "https://github.com/TCarvalhoAraujo/Cooelpe",
    },
    {
      title: "DNA Pattern Matcher",
      description: "Desktop GUI to search DNA patterns using Boyer-Moore.",
      url: "https://github.com/TCarvalhoAraujo/dna-app",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          url={project.url}
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
