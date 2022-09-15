import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Components/Header';

const viewName = 'Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={viewName}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#B5D3D3",
  },
});
