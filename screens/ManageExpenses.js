import { useLayoutEffect, useState } from "react";
import {View, Text, StyleSheet} from "react-native";
import ManageForm from "../components/ManageForm";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../slices/expenseSlice";
import { storeExpense, updateExpenseData } from "../utils/api";
import LoadingOverlay from "../components/LoadingOverlay";

function ManageExpenses({route,navigation}){
    const [isLoading, setIsLoading] = useState(false)
    const id = route?.params?.id
    const isEditing = !!id

    const title = isEditing ? "Edit Expense" : "Create Expense"
    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenses.expenses)
    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }   , [navigation])

    const onSubmit = async (data) => {
        if(!isEditing){
            setIsLoading(true)
            const id = await storeExpense(data)
            setIsLoading(false)
           
            dispatch(addExpense({
                ...data,
                id
            
            }))
        }
        else{
            setIsLoading(true)
            await updateExpenseData(data, id)
            setIsLoading(false)
            dispatch(updateExpense({...data, id}))
        }
        navigation.goBack()
    }
    const initialValues = {
        amount: "",
        date: "",
        description: ""
    }
    if(isEditing){
        const expense = expenses.find(expense => expense.id === id)
        initialValues.amount = (expense?.amount)?.toString()
        initialValues.date = expense?.date
        initialValues.description = expense?.title
    }

    if(isLoading){
        return <LoadingOverlay  />
    }
    return (
        <View style={styles.container}>
            {/* <Text>{Add }</Text> */}
            <ManageForm onSubmit={onSubmit} isEditing={isEditing} initialValues={initialValues} />
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        flex: 1
    }
})

export default ManageExpenses;