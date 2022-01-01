import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'

const Timing = ({onChangeTime}) => {
    return (
        <View style={styles.timingBtn}>
            <TouchableOpacity style={styles.button} onPress={() => {onChangeTime(10)}}><Text style={{fontSize: fontSize.lg, color: colors.white}}>10</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {onChangeTime(15)}}><Text style={{fontSize: fontSize.lg, color: colors.white}}>15</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {onChangeTime(20)}}><Text style={{fontSize: fontSize.lg, color: colors.white}}>20</Text></TouchableOpacity>
        </View>
    )
}

export default Timing

const styles = StyleSheet.create({
    timingBtn: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    button: {
        color: colors.white,
        borderColor: colors.white,
        borderWidth: 2,
        padding: spacing.xl,
        width: 100,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: spacing.xl
    },
})
