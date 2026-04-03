import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked || false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={styles.card}>
      {/* Post Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar uri={post.userAvatar} size={44} initials={post.userName[0]} showOnline={post.isOnline} />
          <View style={styles.userMeta}>
            <Text style={styles.userName}>{post.userName}</Text>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#8E8E93" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      {post.content ? (
        <Text style={styles.postContent}>{post.content}</Text>
      ) : null}

      {/* Post Image */}
      {post.image ? (
        <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />
      ) : null}

      {/* Reaction Summary */}
      <View style={styles.reactionSummary}>
        <View style={styles.reactionIcons}>
          <View style={[styles.reactionBubble, { backgroundColor: '#1877F2' }]}>
            <Ionicons name="thumbs-up" size={10} color="#fff" />
          </View>
          <View style={[styles.reactionBubble, { backgroundColor: '#F02849', marginLeft: -4 }]}>
            <Ionicons name="heart" size={10} color="#fff" />
          </View>
        </View>
        <Text style={styles.reactionCount}>{likeCount} reactions</Text>
        <Text style={styles.commentCount}>{post.comments} comments</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike} activeOpacity={0.7}>
          <Ionicons
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={20}
            color={liked ? '#1877F2' : '#8E8E93'}
          />
          <Text style={[styles.actionLabel, liked && styles.actionLabelActive]}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Ionicons name="chatbubble-outline" size={20} color="#8E8E93" />
          <Text style={styles.actionLabel}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Ionicons name="arrow-redo-outline" size={20} color="#8E8E93" />
          <Text style={styles.actionLabel}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMeta: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  timestamp: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 1,
  },
  moreButton: {
    padding: 4,
  },
  postContent: {
    fontSize: 15,
    color: '#1C1C1E',
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#F2F2F7',
  },
  reactionSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  reactionIcons: {
    flexDirection: 'row',
    marginRight: 6,
  },
  reactionBubble: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  reactionCount: {
    fontSize: 13,
    color: '#8E8E93',
    flex: 1,
  },
  commentCount: {
    fontSize: 13,
    color: '#8E8E93',
  },
  divider: {
    height: 1,
    backgroundColor: '#F2F2F7',
    marginHorizontal: 16,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
  },
  actionLabelActive: {
    color: '#1877F2',
  },
});
