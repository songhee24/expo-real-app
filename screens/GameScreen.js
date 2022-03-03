import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Text } from "react-native-web";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View>
      <Text>Opponent,s Guess</Text>
      <NumberContainer />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
