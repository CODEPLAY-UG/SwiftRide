import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import getMapSearches from "@services/mapSearches";

interface LocationSuggestion {
  name: string;
  place_formatted: string;
  distance: number;
  // Add other properties as needed
}

const MapSearchBox = () => {
  const [text, setText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<LocationSuggestion[]>([]);
  const [locationSuggestions, setLocationSuggestions] = useState<
    LocationSuggestion[]
  >([]);

  const handleTextChange = async (input: string) => {
    setText(input);
    setIsTyping(input.length > 0);
    if (input.length > 0) {
      const locationSuggestions = await getMapSearches(input);
      setSearchResults(locationSuggestions);
      setLocationSuggestions(locationSuggestions);
    } else {
      setSearchResults([]);
      setLocationSuggestions([]);
    }
  };

  const handleSuggestionPress = (suggestion: LocationSuggestion) => {
    console.log(`Suggestion pressed: ${suggestion.name}`);
    // You can access other properties of the suggestion object here
    console.log(`Place formatted: ${suggestion.place_formatted}`);
    console.log(`Distance: ${suggestion.distance}`);
    // ...
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        placeholder="Search for a location"
        className="px-2 py-1 h-fit bg-[#f8f9fa] mx-2 border border-[#0d1b2a] rounded-md"
      />
      {isTyping && (
        <FlatList
          data={locationSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
              <View className="py-1 mx-2">
                <Text style={{ color: "#616161" }}>{item.name}</Text>
                <Text style={{ color: "#616161" }}>{item.place_formatted}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default MapSearchBox;
