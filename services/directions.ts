const BASE_URL = "https://api.mapbox.com/directions/v5/mapbox";

export async function getDirections(source: any[], destination: any[]) {
  const response = await fetch(
    `${BASE_URL}/cycling/${source[0]},${source[1]};${destination[0]},${destination[1]}?alternatives=false&annotations=distance%2Cduration&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.EXPO_PUBLIC_MAPBOX_KEY}`
  );
  const json = await response.json();
  console.log(json);
  return json;
}
