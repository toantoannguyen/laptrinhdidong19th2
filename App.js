import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState("green"); // Màu nền mặc định

  // Danh sách màu
  const colors = ["green", "blue", "brown", "yellow", "red", "black"];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{bgColor.toUpperCase()}</Text>

      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => setBgColor(color)}
        >
          <Text style={styles.buttonText}>{color.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Style cho ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
