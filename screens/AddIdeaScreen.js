import React, {useContext, useState} from "react"
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native"
import {saveIdea, takePicture} from "utils/actions"
import {styles} from "utils/styles"
import {GlobalContext} from "context/GlobalContext"

export const AddIdeaScreen = ({route, navigation}) => {
	const {personId} = route.params
	const {addIdea} = useContext(GlobalContext)
	const [text, setText] = useState("")
	const [image, setImage] = useState(null)

	return (
		<View style={styles.containerAddIdea}>
			<Text style={styles.titleAddIdea}>Add a Gift Idea</Text>
			<TextInput
				style={styles.inputAddIdea}
				placeholder="Gift Idea"
				value={text}
				onChangeText={setText}
			/>
			{image && <Image source={{uri: image}} style={styles.imageAddIdea} />}
			<TouchableOpacity
				style={styles.buttonAddIdea}
				onPress={() => takePicture(setImage)}>
				<Text style={styles.buttonTextAddIdea}>Take Picture</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonAddIdea}
				onPress={() => saveIdea(text, image, personId, addIdea, navigation)}>
				<Text style={styles.buttonTextAddIdea}>Save</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonAddIdea}
				onPress={() => navigation.navigate("IdeaScreen", {personId})}>
				<Text style={styles.buttonTextAddIdea}>Cancel</Text>
			</TouchableOpacity>
		</View>
	)
}
