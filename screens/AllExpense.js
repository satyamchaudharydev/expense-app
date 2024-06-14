import { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import ExpenseItem from "../components/ExpenseItem";
import TotalNudge from "../components/TotalNudge";
import Expenses from "../components/Expenses";
import { fetchExpenses } from "../utils/api";
import { setExpenses } from "../slices/expenseSlice";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";
 

function CreateButton({onPress}){
    return <CustomButton onPress={onPress}>
                <Ionicons name="add" />
                <Text>Add</Text>
            </CustomButton>
}
function AllExpenses({navigation, router}){
    const [isLoading, setIsLoading] = useState(true);
    const [errorOverlay, setErrorOverlay] = useState(null)
    const expenses = useSelector(
        state => state.expenses.expenses
    )
    const dispatch = useDispatch()

    useEffect(() => {
     const getExpenses = async () => {
        setIsLoading(true)
        try {
            const expenses =  await fetchExpenses()
            dispatch(setExpenses(expenses))
        } catch (error) {
            setErrorOverlay("Error fetching expenses")

        }
        setIsLoading(false)

     }
        getExpenses()
    
    }, [])
    if(errorOverlay){
        return <ErrorOverlay />
    }
    if(isLoading){
        return <LoadingOverlay />
    }
    return (
        <Expenses 
            data={expenses}
            totalSubtext={"Total Expenses"}
        />
    );
}


export default AllExpenses;