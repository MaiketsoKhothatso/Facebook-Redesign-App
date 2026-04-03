import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Avatar({ uri, size = 44, initials = 'U', showOnline = false }) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {uri ? (
        <Image
          source={{ uri }}
          style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <Text style={[styles.initials, { fontSize: size * 0.38 }]}>{initials}</Text>
        </View>
      )}
      {showOnline && <View style={styles.onlineDot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  placeholder: {
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: '#ffffff',
    fontWeight: '700',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#42B883',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});
