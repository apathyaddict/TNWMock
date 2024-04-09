import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import MyRecipesScreen from "./Screens/MyRecipesScreen";
import CookNowScreen from "./Screens/CookNowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyRecipes" component={MyRecipesScreen} />
        <Stack.Screen name="CookNow" component={CookNowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
