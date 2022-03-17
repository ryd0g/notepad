import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import Home from "./components/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="plus"
                onPress={() => navigation.navigate("Editor")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
