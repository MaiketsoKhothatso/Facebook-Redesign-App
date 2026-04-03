import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PostCard from '../components/PostCard';

const USER_POSTS = [
  {
    id: 'p1',
    userName: 'Khothatso Maiketso',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    timestamp: '3 days ago ',
    content: 'There is a new movie every year. Life is good',
    image: 'https://picsum.photos/seed/profile1/600/400',
    likes: 74,
    comments: 11,
    liked: false,
    isOnline: true,
  },
  {
    id: 'p2',
    userName: 'Khothatso Maiketso',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    timestamp: '1 week ago',
    content: 'Code, coffee, repeat',
    image: null,
    likes: 33,
    comments: 6,
    liked: true,
    isOnline: true,
  },
];

function ProfileHeader() {
  return (
    <View style={styles.profileHeader}>
      
      <Image
        source={{ uri: 'https://picsum.photos/seed/cover/800/300' }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />

      
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.profileAvatar}
        />
      </View>

      
      <View style={styles.userInfoBlock}>
        <Text style={styles.profileName}>Khothatso Maiketso</Text>
        <Text style={styles.profileBio}>Software Engineer · Loves novels & coffee ☕</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>248</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>56</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>

        
        <View style={styles.profileActions}>
          <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.8}>
            <Ionicons name="pencil" size={16} color="#1C1C1E" />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreActionButton} activeOpacity={0.8}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <FlatList
        data={USER_POSTS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<ProfileHeader />}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.feed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F2F2F7',
  },
  feed: { flex: 1,
  },
  profileHeader: { backgroundColor: '#ffffff', marginBottom: 8,
  },
  coverPhoto: { width: '100%', height: 200, backgroundColor: '#E8E8E8',
  },
  avatarContainer: { alignItems: 'center', marginTop: -50,
  },
  profileAvatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: '#ffffff', backgroundColor: '#E8E8E8',
  },
  userInfoBlock: { alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8,
  },
  profileName: { fontSize: 22, fontWeight: '800', color: '#1C1C1E', marginTop: 6,
  },
  profileBio: { fontSize: 14, color: '#8E8E93', marginTop: 4, textAlign: 'center', lineHeight: 20,
  },
  statsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16, backgroundColor: '#F2F2F7', borderRadius: 14, paddingVertical: 12, paddingHorizontal: 20, gap: 20,
  },
  stat: { alignItems: 'center',
  },
  statNumber: { fontSize: 18, fontWeight: '800', color: '#1877F2',
  },
  statLabel: { fontSize: 12, color: '#8E8E93', fontWeight: '500', marginTop: 2,
  },
  statDivider: { width: 1, height: 30, backgroundColor: '#E8E8E8',
  },
  profileActions: { flexDirection: 'row', marginTop: 14, gap: 10, width: '100%',
  },
  editProfileButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F2F7', paddingVertical: 10, borderRadius: 10, gap: 6,
  },
  editProfileText: { fontSize: 15, fontWeight: '700', color: '#1C1C1E',
  },
  moreActionButton: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#F2F2F7', justifyContent: 'center', alignItems: 'center',
  },
});
