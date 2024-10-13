import AsyncStorage from "@react-native-async-storage/async-storage"
import {randomUUID} from "expo-crypto"
import {createContext, useEffect, useState} from "react"

export const GlobalContext = createContext()

const PeopleProvider = ({children}) => {
	const [people, setPeople] = useState([])

	// Load people from AsyncStorage
	useEffect(() => {
		const loadPeople = async () => {
			try {
				const data = await AsyncStorage.getItem("people")
				if (data) setPeople(JSON.parse(data))
			} catch (error) {
				console.error("Error loading people:", error)
			}
		}
		loadPeople()
	}, [])

	// Save people to AsyncStorage
	const savePeople = async newPeople => {
		try {
			setPeople(newPeople)
			await AsyncStorage.setItem("people", JSON.stringify(newPeople))
		} catch (error) {
			console.error("Error saving people:", error)
		}
	}

	// Update array with new person
	const addPerson = (name, dob) => {
		const newPerson = {id: randomUUID(), name, dob, ideas: []}
		const updatedPeople = [...people, newPerson]
		savePeople(updatedPeople)
	}

	// Create a new idea
	const addIdea = (personId, ideaText, ideaImage, width, height) => {
		const updatedPeople = people.map(person => {
			if (person.id === personId) {
				const newIdea = {
					id: randomUUID(),
					text: ideaText,
					img: ideaImage,
					w: width,
					h: height
				}
				return {...person, ideas: [...person.ideas, newIdea]}
			}
			return person
		})
		savePeople(updatedPeople)
	}

	// Delete an idea
	const deleteIdea = (personId, ideaId) => {
		const updatedPeople = people.map(person => {
			if (person.id === personId) {
				return {
					...person,
					ideas: person.ideas.filter(idea => idea.id !== ideaId)
				}
			}
			return person
		})
		savePeople(updatedPeople)
	}

	// Delete a person
	const deletePerson = id => {
		const updatedPeople = people.filter(person => person.id !== id)
		savePeople(updatedPeople)
	}

	return (
		<GlobalContext.Provider
			value={{people, addPerson, addIdea, deleteIdea, deletePerson}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default PeopleProvider
