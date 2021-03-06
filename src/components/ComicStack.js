import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Issue from "./Issue"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Collection from "./Collection";
import Reviews from "./Reviews";
import Character from "./Character";
import PublicProfile from "./PublicProfile";

class ComicStack extends React.Component {
    state = {
        userId: null,
        imageChange: false
    }

    loginUser = (userId) => {
        console.log(userId);
        this.setState(prevState => ({
            userId: userId
        }));
        return userId}

    logoutUser = () =>
        this.setState(prevState => ({
            userId: null
        }))

    imageChange = () =>
        this.setState(prevState => ({
            imageChange: !this.state.imageChange
        }))

    render() {
        return (
            <BrowserRouter>
                <Header logoutUser={this.logoutUser} userId={this.state.userId} imageChange={this.state.imageChange}/>
                <div className="container">
                    <Route path="/" exact={true} render={(props) =>
                        <Home {...props} loginUser={this.loginUser} logoutUser={this.logoutUser} userId={this.state.userId}/>}/>
                    <Route path={["/search/:query", "/search/"]} exact={true} component={SearchResults}/>
                    <Route path="/details/issue/:id" exact={true} render={(props) =>
                        <Issue {...props} userId={this.state.userId} />}/>
                    <Route path="/details/character/:id" exact={true} component={Character}/>
                    <Route path="/login" exact={true} render={(props) =>
                        <Login {...props} loginUser={this.loginUser} />}/>
                    <Route path="/register" exact={true} render={(props) =>
                        <Register {...props} loginUser={this.loginUser} />}/>
                    <Route path="/profile" exact={true} render={(props) =>
                        <Profile {...props} userId={this.state.userId} imageChange={this.imageChange}/>}/>
                    <Route path="/profile/:id" exact={true} component={PublicProfile}/>
                    <Route path="/collection&sortby=:sortBy" exact={true} render={(props) =>
                        <Collection {...props} userId={this.state.userId} />}/>
                    <Route path="/reviews" exact={true} render={(props) =>
                        <Reviews {...props} userId={this.state.userId}/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default ComicStack