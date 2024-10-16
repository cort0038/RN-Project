import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
	//region AddIdea Styles
	viewAddIdea: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5"
	},
	containerAddIdea: {
		flex: 1
	},
	titleAddIdea: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#333"
	},
	inputAddIdea: {
		width: "100%",
		padding: 15,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		marginBottom: 20,
		backgroundColor: "#fff"
	},
	imageAddIdea: {
		width: 120,
		height: 180,
		marginBottom: 20,
		borderRadius: 8,
		resizeMode: "cover"
	},
	buttonAddIdea: {
		backgroundColor: "#007BFF",
		padding: 15,
		borderRadius: 8,
		width: "100%",
		alignItems: "center",
		marginBottom: 10
	},
	buttonTextAddIdea: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600"
	},
	//endregion

	//region People Styles
	containerPeople: {
		flex: 1,
		paddingHorizontal: 8,
		paddingVertical: 10
	},
	messagePeople: {
		textAlign: "center",
		fontSize: 18,
		marginVertical: 20,
		color: "#6c757d"
	},
	itemContainerPeople: {
		paddingHorizontal: 10,
		paddingVertical: 20,
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#FFFFFF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 3.84,
		elevation: 2,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	namePeople: {
		fontSize: 18,
		textAlign: "left",
		fontWeight: "bold",
		color: "#343a40",
		marginBottom: 5
	},
	dobPeople: {
		fontSize: 16,
		textAlign: "left",
		color: "#6c757d"
	},
	textContainerPeople: {
		flex: 1,
		marginHorizontal: 10
	},
	//endregion

	//region AddPerson Styles
	viewAddPerson: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5"
	},
	containerAddPerson: {
		flex: 1
	},
	labelAddPerson: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#333"
	},
	inputAddPerson: {
		height: 50,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		padding: 10,
		marginBottom: 20,
		backgroundColor: "#fff"
	},
	//endregion

	//region Ideas Styles
	containerIdea: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5"
	},
	titleIdea: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#333",
		textAlign: "center"
	},
	emptyTextIdea: {
		fontSize: 18,
		color: "#777",
		textAlign: "center",
		marginTop: 20
	},
	ideaContainerIdea: {
		marginBottom: 20,
		padding: 15,
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 10,
		backgroundColor: "#fff",
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 5
	},
	ideaTextIdea: {
		fontSize: 18,
		color: "#444",
		marginBottom: 10
	},
	imageIdea: {
		width: "100%",
		height: 150,
		borderRadius: 10,
		resizeMode: "cover",
		marginBottom: 10
	},
	deleteButtonIdea: {
		backgroundColor: "#FF6347",
		padding: 15,
		borderRadius: 8,
		alignItems: "center"
	},
	deleteButtonTextIdea: {
		color: "#fff",
		fontWeight: "bold"
	},
	modalContainerIdea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
		padding: 20
	},
	fullImageIdea: {
		width: "100%",
		height: "80%",
		resizeMode: "contain", // Maintain aspect ratio
		marginBottom: 20
	},
	closeButtonIdea: {
		backgroundColor: "#FF6347",
		padding: 10,
		borderRadius: 5
	},
	closeButtonTextIdea: {
		color: "#fff"
		// fontWeight: "bold", // Optional
	}
	//endregion
})
