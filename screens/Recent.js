import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Expenses from "../components/Expenses";

function Recent() {
    const expenses = useSelector(
        state => state.expenses.expenses
    )

    const today = new Date()
    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 7)
    const filteredExpenses = expenses.filter(
        expense => new Date(expense.date) >= sevenDaysAgo && new Date(expense.date) <= today
    )
  
    return (
        <Expenses 
            data={filteredExpenses}
            totalSubtext={"Recent Expenses"}
        />
    );
}
export default Recent;