import Landing from "./pages/Landing";
import blog from "./images/blog.png";
import React from 'react';
import profile from "./images/profile.png";
import Avatar from '@mui/material/Avatar';
import ins from "./images/instagram.png";
import fb from "./images/facebook.png";
import Post from "./components/Post.js";
import Grid from '@mui/material/Grid';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import "./components/filter.js";
import { width } from "@mui/system";
function App() {
  return (
  <div>
  <div>
    <div className="header">
        <h2 className="community">Community</h2>
        <div className="how
      ">How it works</div>
        <div className="about">About us</div>
    </div>
    {/* blog card */}
    <div className="content">
    <div style={{ padding: 40 }} >
        <Grid container spacing={20} justify="center">
          <div className="left">
            <filter></filter>
            <Post></Post>
            <Post></Post>
          </div>
        </Grid>
    </div>
      <div className="profile">
            <Avatar 
            alt="Golanginya" 
            src={profile} 
            sx={ {width: 200, height: 200}}
            />
            <p>@Golanginya</p>
            <div className="linkMedia">
            <img className="blogPhoto" src={ins}></img>
            <img className="blogPhoto" src={fb}></img>
            </div>

      </div>
    </div>
  </div>
  </div> 
  );
}

export default App;
