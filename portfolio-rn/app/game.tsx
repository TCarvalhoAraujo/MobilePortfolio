import { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

function generateSecret(): string {
    const digits: number[] = [];
    while (digits.length < 4) {
        const d = Math.floor(Math.random() * 10);
        if (!digits.includes(d)) digits.push(d);
    }
    return digits.join("");
}

function evaluateGuess(secret: string, guess: string): string {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) bulls++;
        else if (secret.includes(guess[i])) cows++;
    }

    return `${bulls} Bulls ●, ${cows} Cows ○`;
}

function showGameRules() {
    Alert.alert(
        "Game Rules",
        "🎯 Guess the 4-digit secret code.\n\n" +
        "• Digits must be unique (no repeats).\n" +
        "• Bulls (●): correct digit, correct position.\n" +
        "• Cows (○): correct digit, wrong position.\n" +
        "Keep guessing until you crack the code!"
    );
}

export default function Game() {
    const [secret, setSecret] = useState(generateSecret());
    const [guess, setGuess] = useState("");
    const [history, setHistory] = useState<string[]>([]);

    function handleGuess() {
        if (guess.length !== 4 || new Set(guess).size !== 4) {
            Alert.alert("Invalid guess", "Enter 4 unique digits");
            return;
        }

        const result = evaluateGuess(secret, guess);
        const entry = `${guess} → ${result}`;
        setHistory((prev) => [entry, ...prev]);
        setGuess("");

        if (guess === secret) {
            Alert.alert("Congratulations!", "You guessed it!");
        }
    }

    function handleGiveUp() {
        Alert.alert("You gave up!", `The secret was: ${secret}`, [
            {
                text: "Play Again",
                onPress: resetGame,
            },
        ]);
    }

    function resetGame() {
        setSecret(generateSecret());
        setGuess("");
        setHistory([]);
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Guess the 4-digit code!</Text>
                <Pressable onPress={showGameRules} style={styles.infoButton}>
                    <FontAwesome name="info-circle" size={24} color={colors.darkGreen} />
                </Pressable>
            </View>

            <TextInput
                value={guess}
                onChangeText={setGuess}
                placeholder="1234"
                keyboardType="number-pad"
                maxLength={4}
                style={styles.input}
            />

            <View style={styles.buttonGrid}>
                <View style={styles.buttonRow}>
                    <Pressable style={[styles.gridButton, styles.buttonNeutral]} onPress={() => Alert.alert("Secret", secret)}>
                        <Text style={styles.buttonText}>Reveal Secret</Text>
                    </Pressable>

                    <Pressable style={styles.gridButton} onPress={handleGuess}>
                        <Text style={styles.buttonText}>Submit Guess</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonRow}>
                    <Pressable style={[styles.gridButton, styles.buttonDanger]} onPress={handleGiveUp}>
                        <Text style={styles.buttonText}>Give Up</Text>
                    </Pressable>

                    <Pressable style={styles.gridButton} onPress={resetGame}>
                        <Text style={styles.buttonText}>Play Again</Text>
                    </Pressable>
                </View>
            </View>

            <FlatList
                data={history}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                contentContainerStyle={{ marginTop: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        position: "relative",
    },
    infoButton: {
        position: "absolute",
        right: 10,
        top: 0,
    },

    title: {
        color: colors.darkGreen,
        fontSize: 22,
        marginBottom: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        borderWidth: 2,
        borderColor: colors.darkGreen,
        backgroundColor: colors.cardBackground,
        padding: 12,
        fontSize: 18,
        marginBottom: 15,
        borderRadius: 8,
        color: colors.text,
    },
    buttonGrid: {
        marginTop: 15,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    gridButton: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingVertical: 12,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonDanger: {
        backgroundColor: colors.red,
    },
    buttonNeutral: {
        backgroundColor: colors.grey,
    },
    item: {
        fontSize: 16,
        paddingVertical: 4,
        color: colors.text,
    },
});
