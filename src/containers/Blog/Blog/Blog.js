import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" component={NewPost}></Route>
            </div>
        );
    }
}

export default Blog;