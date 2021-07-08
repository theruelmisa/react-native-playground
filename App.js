import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
	return (
		<View style={styles.appContainer}>
			<View style={styles.header}>
				<Text style={styles.title}>Babingka</Text>
				<Text>Navigation</Text>
			</View>
			<View style={styles.mainContainer}>
				<Text> Main Content </Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#3c3c3c",
	},

	header: {
		flex: 1,
		backgroundColor: "orange",
		width: 400,
		paddingTop: 40,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	mainContainer: {
		flex: 11,
	},

	title: {
		color: "#fafafa",
		fontSize: 24,
	},
});

export default App;
