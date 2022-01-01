import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../../utils/Colors';	
import {sizes, spacing} from '../../utils/Sizes';	

const Timer = ({focus}) => {
    return (
        <View style={styles.container}>
           <View style={{paddingTop: spacing.xl}}>
           <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.task}>{focus}</Text>
           </View>
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
    }
})
