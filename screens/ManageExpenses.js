import { useLayoutEffect } from "react";
import {View, Text} from "react-native";

function ManageExpenses({route,navigation}){
    const id = route?.params?.id
    const isEditing = !!id

    const title = isEditing ? "Edit Expense" : "Create Expense"

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }   , [navigation])
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default ManageExpenses;