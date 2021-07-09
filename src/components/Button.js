import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

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
		<TouchableHighlight
			onPress={() => {
				alert(`Pressed button`);
			}}
		>
			<View style={styles.buttonContainer}>
				<Text>{children}</Text>
			</View>
		</TouchableHighlight>
	);
};

export default Button;
