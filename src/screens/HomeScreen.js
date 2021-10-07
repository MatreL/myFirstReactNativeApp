import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>Even's App</Text>
      <Button 
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo" 
        />
        <Button 
        title="go to list funcion"
        onPress={() => navigation.navigate("List")}
        />
        <Button 
        onPress={() => navigation.navigate("Image")}
        title="Go to image screen" 
        />
        <Button 
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter screen" 
        />
        <Button 
        onPress={() => navigation.navigate("Color")}
        title="Go to Color screen" 
        />
        <Button 
        onPress={() => navigation.navigate("Square")}
        title="Go to Square screen" 
        />
        <Button 
        onPress={() => navigation.navigate("Text")}
        title="Go to text demo" 
        />
        <Button 
        onPress={() => navigation.navigate("Box")}
        title="Go to Box demo" 
        />
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
