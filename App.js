import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

    <NavigationContainer>
      <Navigation />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

});
