import { ActivityIndicator, StyleSheet, View } from "react-native"

const LoadingOverlay =  () => {
    return <>
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" /> 
        </View>
    </>
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})