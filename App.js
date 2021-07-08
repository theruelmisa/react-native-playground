import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
	return (
		<View style={styles.appContainer}>
			<View>
				<Text style={styles.title}>Hello Babingka!!</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#3c3c3c",
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		color: "#fafafa",
		fontSize: 50,
	},
});

export default App;
