import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Focus from './src/features/focus/Focus';


export default function App() {
  const [focus, setFocus] = useState(null);
  return (
    <View style={styles.container}>
      {/* <Text>{focus}</Text> */}
      {focus ? <Text>That should be row</Text> : <Focus/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#252250',
  },
});
