import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: colors.primary, 
        drawerInactiveTintColor: colors.text,
        drawerStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: HomeIcon,
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: AboutIcon,
        }}
      />
      <Drawer.Screen
        name="academic-experience"
        options={{
          drawerLabel: "Academic Experience",
          title: "Academic Experience",
          drawerIcon: AcademicIcon,
        }}
      />
      <Drawer.Screen
        name="professional-experience"
        options={{
          drawerLabel: "Professional Experience",
          title: "Professional Experience",
          drawerIcon: ProfessionalIcon,
        }}
      />
      <Drawer.Screen
        name="projects"
        options={{
          drawerLabel: "Projects",
          title: "Projects",
          drawerIcon: ProjectsIcon,
        }}
      />
      <Drawer.Screen
        name="game"
        options={{
          drawerLabel: "Game",
          title: "Bulls and Cows",
          drawerIcon: GameIcon,
        }}
      />
    </Drawer>
  );
}

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="home" size={size} color={color} />
);
const AboutIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="info-circle" size={size} color={color} />
);
const AcademicIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="graduation-cap" size={size} color={color} />
);
const ProfessionalIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="briefcase" size={size} color={color} />
);
const ProjectsIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="code" size={size} color={color} />
);
const GameIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="gamepad" size={size} color={color} />
);