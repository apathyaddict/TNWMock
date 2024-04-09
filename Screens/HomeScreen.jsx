import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
const recipeData = require("../assets/Json/Recipes.json");

export default function HomeScreen() {
  const [searchInquiry, setSearchInquiry] = useState("");
  const [matchingRecipes, setMatchingRecipes] = useState([]);

  const handleSearch = (text) => {
    setSearchInquiry(text);
  };

  const getRecipes = () => {
    const lowerSearch = searchInquiry.toLowerCase();

    const filteredRecipes = recipeData.recipes.filter((recipe) => {
      const lowerRecipeName = recipe.recipe_name.toLowerCase();
      return lowerRecipeName.includes(lowerSearch);
    });

    setMatchingRecipes(filteredRecipes);
  };

  const renderItemRecipe = ({ item }) => (
    <View style={styles.recipeItem}>
      <Text>{item.recipe_name}</Text>
      <Text>Servings: {item.servings}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchInquiry}
          placeholder="Search"
        />
        <Pressable style={styles.searchButton} onPress={getRecipes}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </View>

      <View>
        <FlatList data={matchingRecipes} renderItem={renderItemRecipe} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "orange",
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "orange",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
