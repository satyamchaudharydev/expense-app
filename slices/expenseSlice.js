import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [{
        id: 1,
        title: "Groceries",
        amount: 200,
        date: new Date(),

    }],
    totalExpenses: 200

}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload)
            state.totalExpenses += action.payload.amount
            
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

export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions

export default expenseSlice.reducer