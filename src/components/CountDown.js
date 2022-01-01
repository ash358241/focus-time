import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

const minsToMills = mins => mins * 1000 * 60

const CountDown = ({
    minutes = 20,
    isPaused,
}) => {
    const [millis, setMillis] = useState(minsToMills(minutes))

    const minute = Math.floor(millis / 1000 / 60) % 60
    const second = Math.floor(millis / 1000) % 60

    const formatTime = time => time < 10 ? `0${time}` : time
    return (
        <View>
            <Text style={styles.text}>{formatTime(minute)} : {formatTime(second)}</Text>
        </View>
    )
}

export default CountDown

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: fontSize.xxl,
        padding: spacing.xl,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    }
})
