import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* if auth is not set, don't route user */}
                    {/* {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}; */}
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/posts/" component={Posts}></Route>
                    <Route render={() => <h1>404 Not Found</h1>}/>
                    {/* Redirect and not found wont work together */}
                    {/* <Redirect from="/" to="/posts"/> */}
                    {/* <Route path="/" component={Posts}></Route> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;