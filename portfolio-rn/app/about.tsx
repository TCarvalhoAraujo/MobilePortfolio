import { ScrollView, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>

      <Text style={styles.title}>🎯 Goal</Text>
      <Text style={styles.description}>
        This mobile application was designed to present my personal and professional journey in a dynamic and interactive way. It serves as a digital portfolio, allowing visitors to explore my academic background, work experiences, technical projects, and personal interests — all within a mobile-optimized environment. The goal is to reflect not just my technical skills, but also my passion for continuous learning, innovation, and clean, user-friendly design.
      </Text>

      <Text style={styles.title}>🧰 Technologies Used</Text>
      <Text style={styles.description}>
        • <Text style={styles.bold}>React Native + Expo</Text>: For cross-platform mobile development with rapid iteration.{"\n"}
        • <Text style={styles.bold}>Expo Router</Text>: Simplified navigation between multiple screens using modern routing patterns.{"\n"}
        • <Text style={styles.bold}>TypeScript</Text>: Enabling strong typing, better code safety, and maintainability.{"\n"}
        • <Text style={styles.bold}>ScrollView & FlatList</Text>: For efficient and smooth rendering of scrollable and large lists.{"\n"}
        • <Text style={styles.bold}>Component-based architecture</Text>: Promoting reusability, scalability, and separation of concerns.{"\n"}
        • <Text style={styles.bold}>StyleSheet API</Text>: Implementing a consistent and performant UI without relying on heavy external libraries.
      </Text>

      <Text style={styles.title}>📁 Project Structure</Text>
      <Text style={styles.description}>
        The project is structured into modular folders:{"\n"}
        • <Text style={styles.bold}>/app</Text>: Contains all the main navigation screens, including Home, About, Academic Experience, Professional Experience, Projects, and Game.{"\n"}
        • <Text style={styles.bold}>/components</Text>: Includes reusable components like ProfileCard, InfoCard, ProjectCard, ExperienceCard, and specialized UI elements that ensure consistency across the app.{"\n"}
        • <Text style={styles.bold}>/assets</Text>: Hosts all images, logos, and media used throughout the app, optimized for mobile performance.{"\n"}
        • <Text style={styles.bold}>/constants</Text>: Centralizes app-wide configuration such as color palettes and themes for easier maintainability.
      </Text>

      <Text style={styles.title}>🚀 Best Practices Followed</Text>
      <Text style={styles.description}>
        • Strict typing using <Text style={styles.bold}>readonly</Text> props and explicit TypeScript definitions for safety and clarity.{"\n"}
        • Unique keys in list renderings to avoid re-rendering issues and ensure React’s reconciliation process works efficiently.{"\n"}
        • Clear separation of business logic and presentation layers, keeping components focused and maintainable.{"\n"}
        • Lightweight, minimalistic design adapted specifically for mobile to ensure excellent usability and visual consistency.{"\n"}
        • Modular folder and component organization, making the project scalable and easy to extend with new features.
      </Text>

      <Text style={styles.title}>🌟 Personal Touch</Text>
      <Text style={styles.description}>
        Beyond the code, this project reflects my personal passion for software development, continuous growth, and delivering clean, meaningful user experiences. Whether you’re exploring my academic projects, professional roles, or just playing the built-in Bulls and Cows game, this app represents my journey as a developer and my excitement for the road ahead.
      </Text>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: colors.background
  },
  title: {
    color: colors.darkerGreen,
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 15,
    textAlign: "justify",
    flexWrap: "wrap",
  },
  bold: {
    fontWeight: "bold",
    color: colors.darkGreen,
  },
});
