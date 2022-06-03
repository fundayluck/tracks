import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 48 }}>Sign up </Text>
      <Button title="Signin" onPress={() => navigation.navigate("Signin")} />
      <Button
        title="go back to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
