import {Alert} from "react-native"

export const saveIdea = (text, image, personId, addIdea, navigation) => {
	if (text && image) {
		addIdea(personId, text, image)
		navigation.navigate("IdeaScreen", {personId})
	} else if (!text && image) {
		alert("Please provide a name for your idea.")
	} else if (text && !image) {
		alert("Please take a picture of your idea.")
	} else {
		alert("Please provide a name for your idea and take a picture.")
	}
}

export const takePicture = async (cameraRef, setImage) => {
	if (cameraRef.current) {
		let result = await cameraRef.current.takePictureAsync()
		setImage(result.uri)
	}
}

export const flipCamera = (facing, setFacing) => {
	if (facing === "back") {
		setFacing("front")
	} else {
		setFacing("back")
	}
}

export const savePerson = (name, date, addPerson, navigation) => {
	if (name && date) {
		if (!isNaN(date.getTime())) {
			addPerson(name, date.toISOString())
			navigation.navigate("PeopleScreen")
		} else {
			alert("Please select a valid date.")
		}
	} else if (!name && date) {
		alert("Please provide a name for the person.")
	} else if (name && !date) {
		alert("Please select a date of birth.")
	}
}

export const deletePeople = (deletePerson, id) => {
	Alert.alert(
		"Confirm Delete",
		"Are you sure you want to delete this person?",
		[
			{
				text: "Cancel",
				style: "cancel"
			},
			{
				text: "Delete",
				onPress: () => deletePerson(id),
				style: "destructive"
			}
		],
		{cancelable: true}
	)
}

export const deleteIdeas = (id, personId, deleteIdea, person) => {
	Alert.alert(
		"Confirm Delete",
		"Are you sure you want to delete this idea?",
		[
			{
				text: "Cancel",
				style: "cancel"
			},
			{
				text: "Delete",
				onPress: () => {
					const exists = person.ideas.some(idea => idea.id === id)
					if (exists) {
						deleteIdea(personId, id)
					} else {
						alert("Idea not found.")
					}
				},
				style: "destructive"
			}
		],
		{cancelable: true}
	)
}
