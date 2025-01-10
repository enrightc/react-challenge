import React, { Component } from 'react';
import {savedPosts} from '../posts.json';
import PostItem from "./PostItem";

class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }


  render() {
    return (
      <div className={CSS.Content}>
        <div className={CSS.TitleBar}>
            <h1>My Photos</h1>
        </div>

        {/* <div className={CSS.SearchResults}>
            {savedPosts.map(post => (
              <div key={post.title} className={CSS.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="random" />
                <p>{post.description}</p>
              </div>
            ))}
        </div> */}

        <PostItem savedPosts={savedPosts} />

      </div>
    )
  }
}

export default Content