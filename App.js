import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Navigation from "./src/navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Toast from 'react-native-toast-message';
import PinCodeScreen from './src/screens/Pincode/PinCodeScreen';
import PinCode from './src/screens/Pincode/PinCodeScreen';

const queryClient = new QueryClient();



export default function App() {
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </QueryClientProvider>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

