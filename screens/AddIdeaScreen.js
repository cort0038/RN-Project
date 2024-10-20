import {GlobalContext} from "context/GlobalContext"
import {CameraView, useCameraPermissions} from "expo-camera"
import React, {useContext, useRef, useState} from "react"
import {
	Button,
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
import {flipCamera, saveIdea, takePicture} from "utils/actions"
import {styles} from "utils/styles"

export const AddIdeaScreen = ({route, navigation}) => {
	const {personId} = route.params
	const {addIdea} = useContext(GlobalContext)
	const [text, setText] = useState("")
	const [image, setImage] = useState(null)
	const [permission, requestPermission] = useCameraPermissions()

	const cameraRef = useRef(null)
	const [facing, setFacing] = useState("back")

	if (!permission) {
		return <View />
	}

	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title="Grant permission" />
			</View>
		)
	}

	return (
		<>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.containerAddIdea}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.viewAddIdea}>
						<Text style={styles.titleAddIdea}>Add a Gift Idea</Text>
						<TextInput
							style={styles.inputAddIdea}
							placeholder="Logitech Mouse..."
							value={text}
							onChangeText={setText}
						/>
						{image ? (
							<Image source={{uri: image}} style={styles.imageAddIdea} />
						) : (
							<View style={styles.cameraContainer}>
								<CameraView
									style={styles.camera}
									facing={facing}
									ref={cameraRef}>
									<View style={styles.buttonContainer}>
										<TouchableOpacity style={styles.button}>
											<Text
												style={styles.text}
												onPress={() => takePicture(cameraRef, setImage)}>
												Take Picture
											</Text>
										</TouchableOpacity>

										<TouchableOpacity style={styles.button}>
											<Text
												style={styles.text}
												onPress={() => flipCamera(facing, setFacing)}>
												Flip Camera
											</Text>
										</TouchableOpacity>
									</View>
								</CameraView>
							</View>
						)}
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
		</>
	)
}
