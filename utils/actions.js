import {Camera} from "expo-camera"
import * as ImagePicker from "expo-image-picker"
import {Alert} from "react-native"

export const saveIdea = (text, image, personId, addIdea, navigation) => {
	if (text && image) {
		addIdea(personId, text, image)
		navigation.navigate("IdeaScreen", {personId})
	} else {
		alert("Please provide both text and image.")
	}
}

export const takePicture = async setImage => {
	const {status} = await Camera.requestCameraPermissionsAsync()

	if (status === "granted") {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [2, 3],
			quality: 1
		})

		if (!result.canceled && result.assets[0].uri) {
			setImage(result.assets[0].uri)
		} else {
			alert("Image capturing was unsuccessful.")
		}
	} else {
		alert("Camera permission is required.")
	}
}

export const savePerson = (name, dob, addPerson, navigation) => {
	if (name && dob) {
		const [year, month, day] = dob.split("/")
		const formattedDob = `${year}-${month}-${day}`
		const date = new Date(formattedDob)

		if (!isNaN(date.getTime())) {
			addPerson(name, date.toISOString())
			navigation.navigate("PeopleScreen")
		} else {
			alert("Please select a valid date.")
		}
	} else {
		alert("Please fill all fields.")
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
