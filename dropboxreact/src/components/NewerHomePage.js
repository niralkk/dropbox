import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Message from "./Message";
import Welcome from "./Welcome";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    handleLogin = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    handleSignup = (userdata) => {
        API.doSignup(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Sign Up Successful..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                }
            });
    };

    render() {
        return (
            <div className="container-fluid">
            <div className="row">
            <br/>
            </div>
                <Route exact path="/" render={() => (
                    <div>
                        <Message message="You have landed on my DropBox App !!"/>
                        <div className="row justify-content-md-left">
                            <div className="col-md-1">
                                <button className="btn btn-success" onClick={() => {
                                    this.props.history.push("/login");
                                    }}>Login
                                </button>
                            </div>

                            <div className="col-md-2">
                                <button className="btn btn-success" onClick={() => {
                                    this.props.history.push("/signup");
                                    }}>Sign Up
                                </button>
                            </div>
                        </div>

                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleLogin={this.handleLogin}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup handleSignup={this.handleSignup}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username}/>
                )}/>

            </div>
        );
    }
}

export default withRouter(NewerHomePage);