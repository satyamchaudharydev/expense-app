import axios from "axios";

const URL = "https://finance-app-d1287-default-rtdb.firebaseio.com/";
export async function storeExpense(data){
    const response = await axios.post(URL + '/expenses.json', data)
    return response?.data?.name
}

export async function fetchExpenses(){
    const response = await axios.get(URL + '/expenses.json')
    console.log(response.data, "response")
    const expenses = []
    for (let key in response.data){
        expenses.push({
            id: key,
            ...response.data[key]
        })
    }
    return expenses
}

export const updateExpenseData = (data, id) => {
    console.log(id, data)
    return axios.put(URL + `/expenses/${id}.json`, data).catch(err => console.log(err))
    
}

export const deleteExpense = async (id) => {
    return axios.delete(URL + `/expenses/${id}.json`)
}