import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src";

const App = () => {
	return (
		<View style={styles.appContainer}>
			<Button>Login</Button>
			<Button>Create Account</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#fafafa",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
