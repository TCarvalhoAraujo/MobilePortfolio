import { ScrollView, Text, StyleSheet } from "react-native";

export const options = {
  title: "About This App",
};

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.sectionTitle}>🎯 Goal</Text>
      <Text style={styles.paragraph}>
        Este aplicativo foi desenvolvido com o objetivo de apresentar de forma interativa o meu portfólio pessoal, destacando experiências profissionais, acadêmicas, projetos e interesses pessoais — tudo com foco mobile.
      </Text>

      <Text style={styles.sectionTitle}>🧰 Tecnologias Utilizadas</Text>
      <Text style={styles.paragraph}>
        • React Native + Expo{"\n"}
        • Expo Router para navegação entre telas{"\n"}
        • TypeScript{"\n"}
        • ScrollView e FlatList para exibir listas{"\n"}
        • Componentização com boas práticas de imutabilidade{"\n"}
        • Estilo com StyleSheet (sem bibliotecas externas de UI)
      </Text>

      <Text style={styles.sectionTitle}>📁 Estrutura</Text>
      <Text style={styles.paragraph}>
        O projeto está organizado com a pasta <Text style={styles.bold}>/app</Text> contendo as páginas do app (Home, Sobre, Projetos, etc.), e a pasta <Text style={styles.bold}>/components</Text> com os componentes reutilizáveis como ProfileCard, InfoCard, ProjectCard, etc.
      </Text>

      <Text style={styles.sectionTitle}>🚀 Boas Práticas</Text>
      <Text style={styles.paragraph}>
        • Props tipadas como <Text style={styles.bold}>readonly</Text>{"\n"}
        • Chaves únicas nas listas{"\n"}
        • Separação de responsabilidade entre lógica e apresentação{"\n"}
        • Estilo limpo e minimalista adaptado ao mobile
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
  },
});
