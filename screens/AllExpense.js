import { useLayoutEffect, useReducer } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import ExpenseItem from "../components/ExpenseItem";
import TotalNudge from "../components/TotalNudge";
import Expenses from "../components/Expenses";
 

function CreateButton({onPress}){
    return <CustomButton onPress={onPress}>
                <Ionicons name="add" />
                <Text>Add</Text>
            </CustomButton>
}
function AllExpenses({navigation, router}){
       
    const expenses = useSelector(
        state => state.expenses.expenses
    )
  
    return (
        <Expenses 
            data={expenses}
            totalSubtext={"Total Expenses"}
        />
    );
}


export default AllExpenses;