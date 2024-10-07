import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {StatusBar} from "expo-status-bar"
import {AddIdea} from "./pages/AddIdea"
import {AddPerson} from "./pages/AddPerson"
import {Idea} from "./pages/Idea"
import {People} from "./pages/People"
import {styles} from "./utils/styles"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="People" component={People} />
				<Stack.Screen name="Add Person" component={AddPerson} />
				<Stack.Screen name="Idea" component={Idea} />
				<Stack.Screen name="Add Idea" component={AddIdea} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
