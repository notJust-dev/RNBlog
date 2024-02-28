import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getPost, getAllPosts } from '../repository/postRepository';
import Markdown from 'react-native-markdown-display';
import Head from 'expo-router/head';
import { ORIGIN } from '../config';

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const posts = getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta
          property="og:image"
          content={`${ORIGIN}/thumbnails/${post.thumbnail}`}
        />
      </Head>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
        contentContainerStyle={{
          maxWidth: 960,
          width: '100%',
          marginHorizontal: 'auto',
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 30, marginBottom: 20 }}>{post.title}</Text>

        <Image
          source={{ uri: `${ORIGIN}/thumbnails/${post.thumbnail}` }}
          style={{ width: '100%', aspectRatio: 16 / 9 }}
          alt={post.title}
        />

        <Markdown>{post.content}</Markdown>
      </ScrollView>
    </>
  );
};

export default PostDetailsPage;
