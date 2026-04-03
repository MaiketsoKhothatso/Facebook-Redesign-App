import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StoryItem({ story, isAddStory = false }) {
  if (isAddStory) {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <View style={styles.addStoryRing}>
          <View style={styles.addStoryImageWrapper}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              style={styles.storyImage}
            />
            <View style={styles.addIconBadge}>
              <Ionicons name="add" size={14} color="#fff" />
            </View>
          </View>
        </View>
        <Text style={styles.name} numberOfLines={1}>
          Add Story
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={[styles.ring, story.seen ? styles.seenRing : styles.unseenRing]}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: story.avatar }} style={styles.storyImage} />
        </View>
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {story.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12,
    width: 68,
  },
  ring: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unseenRing: {
    borderWidth: 2.5,
    borderColor: '#1877F2',
  },
  seenRing: {
    borderWidth: 2.5,
    borderColor: '#C8C8CC',
  },
  addStoryRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  imageWrapper: {
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  addStoryImageWrapper: {
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: 'hidden',
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addIconBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    marginTop: 5,
    fontSize: 11,
    color: '#1C1C1E',
    fontWeight: '500',
    textAlign: 'center',
    width: 68,
  },
});
