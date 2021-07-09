import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Button = ({ children, title, backgroundColor }) => {
	const styles = StyleSheet.create({
		buttonContainer: {
			backgroundColor: backgroundColor,
			borderRadius: 8,
			marginBottom: 20,
			padding: 10,
			paddingLeft: 20,
			paddingRight: 20,
		},
	});

	return (
		<View style={styles.buttonContainer}>
			<Text>{children}</Text>
		</View>
	);
};

export default Button;
