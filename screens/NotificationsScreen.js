import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';

const NOTIFICATIONS = [
  {
    id: '1',
    avatar: 'https://i.pravatar.cc/150?img=1',
    name: 'Thabo Monamane',
    action: 'liked your post.',
    time: '2m ago',
    read: false,
    icon: 'thumbs-up',
    iconColor: '#1877F2',
  },
  {
    id: '2',
    avatar: 'https://i.pravatar.cc/150?img=2',
    name: 'Likopo Dooda',
    action: 'commented on your photo.',
    time: '15m ago',
    read: false,
    icon: 'chatbubble',
    iconColor: '#42B883',
  },
  {
    id: '3',
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Khotso Lekoala',
    action: 'sent you a friend request.',
    time: '1h ago',
    read: false,
    icon: 'person-add',
    iconColor: '#1877F2',
  },
  {
    id: '4',
    avatar: 'https://i.pravatar.cc/150?img=4',
    name: 'Thabo Tlou',
    action: 'shared your post.',
    time: '3h ago',
    read: true,
    icon: 'arrow-redo',
    iconColor: '#8E8E93',
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/150?img=5',
    name: 'Thato Chelane',
    action: 'tagged you in a photo.',
    time: '5h ago',
    read: true,
    icon: 'pricetag',
    iconColor: '#FFA500',
  },
  {
    id: '6',
    avatar: 'https://i.pravatar.cc/150?img=6',
    name: 'Refiloe Naleli',
    action: 'reacted to your comment.',
    time: 'Yesterday',
    read: true,
    icon: 'heart',
    iconColor: '#F02849',
  },
];

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="#1877F2" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.sectionLabel}>New</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.notifRow, !item.read && styles.unreadRow]}
            activeOpacity={0.7}
          >
            <View style={styles.avatarWrapper}>
              <Avatar uri={item.avatar} size={52} />
              <View style={[styles.actionIcon, { backgroundColor: item.iconColor }]}>
                <Ionicons name={item.icon} size={13} color="#fff" />
              </View>
            </View>
            <View style={styles.notifContent}>
              <Text style={styles.notifText}>
                <Text style={styles.notifName}>{item.name} </Text>
                {item.action}
              </Text>
              <Text style={[styles.notifTime, !item.read && styles.unreadTime]}>{item.time}</Text>
            </View>
            {!item.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F2F2F7',
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 10, paddingTop: 8, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#F2F2F7',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  filterButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E8F0FE', justifyContent: 'center', alignItems: 'center',
  },
  sectionLabel: { fontSize: 18, fontWeight: '700', color: '#1C1C1E', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 6,
  },
  notifRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, marginBottom: 1, gap: 12,
  },
  unreadRow: { backgroundColor: '#EEF3FE',
  },
  avatarWrapper: { position: 'relative',
  },
  actionIcon: { position: 'absolute', bottom: -2, right: -2, width: 22, height: 22, borderRadius: 11, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#fff',
  },
  notifContent: { flex: 1,
  },
  notifText: { fontSize: 14, color: '#1C1C1E', lineHeight: 20,
  },
  notifName: { fontWeight: '700',
  },
  notifTime: { fontSize: 12, color: '#8E8E93', marginTop: 3,
  },
  unreadTime: { color: '#1877F2', fontWeight: '600',
  },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#1877F2',
  },
});
