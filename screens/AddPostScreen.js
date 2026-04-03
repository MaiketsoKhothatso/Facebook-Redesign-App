import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';

const MEDIA_ACTIONS = [
  { icon: 'image', color: '#42B883', label: 'Photo/Video' },
  { icon: 'people', color: '#1877F2', label: 'Tag People' },
  { icon: 'happy', color: '#FFA500', label: 'Feeling/Activity' },
  { icon: 'location', color: '#F02849', label: 'Check In' },
  { icon: 'camera', color: '#9B59B6', label: 'Camera' },
  { icon: 'mic', color: '#E74C3C', label: 'Audio' },
  { icon: 'gift', color: '#FF6B6B', label: 'Support Nonprofit' },
  { icon: 'calendar', color: '#3498DB', label: 'Life Event' },
];

export default function AddPostScreen() {
  const [postText, setPostText] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close" size={22} color="#1C1C1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <TouchableOpacity
          style={[styles.postButton, postText.length > 0 && styles.postButtonActive]}
          disabled={postText.length === 0}
        >
          <Text style={[styles.postButtonText, postText.length > 0 && styles.postButtonTextActive]}>
            Post
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userRow}>
          <Avatar uri="https://i.pravatar.cc/150?img=12" size={46} />
          <View style={styles.userMeta}>
            <Text style={styles.userName}>Your Name</Text>
            <TouchableOpacity style={styles.audienceSelector}>
              <Ionicons name="people" size={12} color="#1877F2" />
              <Text style={styles.audienceText}>Friends</Text>
              <Ionicons name="chevron-down" size={12} color="#1877F2" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Text Input */}
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="What's on your mind?"
          placeholderTextColor="#8E8E93"
          value={postText}
          onChangeText={setPostText}
          autoFocus
          textAlignVertical="top"
        />

        {/* Add to Your Post */}
        <View style={styles.addToPostSection}>
          <Text style={styles.addToPostTitle}>Add to your post</Text>
          <View style={styles.mediaGrid}>
            {MEDIA_ACTIONS.map((action, index) => (
              <TouchableOpacity key={index} style={styles.mediaItem} activeOpacity={0.7}>
                <View style={[styles.mediaIconBg, { backgroundColor: action.color + '15' }]}>
                  <Ionicons name={action.icon} size={26} color={action.color} />
                </View>
                <Text style={styles.mediaLabel}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  cancelButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  postButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
  },
  postButtonActive: {
    backgroundColor: '#1877F2',
  },
  postButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#8E8E93',
  },
  postButtonTextActive: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 10,
  },
  userMeta: {
    gap: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  audienceSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 4,
    alignSelf: 'flex-start',
  },
  audienceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1877F2',
  },
  textInput: {
    fontSize: 18,
    color: '#1C1C1E',
    minHeight: 120,
    lineHeight: 26,
    paddingTop: 0,
  },
  addToPostSection: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  addToPostTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 16,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  mediaItem: {
    width: '22%',
    alignItems: 'center',
    gap: 6,
  },
  mediaIconBg: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaLabel: {
    fontSize: 11,
    color: '#1C1C1E',
    textAlign: 'center',
    fontWeight: '500',
  },
});
