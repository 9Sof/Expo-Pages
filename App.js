import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"APP"}/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
