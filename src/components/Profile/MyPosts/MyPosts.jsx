import React, { memo } from "react";
import Post from "./Post/Post";
import { PostsReduxForm } from "./PostForm";
import styled from "styled-components";

const DivPostsBlock = styled.div`
  padding: 1rem;
`;
const DivPosts = styled.div`
  margin-top: 10px;
`;
const Styledhr = styled.hr`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const MyPosts = memo(({ posts, addPost }) => {
  const postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const addMessages = (values) => {
    addPost(values.myPosts);
  };

  return (
    <DivPostsBlock>
      <Styledhr />
      <h3>My posts</h3>
      <PostsReduxForm onSubmit={addMessages} />
      <hr />
      <DivPosts>{postsElements}</DivPosts>
    </DivPostsBlock>
  );
});

export default MyPosts;
