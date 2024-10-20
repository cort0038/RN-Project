import {GlobalContext} from "context/GlobalContext"
import React, {useContext, useState} from "react"
import {
	FlatList,
	Image,
	KeyboardAvoidingView,
	Modal,
	Platform,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native"
import {deleteIdeas} from "utils/actions"
import {styles} from "utils/styles"

export const IdeaScreen = ({route}) => {
	const {personId} = route.params
	const {people, deleteIdea} = useContext(GlobalContext)
	const person = people.find(p => p.id === personId)

	const [modalVisible, setModalVisible] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	const renderIdeaItem = ({item}) => (
		<View style={styles.ideaContainerIdea}>
			<Text style={styles.ideaTextIdea}>{item.text}</Text>
			{item.img && (
				<TouchableOpacity onPress={() => handleImagePress(item.img)}>
					<Image source={{uri: item.img}} style={styles.imageIdea} />
				</TouchableOpacity>
			)}
			<TouchableOpacity
				style={styles.deleteButtonIdea}
				onPress={() => deleteIdeas(item.id, personId, deleteIdea, person)}>
				<Text style={styles.deleteButtonTextIdea}>Delete</Text>
			</TouchableOpacity>
		</View>
	)

	const handleImagePress = imgUri => {
		setSelectedImage(imgUri)
		setModalVisible(true)
	}

	return (
		<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
			<KeyboardAvoidingView
				style={styles.containerIdea}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={100}>
				<Text style={styles.titleIdea}>Gift Ideas for {person.name}</Text>
				{person.ideas.length === 0 ? (
					<Text style={styles.emptyTextIdea}>No ideas added yet.</Text>
				) : (
					<FlatList
						data={person.ideas}
						keyExtractor={item => item.id}
						renderItem={renderIdeaItem}
					/>
				)}
				{/* Modal for Full Image View */}
				<Modal
					visible={modalVisible}
					animationType="slide"
					onRequestClose={() => setModalVisible(false)}>
					<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
						<View style={styles.modalContainerIdea}>
							<Image
								source={{uri: selectedImage}}
								style={styles.fullImageIdea}
							/>
							<TouchableOpacity
								style={styles.closeButtonIdea}
								onPress={() => setModalVisible(false)}>
								<Text style={styles.closeButtonTextIdea}>Close</Text>
							</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}
