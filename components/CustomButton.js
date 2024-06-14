import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";

function CustomButton ({
    children,
    onPress,
    variant = "default"
}) {
    return (
        <>
        
            <Pressable
                onPress={onPress}
            >
                <View style={[styles.button, styles[variant]]}>
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
    },

    primary: {
        backgroundColor: "black",
        borderRadius: 5,
        padding: 10
    },
    
})

export default CustomButton