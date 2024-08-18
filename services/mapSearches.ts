const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
const SESSION_TOKEN = "031e6108-d2af-4d41-8916-666a4f002a55";
import axios from "axios";

const getMapSearches = async (input: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: input,
        access_token: `${process.env.EXPO_PUBLIC_MAPBOX_KEY}`,
        language: "en",
        limit: 10,
        country: "ug",
        session_token: "SESSION_TOKEN",
        proximity: "0.3163, 32.5825",
      },
    });

    return response.data.suggestions;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export default getMapSearches;
