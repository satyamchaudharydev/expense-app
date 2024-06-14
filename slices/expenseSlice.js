import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [],
    totalExpenses: 200

}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = action.payload
        },
        addExpense: (state, action) => {

            state.expenses.push(action.payload)
            
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload)
        },
        updateExpense: (state, action) => {
            const index = state.expenses.findIndex(expense => expense.id === action.payload.id)
            state.expenses[index] = action.payload
        }
    }
})

export const { addExpense, removeExpense, updateExpense, setExpenses } = expenseSlice.actions

export default expenseSlice.reducer