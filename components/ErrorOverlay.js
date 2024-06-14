import { StyleSheet, View, Text } from "react-native";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>

    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create(({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        color: "red"

    }
}))