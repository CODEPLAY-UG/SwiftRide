import { Redirect } from "expo-router";
import React from "react";

export default function RootIndex() {
  return <Redirect href="/screens/onBoarding" />;
}
