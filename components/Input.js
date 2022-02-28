import {TextInput, StyleSheet} from "react-native";

const Input = (props) => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        borderLeftColor: 'grey',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        marginVertical: 10,
        borderRadius: 10,
    }
})

export default Input