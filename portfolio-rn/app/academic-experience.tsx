import { ScrollView, StyleSheet } from "react-native";
import ExperienceCard from "../components/ExperienceCard";
import colors from "../constants/colors";


export default function AcademicExperience() {
    const experiences = [
        {
            title: "Bachelor's in Computer Science",
            institution: "Catholic University of Pernambuco (UNICAP)",
            description: "Undergraduate program covering algorithms, data structures, software engineering, networks, databases, and artificial intelligence, with a strong focus on both theoretical and practical aspects of computing.",
            picture: require("../assets/unicap-logo.jpg"),
            period: "2023 – Present",
        },
        {
            title: "Microservices Project Pattern",
            institution: "Alura",
            description: "Completed a specialized online course focused on microservices architecture, exploring patterns such as API Gateway, Service Registry, Circuit Breaker, and strategies for deploying and managing scalable services.",
            picture: require("../assets/logo-alura.png"),
            period: "2024",
        },
        {
            title: "Python for Financial Markets",
            institution: "Trading com Dados",
            description: "In-depth course covering quantitative finance, market analysis, and algorithmic trading using Python, including topics like backtesting, portfolio optimization, and real-time data integration.",
            picture: require("../assets/stock-market-picture.jpg"),
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
