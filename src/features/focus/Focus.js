import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-paper'
import RoundedButton from '../../components/RoundedButton'

const Focus = ({addStatus}) => {
    const [tmpData, setTmpData] = useState(null)
    console.log(tmpData)
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>What would you like to focus on?</Text>
            <View style={styles.textInput}>
            <TextInput style={{flex: 1, marginRight: 20}}
                onSubmitEditing={({nativeEvent}) => {
                    setTmpData(nativeEvent.text)
                }}
            />
            {/* <RoundedButton title="+" size={50} onPress={() => addStatus(tmpData)}/> */}
            <TouchableOpacity style={styles.btn} title="add" onPress={() => addStatus(tmpData)}><Text style={styles.btnContent}>+</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default Focus

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titleContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        borderColor: '#fff',
        borderWidth: 2,
        width: '60px',
        height: '60px',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContent: {
        color: '#fff',
        fontSize: 24,
        alignSelf: 'center',

    }
})
