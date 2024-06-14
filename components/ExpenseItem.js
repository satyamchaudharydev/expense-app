import {View, Text, StyleSheet, Pressable} from "react-native"
import { convertDate } from "../utils/convertDate"
import { useNavigation } from "@react-navigation/native"

function ExpenseItem({title,amount, date,id}){
    const navigation = useNavigation()
    
    const editExpenseHandle = () => {
        navigation.navigate("ManageExpenses", {
            id
        })
    }
    return (
        <>
            <Pressable 
                android_ripple={{color: "#ddd"}} style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    styles.button
                ] }
            onPress={editExpenseHandle}
            >
                <View style={styles.item}>

                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{convertDate(date)}</Text>
                    </View>
                    <View>
                        <Text style={styles.amount}>${Number(amount).toFixed()}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
  
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        shadowColor: "black",
        borderRadius: 10,
        shadowOpacity: 0.16,
        shadowRadius: 4,
        overflow: "hidden",
        shadowOffset: { width: 0, height: 1 },
        width: "100%",
        padding: 16,
    },
    title:{
        fontWeight: "400",
        fontSize: 16,
    },
    button: {
        flex: 1,
        elevation: 1,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "white",

    }
})

export default ExpenseItem