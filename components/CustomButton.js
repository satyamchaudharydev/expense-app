import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";

function CustomButton ({
    children,
    onPress
}) {
    return (
        <>
        
            <Pressable
                onPress={onPress}
            >
                <View style={styles.button}>
                        {children}
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        gap: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 4
    }
})

export default CustomButton