import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Focus from './src/features/focus/Focus';
import {colors} from './src/utils/Colors';


export default function App() {
  const [focus, setFocus] = useState(null);
  return (
    <View style={styles.container}>
      {focus ? <Text>{focus}</Text> : <Focus addStatus={setFocus}/>}
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: colors.darkBlue,
  },
});
