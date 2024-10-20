import Octicons from "@expo/vector-icons/Octicons"
import {GlobalContext} from "context/GlobalContext"
import React, {useContext, useEffect, useState} from "react"
import {Button, FlatList, Text, TouchableOpacity, View} from "react-native"
import {Swipeable} from "react-native-gesture-handler"
import {deletePeople} from "utils/actions"
import {styles} from "utils/styles"

export const PeopleScreen = ({navigation}) => {
	const {people, deletePerson} = useContext(GlobalContext)
	const [sortedPeople, setSortedPeople] = useState([])

	useEffect(() => {
		const sorted = [...people].sort((a, b) => new Date(a.dob) - new Date(b.dob))
		setSortedPeople(sorted)
	}, [people])

	const renderRightActions = id => (
		<Button
			title="Delete"
			onPress={() => deletePeople(deletePerson, id)}
			color="#FF6347"
		/>
	)

	return (
		<View style={styles.containerPeople}>
			{people.length === 0 ? (
				<Text style={styles.messagePeople}>
					No people added. Add a person to get started.
				</Text>
			) : (
				<FlatList
					data={sortedPeople}
					keyExtractor={item => item.id}
					renderItem={({item}) => (
						<Swipeable renderRightActions={() => renderRightActions(item.id)}>
							<View style={styles.containerPeople}>
								<TouchableOpacity
									style={styles.itemContainerPeople}
									onPress={() =>
										navigation.navigate("IdeaScreen", {personId: item.id})
									}>
									<Octicons name="feed-person" size={40} color="green" />
									<View style={styles.textContainerPeople}>
										<Text style={styles.namePeople}>{item.name} </Text>
										<Text style={styles.dobPeople}>
											{new Date(item.dob).toLocaleDateString(undefined, {
												year: "numeric",
												month: "long",
												day: "numeric"
											}) || "Invalid date"}
										</Text>
									</View>
									<Button
										title="View Ideas"
										color="green"
										onPress={() =>
											navigation.navigate("IdeaScreen", {personId: item.id})
										}
									/>
								</TouchableOpacity>
							</View>
						</Swipeable>
					)}
				/>
			)}
		</View>
	)
}
