import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
  return <View style={style.Spacer}>{children}</View>;
};

const style = StyleSheet.create({
  Spacer: {
    margin: 15,
  },
});

export default Spacer;
