import { View, Text } from 'react-native';
import React from 'react';
import { Post } from '../types/post';
import { Link } from 'expo-router';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View>
      <Link href={`/${post.slug}`} style={{ fontSize: 16, fontWeight: '500' }}>
        {post.title}
      </Link>
    </View>
  );
};

export default PostListItem;
