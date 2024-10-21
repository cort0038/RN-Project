import DateTimePicker from "@react-native-community/datetimepicker"
import {GlobalContext} from "context/GlobalContext"
import React, {useContext, useState} from "react"
import {
	Button,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native"
import {savePerson} from "utils/actions"
import {styles} from "utils/styles"

export const AddPersonScreen = ({navigation}) => {
	const {addPerson} = useContext(GlobalContext)
	const [name, setName] = useState("")
	const [date, setDate] = useState(new Date())
	const [showCalendar, setShowCalendar] = useState(false)

	const onChange = (_event, selectedDate) => {
		const currentDate = selectedDate || date
		setDate(currentDate)
		if (Platform.OS === "android") {
			setShowCalendar(false)
		}
	}

	return (
		<KeyboardAvoidingView
			style={styles.containerAddPerson}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.viewAddPerson}>
					<Text style={styles.labelAddPerson}>Name:</Text>
					<TextInput
						style={styles.inputAddPerson}
						placeholder="Enter name"
						value={name}
						onChangeText={setName}
					/>

					<Text style={styles.labelAddPerson}>Date of Birth:</Text>
					<TextInput
						style={styles.inputAddPerson}
						value={new Date(date).toLocaleDateString(undefined, {
							year: "numeric",
							month: "long",
							day: "numeric"
						})}
						editable={false}
					/>

					<View style={styles.datePickerAddPerson}>
						<Button onPress={() => setShowCalendar(true)} title="Change" />
						{showCalendar && (
							<DateTimePicker
								testID="dateTimePicker"
								value={date}
								mode="date"
								is24Hour={true}
								onChange={onChange}
							/>
						)}
					</View>
				</View>
			</TouchableWithoutFeedback>

			<View style={styles.containerButtonAddPerson}>
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
		</KeyboardAvoidingView>
	)
}
