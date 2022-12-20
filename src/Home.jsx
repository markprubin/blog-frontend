import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import Snowfall from "react-snowfall";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

//Functions

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  //All Posts
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  //Modal Open
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };
  //Modal Close
  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  //Update Post
  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleHidePost();
    });
  };

  //Destroy Post
  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  //HTML
  return (
    <div>
      <div className="container">
        <Snowfall color="lightblue" snowflakeCount={400} />
        <h1>The Blog for Nobody.</h1>
        <PostsIndex posts={posts} onSelectPost={handleShowPost} />
        <Modal show={isPostsShowVisible} onClose={handleHidePost}>
          <PostsShow post={currentPost} onPostUpdate={handleUpdatePost} onPostDestroy={handleDestroyPost} />
        </Modal>
      </div>
    </div>
  );
}
