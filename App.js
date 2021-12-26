import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Block from './components/Block';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Left track */}
      <View style={styles.track}>
        <Block></Block>
      </View>

      {/* Middle track yay*/}
      <View style={styles.track}>
        <Block></Block>
      </View>

      {/* Right track */}
      <View style={styles.track}>
        <Block></Block>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
  },
  track: {
    backgroundColor: '#C0C0C0',
    height: '300%',
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    margin: 3,
  },
  block: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 200,
    backgroundColor: 'cyan',
    margin: 5,
  },
});
