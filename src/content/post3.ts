import { Post } from '../types/post';

const post: Post = {
  slug: 'post3',
  date: '2024-02-28T13:27:28Z',
  title: 'THis is a new post',
  description: 'THis is the descirption',
  thumbnail: 'post3.png',
  content: `
  # This is the title

  asdfasdf
  
  asdfas
  
  df
  
  asdf
  
  asdf
  
  ## Next one
  
  fsadfasdfas
  
  - lists
  - with
  - bulltes
  
  dfasdasdas
  
  1. step 1
  2. step 2
  
  Some **bold text**
  
  ## Quotes
  
  > Callout, quotes
  >
  `,
};

export default post;
