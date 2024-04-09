import { StyleSheet, SafeAreaView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [searchInquiry, setSearchInquiry] = useState("");

  const handleSearch = (text) => {
    setSearchInquiry(text);
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchInquiry}
          placeholder="Search"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    marginHorizontal: 35,
    borderColor: "orange",
    borderWidth: 3,
  },
});
