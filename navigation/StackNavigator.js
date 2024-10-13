import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {Button} from "react-native"
import {AddIdeaScreen} from "screens/AddIdeaScreen"
import {AddPersonScreen} from "screens/AddPersonScreen"
import {IdeaScreen} from "screens/IdeaScreen"
import {PeopleScreen} from "screens/PeopleScreen"

const Stack = createStackNavigator()

export const StackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="PeopleScreen">
				<Stack.Screen
					name="PeopleScreen"
					component={PeopleScreen}
					options={({navigation}) => ({
						headerTitleAlign: "left",
						headerTitle: "People",
						headerTitleStyle: {
							fontSize: 20
						},
						headerRightContainerStyle: {
							right: 12
						},
						headerRight: () => (
							<Button
								onPress={() => navigation.navigate("AddPersonScreen")}
								title="Add Person"
							/>
						)
					})}
				/>

				<Stack.Screen
					name="AddPersonScreen"
					component={AddPersonScreen}
					options={{
						headerTitle: "Add Person",
						headerTitleStyle: {
							fontSize: 20
						},

						headerLeftContainerStyle: {
							left: 12
						}
					}}
				/>

				<Stack.Screen
					name="IdeaScreen"
					component={IdeaScreen}
					options={({route, navigation}) => {
						const {personId} = route.params
						return {
							headerTitle: "Ideas",
							headerTitleStyle: {
								fontSize: 20
							},
							headerLeftContainerStyle: {
								left: 12
							},
							headerRightContainerStyle: {
								right: 12
							},
							headerRight: () => (
								<Button
									title="Add Idea"
									onPress={() =>
										navigation.navigate("AddIdeaScreen", {personId})
									}
								/>
							)
						}
					}}
				/>

				<Stack.Screen
					name="AddIdeaScreen"
					component={AddIdeaScreen}
					options={() => ({
						headerTitle: "Add Idea",
						headerTitleStyle: {
							fontSize: 20
						},
						headerLeftContainerStyle: {
							left: 12
						}
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
