import { ScrollView, StyleSheet } from "react-native";
import ProjectCard from "../components/ProjectCard";
import colors from "../constants/colors";

export default function Projects() {
  const projects = [
    {
      title: "React Movie Ranking App",
      description: "Web app to rank movies and read reviews using React and Back4app.",
      image: require("../assets/cine-app.jpg"),
      url: "https://github.com/pedromota001/omdbAPI-frontend-pwm",
    },
    {
      title: "Windows Forms Client Manager",
      description: "Desktop app in C# to manage solar energy clients and generate reports.",
      image: require("../assets/cooelpe-picture.png"),
      url: "https://github.com/TCarvalhoAraujo/Cooelpe",
    },
    {
      title: "DNA Pattern Matcher",
      description: "Desktop GUI to search DNA patterns using Boyer-Moore algorithm.",
      image: require("../assets/dna-app.png"),
      url: "https://github.com/TCarvalhoAraujo/dna-app",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          picture={project.image}
          url={project.url}
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
