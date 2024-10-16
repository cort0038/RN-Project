import {GlobalContext} from "context/GlobalContext"

import React, {useContext, useState} from "react"
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native"
import DatePicker from "react-native-modern-datepicker"
import {savePerson} from "utils/actions"
import {styles} from "utils/styles"

export const AddPersonScreen = ({navigation}) => {
	const {addPerson} = useContext(GlobalContext)
	const [name, setName] = useState("")
	const [date, setDate] = useState("")

	return (
		<KeyboardAvoidingView
			style={styles.containerAddPerson}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.viewAddPerson}>
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
						onDateChange={setDate}
						style={styles.datePickerAddPerson}
					/>

					<TouchableOpacity
						style={styles.buttonAddIdea}
						onPress={() => savePerson(name, date, addPerson, navigation)}>
						<Text style={styles.buttonTextAddIdea}>Save</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.deleteButtonIdea}
						onPress={() => navigation.navigate("PeopleScreen")}>
						<Text style={styles.deleteButtonTextIdea}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}
