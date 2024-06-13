import { View, Text, StyleSheet } from 'react-native'

function TotalNudge({subtext, total}){
    return (
        <View style={styles.container}>
                <Text style={[styles.text, styles.subtext]}>{subtext}</Text>
                <Text style={styles.text}>{total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#111",
        width: "100%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,

    },
    text: {
     color: "white",
     fontWeight: "bold",
     fontSize: 16
    },
    subtext: {
        fontSize: 14

    }
})

export default TotalNudge