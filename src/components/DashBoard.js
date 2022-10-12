import React from "react";
import { Link,useNavigate } from "react-router-dom";

export const DashBoard = () => {
    const navigate = useNavigate();
    const logout = ()=>{

        localStorage.clear();
        navigate("/login");

    }
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/addsong">
                Add Song
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/listsongs">
                List Song
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/playlists">
                Playlist List
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/playlists">
             Create PlayList
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/playlistlist">
                View All PlayList
              </Link>
            </li>
            
            <li class="nav-item active">
              <button class="btn btn-primary" onClick={()=>{logout()}}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
