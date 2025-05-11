import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderComTimer() {
  const [seconds, setSeconds] = useState(3600); // 1 hora em segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // Aqui você pode adicionar navegação ou alerta
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Questões</Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#2aacc0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timer: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 4,
  },
});
