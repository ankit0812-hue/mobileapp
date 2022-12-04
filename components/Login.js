import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Banner from "../assets/banner.png";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={Banner} style={styles.img}>
          <View style={styles.container} />
          <Text style={styles.label}>Login</Text>
          <TextInput placeholder="Enter Email Address" style={styles.input} />
          <TextInput
            placeholder="Enter Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <Text style={styles.link}>Forgot Password ?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  link: {
    color: "white",
    marginStart: 190,
  },
  button: {
    width: 300,
    alignItems: "center",
    backgroundColor: "#7ebc2b",
    borderRadius: 5,
    marginTop: 40,
    padding: 10,
  },
});

export default Login;
