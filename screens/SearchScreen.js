import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';

const SUGGESTIONS = [
  { id: '1', name: 'Alice Johnson', mutual: '12 mutual friends', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Bob Smith', mutual: '5 mutual friends', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Carol Williams', mutual: '8 mutual friends', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'David Lee', mutual: '3 mutual friends', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Emma Davis', mutual: '20 mutual friends', avatar: 'https://i.pravatar.cc/150?img=5' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Facebook"
            placeholderTextColor="#8E8E93"
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Ionicons name="close-circle" size={18} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={SUGGESTIONS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>People You May Know</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.personRow}>
            <Avatar uri={item.avatar} size={52} />
            <View style={styles.personInfo}>
              <Text style={styles.personName}>{item.name}</Text>
              <Text style={styles.personMutual}>{item.mutual}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="person-add" size={16} color="#1877F2" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    paddingTop: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  searchBarWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1C1C1E',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 1,
    gap: 12,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  personMutual: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 5,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1877F2',
  },
});
