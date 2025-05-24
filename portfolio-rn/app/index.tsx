import { ScrollView, View, Text, Linking, Pressable, StyleSheet } from "react-native";
import ProfileCard from "../components/ProfileCard";
import InfoCard from "../components/InfoCard";
import IceBreakerCard from "../components/IceBreakerCard";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

export const options = {
  title: "Home",
};

export default function Home() {
  const profile = {
    picture: require("../assets/foto-perfil.jpeg"),
    name: "Thiago Carvalho de Araujo",
    about: "Software Engineer",
  };

  const info = [
    {
      title: "About Me",
      content:
        "Brazilian Computer Science student at UNICAP with a passion for DevOps. I enjoy working on personal projects and I'm always eager to apply what I learn in real-world scenarios.",
    },
  ];

  const iceBreakers = {
    title: "Ice Breakers",
    content: [
      "🍖 I love a good BBQ with family and friends!",
      "🎸 I'm obsessed with music and I love playing the guitar!",
      "👾 I'm a big Pokemon nerd and Gengar is the best one!",
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ProfileCard {...profile} />
      {info.map((item) => (
        <InfoCard key={item.title} title={item.title} content={item.content} />
      ))}
      <IceBreakerCard
        title={iceBreakers.title}
        content={iceBreakers.content}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Connect with me:</Text>
        <Pressable
          style={styles.linkRow}
          onPress={() => Linking.openURL("https://github.com/TCarvalhoAraujo")}
        >
          <FontAwesome name="github" size={20} color="#518C55" />
          <Text style={styles.link}> GitHub</Text>
        </Pressable>

        <Pressable
          style={styles.linkRow}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/thiago-araujo-5939a7313/")}
        >
          <FontAwesome name="linkedin" size={20} color="#518C55" />
          <Text style={styles.link}> LinkedIn</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20, 
    flexGrow: 1, 
    backgroundColor: colors.background
  },
  footer: {
    marginTop: 50,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: colors.darkGreen,
    marginBottom: 2,
    textDecorationLine: "underline",
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
  },
})