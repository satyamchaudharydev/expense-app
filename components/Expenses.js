import { View, FlatList } from 'react-native';
import TotalNudge from './TotalNudge';
import ExpenseItem from './ExpenseItem';

function Expenses ({data, totalSubtext}){
    
    const totalExpensesAmount = data.reduce((acc, item) => {
        return acc + item.amount
    } , 0)
    const renderExpense = (itemData) => {
        return <ExpenseItem {...itemData.item} />
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, padding: 16  }}>
      
            <TotalNudge
                total={totalExpensesAmount}
                subtext={totalSubtext}
            />
            <View style={{flex: 1, width: "100%"}}>
                <FlatList data={data || []} renderItem={renderExpense} keyExtractor={
                    (item) => item.id 
                } />
            </View>
        </View>
    );
}

export default Expenses;