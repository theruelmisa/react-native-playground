import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { Box, Button } from "./src";

const App = () => {
	const [username, setUsername] = useState("");

	const handleInputChange = (text) => {
		setUsername(text);
	};

	return (
		<View style={styles.appContainer}>
			<Box>
				<Text style={styles.label}>Username</Text>
				<TextInput
					style={styles.inputField}
					value={username}
					onChangeText={handleInputChange}
				></TextInput>
				<Text style={styles.userInput}>{username}</Text>
			</Box>
			<Box>
				<Button title="Login" backgroundColor="orange" borderColor="orange">
					Login
				</Button>
				<Button title="Create Account" backgroundColor="transparent">
					Create Account
				</Button>
			</Box>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#fafafa",
		flexDirection: "column",
	},

	label: {
		color: "#3c3c3c",
		fontSize: 12,
		fontWeight: "700",
		marginBottom: 10,
	},

	inputField: {
		backgroundColor: "#eee",
		color: "#3c3c3c",
		padding: 10,
		width: 200,
		fontSize: 16,
	},

	userInput: {
		fontSize: 30,
	},
});

export default App;
