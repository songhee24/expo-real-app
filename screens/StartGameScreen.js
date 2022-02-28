import {View, Text, TextInput, StyleSheet, Button, Keyboard, Alert} from "react-native";
import Card from '../components/Card'
import Colors from "../constants/colors";
import Input from "../components/Input";
import {useState} from "react";
import {TouchableWithoutFeedback} from "react-native-web";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', "Number has to be a number between 1 and 99", [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }])
            return
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>
    }

    return (<TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} keyboardType="number-pad" maxLength={2}
                           onChangeText={numberInputHandler} value={enteredValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button onPress={confirmInputHandler} title="Confirm"
                                                            color={Colors.primary}/></View>
                        <View style={styles.button}><Button onPress={resetInputHandler} title="Reset"
                                                            color={Colors.accent}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 10, alignItems: "center",
    }, title: {
        fontSize: 20, marginVertical: 10,
    }, inputContainer: {
        width: 300, height: 200, maxWidth: '80%', alignItems: "center",
    }, buttonContainer: {
        flexDirection: "row", width: '100%', justifyContent: 'space-between', paddingHorizontal: 15,
    }, button: {
        width: 100,
    }, input: {
        width: 50, textAlign: 'center',
    }
})

export default StartGameScreen