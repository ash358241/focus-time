import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';


export default function App() {
  const [focus, setFocus] = useState(null);
  return (
    <View style={styles.container}>
      {/* <Text>{focus}</Text> */}
      {focus ? <Text>That should be row</Text> : <Text>That should be column</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
