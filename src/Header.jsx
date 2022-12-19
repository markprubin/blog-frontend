import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Header() {
  //Modal Sign Up

  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
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
                <Link to="/">
                  <button type="button" class="btn btn-light">
                    Home
                  </button>
                </Link>
              </li>
              |||
              <li class="nav-item">
                <Link to="/about">
                  <button type="button" class="btn btn-light">
                    About
                  </button>
                </Link>
              </li>
              |||
              <li class="nav-item">
                <Link to="/new">
                  <button type="button" class="btn btn-light">
                    New Post
                  </button>
                </Link>
              </li>
              |||
              <li className="nav-item">
                <Link to="/login">
                  <button type="button" class="btn btn-light">
                    Log In
                  </button>
                </Link>
              </li>
              |||
              <li className="nav-item">
                <button type="button" class="btn btn-warning">
                  <a onClick={handleSignupShow}>Sign Up</a>
                </button>
              </li>
              |||
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <LogoutLink />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
    </header>
  );
}
