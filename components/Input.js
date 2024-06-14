import { TextInput, Text, View, StyleSheet } from "react-native";

function Input({label, style, inputConfig, inputStyle = {}}){
    return (
        <View style={style}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                {...inputConfig}
                // style={{...inputStyle}}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    
        labelStyle: {
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 5
        },
        
})
export default Input;