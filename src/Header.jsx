import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";
import { PostsNew } from "./PostsNew";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Create Post
const handleCreatePost = (params) => {
  axios.post("http://localhost:3000/posts.json", params).then((response) => {
    setPosts([...posts, response.data]);
  });
};

export function Header() {
  //Modal Sign Up

  // const [isSignupVisible, setIsSignupVisible] = useState(false);
  // const handleSignupShow = () => {
  //   setIsSignupVisible(true);
  // }
  // const handleSignupClose = () => {
  //   setIsSignupVisible(false);
  // }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h2>DA BLG.</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/">Home</Link>
            </li>
            ||
            <li class="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#posts-index">
                All Posts
              </a>
            </li>
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#newPostModal">
              New Post
            </button>
            <li class="nav-item">
              <a class="nav-link" href="#posts-new">
                New Post
              </a>
            </li>
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Log In
            </button>
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#signUpModal">
              Sign Up
            </button>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <LogoutLink />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2>DA BLG.</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Login />
            </div>
            <div class="modal-footer">
              <h4>Enjoy reading about a bunch of random stuff.</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2>DA BLG.</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Signup />
            </div>
            <div class="modal-footer">
              <h4>Enjoy reading about a bunch of random stuff.</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="newPostModal" tabindex="-1" aria-labelledby="newPostModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2>DA BLG. A blog for nobody.</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <PostsNew onCreatePost={handleCreatePost} />
            </div>
            <div class="modal-footer">
              <h4>Thanks for contributing to a blog for nobody.</h4>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
