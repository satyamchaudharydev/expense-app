import { StyleSheet, View, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import CustomButton from "./CustomButton";

function ManageForm({onSubmit, isEditing, initialValues = {amount: "", date: "", description: ""}}) {
    const [inputValues, setInputValues] = useState({
            amount: {
                value: initialValues.amount,
                isValid: true
            },
            date: {
                value: initialValues.date,
                isValid: true
            },
            description: {
                value: initialValues.description,
                isValid: true
            }
    })
    const handleChange = (name, value) => {
        setInputValues(prev => ({
            ...prev,
            [name]: {
                value,
                isValid: true
            }
        }))
    }
    const submitHandler = () => {
        const data  = {
            amount: +(inputValues['amount']).value,
            date: inputValues['date'].value,
            title: inputValues['description'].value
        }
        // some validation
        const amountIsValid = !isNaN(data.amount) && data.amount > 0
        const dataIsValid = new Date(data.date).toString() !== "Invalid Date"
        const descriptionIsValid = data.title.trim().length > 0
        if(!amountIsValid || !dataIsValid || !descriptionIsValid){
            //  Alert.alert("Invalid input", "Please enter valid data")
            setInputValues(prev => ({
                ...prev,
                amount: {
                    value: data.amount.toString(),
                    isValid: amountIsValid
                },
                date: {
                    value: data.date,
                    isValid: dataIsValid
                },
                description: {
                    value: data.title,
                    isValid: descriptionIsValid
                }
            }))
            return

        }               

        onSubmit(data)
    } 
    const formIsValid = Object.values(inputValues).every(input => input.isValid)
    console.log(formIsValid, "formIsValid")
    return (
        <>
            <View style={styles.container}>
                <Input label={"Amount"} inputConfig={{placeholder: "Enter amount", keyboardType: "number-pad", onChangeText: handleChange.bind(this, 'amount'), value: inputValues['amount'].value}} style={[styles.inputStyle, !inputValues['amount'].isValid && styles.inValidInput]} />
                <Input label={"Date"} inputConfig={{placeholder: "YYYY-MM-DD", onChangeText: handleChange.bind(this, 'date'), value: inputValues['date'].value}} style={[styles.inputStyle, !inputValues['date'].isValid && styles.inValidInput]}  />
                <Input label={"Description"} inputConfig={{placeholder: "description", multiline: true, onChangeText: handleChange.bind(this, 'description'), value: inputValues['description'].value} } style={[styles.inputStyle, styles.multilineInput, !inputValues['description'].isValid && styles.inValidInput]} />
            </View>        
            <View>
            {
                !formIsValid && <Text style={{color: "red", textAlign: "center"}}>Please enter valid data</Text>
            }
            <CustomButton onPress={submitHandler} variant="primary">
                <Text style={{color: "white"}}>Save</Text>
            </CustomButton>
        </View>
     </>

    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        // backgroundColor: "white",
        borderRadius: 10,
        
    },
    inputStyle: {
        padding: 10,
        marginVertical: 10,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 5
    },
    multilineInput: {
        minHeight: 100,
        verticalAlign: "top"
    },
    inValidInput: {
        borderColor: "red"
    }
})

export default ManageForm;