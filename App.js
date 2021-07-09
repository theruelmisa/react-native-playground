import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Box, Button } from "./src";

const App = () => {
	return (
		<View style={styles.appContainer}>
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
});

export default App;
