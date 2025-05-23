import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

type Props = {
    readonly title: string;
    readonly content: readonly string[];
};

export default function IceBreakerCard({ title, content }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {content.map((item) => (
                <Text key={item} style={styles.item}>
                    {item}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
        padding: 15,
        borderRadius: 10,
    },
    title: {
        color: colors.darkGreen,        
        fontSize: 18,
        marginBottom: 5,        
        fontWeight: "bold",
        textAlign: "center",
    },
    item: {
        color: colors.text,        
        fontSize: 16,
        marginBottom: 2,
        textAlign: "justify",
        flexWrap: "wrap",
    },
});
