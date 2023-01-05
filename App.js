import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Stacks from './navigation/Stacks';
import Tabs from './navigation/Tabs';
import Root from './navigation/Root';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
};