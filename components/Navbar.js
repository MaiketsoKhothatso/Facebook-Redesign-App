import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Navbar({ title = 'facebook' }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 4 }]}>
      <Text style={styles.logo}>{title}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Ionicons name="search" size={20} color="#1C1C1E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Ionicons name="chatbubble-ellipses" size={20} color="#1C1C1E" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 10, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#F2F2F7', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4,
  },
  logo: { fontSize: 28, fontWeight: '900', color: '#1877F2', letterSpacing: -1,
  },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 8,
  },
  iconButton: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#F2F2F7', justifyContent: 'center', alignItems: 'center', position: 'relative',
  },
  badge: { position: 'absolute', top: -2, right: -2, width: 16, height: 16, borderRadius: 8, backgroundColor: '#F02849', justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#fff',
  },
  badgeText: { fontSize: 9, color: '#fff', fontWeight: '800',
  },
});
