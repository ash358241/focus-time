import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

const minsToMills = mins => mins * 1000 * 60

const CountDown = ({
    minutes = 0.1,
    isPaused,
    onProgress
}) => {
    const [millis, setMillis] = useState(null)

    const minute = Math.floor(millis / 1000 / 60) % 60
    const second = Math.floor(millis / 1000) % 60

    const formatTime = time => time < 10 ? `0${time}` : time

    const interval = React.useRef(null)

    const countDown = () => {
        setMillis(time => {
            if(time === 0){
                //do more stuffs here
                return time;
            }
            const timeLeft = time - 1000 
            // report the progress
            onProgress(timeLeft / minsToMills(minutes))
            return timeLeft;
        })
    }

    useEffect(() => {
        setMillis(minsToMills(minutes))
    }, [minutes])
    
    useEffect(() => {
        if(isPaused){
            if(interval.current){
                clearInterval(interval.current)
            }
            return;
        }
        interval.current = setInterval(countDown, 1000)
        return () => clearInterval(interval.current)
    }, [isPaused])
    return (
        <View>
            <Text style={styles.text}>{formatTime(minute)} : {formatTime(second)}</Text>
        </View>
    )
}

export default CountDown

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: fontSize.xxl,
        padding: spacing.xl,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    },
    
})
