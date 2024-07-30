import Mapbox, { MapView } from "@rnmapbox/maps";

Mapbox.setAccessToken("process.env.EXPO_PUBLIC_MAPBOX_KEY");

export default function Map() {
  return <MapView className="h-[300px] w-[300px]" />;
}
