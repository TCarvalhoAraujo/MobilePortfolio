import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";

export const options = {
    title: "Game - Bulls and Cows",
};

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
                onPress: () => {
                    setSecret(generateSecret());
                    setGuess("");
                    setHistory([]);
                },
            },
        ]);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Try to guess the 4-digit code</Text>

            <TextInput
                value={guess}
                onChangeText={setGuess}
                placeholder="1234"
                keyboardType="number-pad"
                maxLength={4}
                style={styles.input}
            />

            <Button title="Submit Guess" onPress={handleGuess} />

            <Button title="Reveal Secret" onPress={() => Alert.alert("Secret", secret)} color="#888" />

            <Button title="Give Up" onPress={handleGiveUp} color="#d32f2f" />

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
        flex: 1,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        borderRadius: 8,
    },
    item: {
        fontSize: 16,
        paddingVertical: 4,
    },
});
