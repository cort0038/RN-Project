import PeopleProvider from "context/GlobalContext"
import {StackNavigator} from "navigation/StackNavigator"

export default function App() {
	return (
		<PeopleProvider>
			<StackNavigator />
		</PeopleProvider>
	)
}
