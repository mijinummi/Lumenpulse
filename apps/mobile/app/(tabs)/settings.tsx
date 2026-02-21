import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useAuth } from '../../src/context/AuthContext';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/(tabs)'); // go back to Home tab
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.text}>App version: 1.0.0</Text>
        <Text style={styles.text}>
          Lumenpulse Mobile Contributor Edition
        </Text>

        {user && (
          <View style={{ marginTop: 32 }}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.6,
    marginBottom: 8,
  },
});