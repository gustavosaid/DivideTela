import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'; // Importe a biblioteca

// --- Componente do Site da Esquerda ---
const AppEsquerda = () => (
  <WebView
    style={styles.painel}
    source={{ uri: 'https://' }} // Mude o site aqui
  />
);

// --- Componente do Site da Direita ---
const AppDireita = () => (
  <WebView
    style={styles.painel}
    source={{ uri: 'https://www.google.com' }} // Mude o site aqui
  />
);

// --- Componente Principal do App ---
// Renomeei para 'App'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* View da esquerda com flex: 1 */}
      <View style={styles.containerPainel}>
        <AppEsquerda />
      </View>
      
      {/* View da direita com flex: 1 */}
      <View style={styles.containerPainel}>
        <AppDireita />
      </View>
    </SafeAreaView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Divide lado a lado
  },
  containerPainel: {
    flex: 1, // Cada painel ocupa metade da tela (1 parte)
    borderWidth: 1,
    borderColor: 'black',
  },
  painel: {
    flex: 1, // O WebView ocupa todo o espaço do seu container
  },
});