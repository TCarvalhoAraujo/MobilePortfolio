import { ScrollView, StyleSheet } from "react-native";
import ExperienceCard from "../components/ExperienceCard";

export const options = {
    title: "Academic Experience",
};

export default function AcademicExperience() {
    const experiences = [
        {
            title: "Bachelor's in Computer Science",
            institution: "Catholic University of Pernambuco (UNICAP)",
            period: "2023 – Present",
        },
        {
            title: "Microservices Project Pattern",
            institution: "Alura",
            period: "2024",
        },
        {
            title: "Python for Financial Markets",
            institution: "Trading com Dados",
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
