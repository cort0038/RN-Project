import React, {useContext, useState} from "react"
import {
	Button,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View
} from "react-native"
import DatePicker from "react-native-modern-datepicker"
import {savePerson} from "utils/actions"
import {styles} from "utils/styles"
import {GlobalContext} from "context/GlobalContext"

export const AddPersonScreen = ({navigation}) => {
	const {addPerson} = useContext(GlobalContext)
	const [name, setName] = useState("")
	const [dob, setDob] = useState("")

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.containerAddPerson}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={100}>
				<Text style={styles.labelAddPerson}>Name</Text>
				<TextInput
					style={styles.inputAddPerson}
					placeholder="Enter name"
					value={name}
					onChangeText={setName}
				/>
				<Text style={styles.labelAddPerson}>Date of Birth</Text>
				<DatePicker
					mode="calendar"
					onDateChange={setDob}
					style={styles.datePickerAddPerson}
				/>
				<View style={styles.buttonContainerAddPerson}>
					<Button
						title="Cancel"
						onPress={() => navigation.navigate("PeopleScreen")}
						color="#F44336"
					/>
					<Button
						title="Save"
						onPress={() => savePerson(name, dob, addPerson, navigation)}
						color="#4CAF50"
					/>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}
