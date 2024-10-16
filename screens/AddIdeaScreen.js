import {GlobalContext} from "context/GlobalContext"
import React, {useContext, useState} from "react"
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native"
import {saveIdea, takePicture} from "utils/actions"
import {styles} from "utils/styles"

export const AddIdeaScreen = ({route, navigation}) => {
	const {personId} = route.params
	const {addIdea} = useContext(GlobalContext)
	const [text, setText] = useState("")
	const [image, setImage] = useState(null)

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.containerAddIdea}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.viewAddIdea}>
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
						onPress={() =>
							saveIdea(text, image, personId, addIdea, navigation)
						}>
						<Text style={styles.buttonTextAddIdea}>Save</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.buttonAddIdea}
						onPress={() => navigation.navigate("IdeaScreen", {personId})}>
						<Text style={styles.buttonTextAddIdea}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}
