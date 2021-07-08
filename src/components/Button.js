import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Button = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<Text>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderColor: "red",
		borderWidth: 2,
		borderRadius: 8,
		marginBottom: 20,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
});

export default Button;
