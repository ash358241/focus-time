import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Focus from './src/features/focus/Focus';
import {colors} from './src/utils/Colors';
import Timer from './src/features/timer/Timer';
import {spacing} from './src/utils/Sizes';


export default function App() {
  const [focus, setFocus] = useState(null);
  return (
    <View style={styles.container}>
      {focus ? <Timer focus={focus}/> : <Focus addStatus={setFocus}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.darkBlue,
  },
});
