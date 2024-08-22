const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
const SESSION_TOKEN = "031e6108-d2af-4d41-8916-666a4f002a55";
import axios from "axios";

const getMapSearches = async (input: string) => {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?country=ug&fuzzyMatch=true&routing=true&bbox=-180%2C-90%2C180%2C90&language=en&autocomplete=true&access_token=${process.env.EXPO_PUBLIC_MAPBOX_KEY}`
    );

    return response.data.features;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export default getMapSearches;
