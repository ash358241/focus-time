import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CountDown from '../../components/CountDown';
import { colors } from '../../utils/Colors';
import { fontSize, sizes, spacing } from '../../utils/Sizes';

const Timer = ({ focus }) => {
    const [isStarted, setIsStarted] = useState(false)
    console.log(isStarted)
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <CountDown isPaused={!isStarted} />
            </View>
            <View style={{ paddingTop: spacing.xl }}>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focus}</Text>
            </View>
            {
                isStarted ?
                    (
                        <TouchableOpacity style={styles.btn} onPress={() => setIsStarted(false)}>
                            <Text style={styles.textStyle}>Pause</Text>
                        </TouchableOpacity>
                    )
                    :
                    (
                        <TouchableOpacity style={styles.btn} onPress={() => setIsStarted(true)}>
                            <Text style={styles.textStyle}>Start</Text>
                        </TouchableOpacity>
                    )
            }


        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
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
    },
    textStyle: {
        color: colors.white,
        fontSize: fontSize.xl,
    }
})
