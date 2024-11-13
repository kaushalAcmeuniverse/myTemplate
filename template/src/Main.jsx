import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import StackNavigation from "./navigation/stackNavigation";

const Main = () => {
  const authToken = useSelector((state) => state.auth);
  return <StackNavigation />;
};

export default Main;
