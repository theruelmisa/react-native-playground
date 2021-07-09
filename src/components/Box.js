import React from "react";
import { StyleSheet, View } from "react-native";

const Box = ({ children }) => {
	const styles = StyleSheet.create({
		boxContainer: {
			flex: 1,
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	});

	return <View style={styles.boxContainer}>{children}</View>;
};

export default Box;
