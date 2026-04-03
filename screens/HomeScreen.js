import React from 'react';
import { View, FlatList, ScrollView, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import StoryItem from '../components/StoryItem';
import PostCard from '../components/PostCard';
import Avatar from '../components/Avatar';

const STORIES = [
  { id: '0', isAddStory: true },
  { id: '1', name: 'Thabo', avatar: 'https://i.pravatar.cc/150?img=1', seen: false },
  { id: '2', name: 'Likopo', avatar: 'https://i.pravatar.cc/150?img=2', seen: false },
  { id: '3', name: 'Khotso', avatar: 'https://i.pravatar.cc/150?img=3', seen: true },
  { id: '4', name: 'Thabo', avatar: 'https://i.pravatar.cc/150?img=4', seen: false },
  { id: '5', name: 'Thato', avatar: 'https://i.pravatar.cc/150?img=5', seen: true },
  { id: '6', name: 'Refiloe', avatar: 'https://i.pravatar.cc/150?img=6', seen: false },
];

const POSTS = [
  {
    id: '1',
    userName: 'Thabo Monamane',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    timestamp: '2 hours ago',
    content: 'Just finished an amazing scam this morning! Hustling is truly the best reset for the mind',
    image: 'https://picsum.photos/seed/hike/600/400',
    likes: 128,
    comments: 24,
    liked: false,
    isOnline: true,
  },
  {
    id: '2',
    userName: 'Likopo Dooda',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    timestamp: '4 hours ago',
    content: 'Worked on a new project today. The future of mobile development is looking bleak, people cant code anymore',
    image: null,
    likes: 56,
    comments: 12,
    liked: true,
    isOnline: false,
  },
  {
    id: '3',
    userName: 'Khotso Lekoala',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    timestamp: 'Yesterday at 6:30 PM',
    content: 'Weekend vibes',
    image: 'https://picsum.photos/seed/sunset/600/400',
    likes: 342,
    comments: 47,
    liked: false,
    isOnline: true,
  },
  {
    id: '4',
    userName: 'Thabo Tlou',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    timestamp: 'Yesterday at 2:00 PM',
    content: "Coffee, code, and good vibes. That's all I need on a Monday morning.",
    image: 'https://picsum.photos/seed/coffee/600/400',
    likes: 89,
    comments: 15,
    liked: false,
    isOnline: false,
  },
  {
    id: '5',
    userName: 'Thato Chelane',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    timestamp: '2 days ago',
    content: 'Did you know that if you climb a mountain at night, you can see ghosts?',
    image: 'https://picsum.photos/seed/travel/600/400',
    likes: 215,
    comments: 38,
    liked: true,
    isOnline: true,
  },
];

function StoriesSection() {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScroll}
      >
        {STORIES.map((story) => (
          <StoryItem key={story.id} story={story} isAddStory={story.isAddStory} />
        ))}
      </ScrollView>
    </View>
  );
}

function CreatePostSection() {
  return (
    <View style={styles.createPostCard}>
      <View style={styles.createPostTop}>
        <Avatar uri="https://i.pravatar.cc/150?img=12" size={42} />
        <TouchableOpacity style={styles.createPostInput} activeOpacity={0.7}>
          <Text style={styles.createPostPlaceholder}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createPostDivider} />
      <View style={styles.createPostActions}>
        <TouchableOpacity style={styles.createPostAction} activeOpacity={0.7}>
          <Ionicons name="videocam" size={20} color="#F02849" />
          <Text style={styles.createPostActionLabel}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createPostAction} activeOpacity={0.7}>
          <Ionicons name="image" size={20} color="#42B883" />
          <Text style={styles.createPostActionLabel}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createPostAction} activeOpacity={0.7}>
          <Ionicons name="happy" size={20} color="#FFA500" />
          <Text style={styles.createPostActionLabel}>Feeling</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const feedData = [
    { id: 'stories', type: 'stories' },
    { id: 'create', type: 'create' },
    ...POSTS.map((p) => ({ ...p, type: 'post' })),
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'stories') return <StoriesSection />;
    if (item.type === 'create') return <CreatePostSection />;
    return <PostCard post={item} />;
  };

  return (
    <View style={styles.screen}>
      <Navbar />
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.feed}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F2F2F7',
  },
  feed: { flex: 1,
  },
  separator: { height: 0,
  },
  storiesContainer: { backgroundColor: '#ffffff', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F2F2F7',
  },
  storiesScroll: { paddingHorizontal: 16,
  },
  createPostCard: { backgroundColor: '#ffffff', marginBottom: 8,
  },
  createPostTop: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 10, gap: 10,
  },
  createPostInput: { flex: 1, height: 40, backgroundColor: '#F2F2F7', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 16,
  },
  createPostPlaceholder: { color: '#8E8E93', fontSize: 15,
  },
  createPostDivider: { height: 1, backgroundColor: '#F2F2F7', marginHorizontal: 16,
  },
  createPostActions: { flexDirection: 'row', paddingVertical: 6,
  },
  createPostAction: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, gap: 6,
  },
  createPostActionLabel: { fontSize: 13, fontWeight: '600', color: '#1C1C1E',
  },
});
