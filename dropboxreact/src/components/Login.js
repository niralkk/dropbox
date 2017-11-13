import React, {Component} from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './Login.css';
import * as API from '../api/API';
import {connect} from 'react-redux';

class Login extends Component {
    state = {
        username: '',
        password: '',
        //isLoggedIn: false,
        message: ''
    };

    login() {
        this.props.history.push("/homepage");
    }
    onNavigateSignUp() {
        this.props.history.push("/signup");
    }


    handleSubmit = (userdata) => {
        if(this.state.username==="" || this.state.password===""){
            this.setState({
                //isLoggedIn: false,
                message: "Please enter both username and password!!"
            });
            document.getElementById('error1').style.display="block";
        } else {
            var status;
            API.doLogin(userdata)
                .then((res) => {
                    status = res.status;
                    try{
                        return res.json();
                    }
                    catch(err){console.log(err);}
                }).then((json) => {
                if (status === 201) {
                    /*this.setState({
                        isLoggedIn: true
                    });*/
                    const token = json.token;
                    localStorage.setItem('jwtToken',token);
                    //this.props.storeToken(localStorage.getItem('jwtToken'));
                    this.login();
                } else if (status === 401) {
                    this.setState({
                        //isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                    document.getElementById('error1').style.display="block";
                    //this.login1();
                } else {
                    this.setState({
                        //isLoggedIn: false,
                        message: "Something went Wrong..!!"
                    });
                    document.getElementById('error1').style.display="block";
                    //this.login1();
                }
            });
        }
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="center-block">
                            <img src="/logo.jpg" height="50" width="200" className="left-block" alt="logo"/>
                        </div>
                        <hr/>
                    </div>
                    <div className="row justify-content-md-right" >
                        <div className="col-md-6">
                            <br/>
                            <div className="row">
                                <br/>
                                <div className="span6"></div>
                                <div className="span6"><img src="/home.jpg" height="320" width="300" className="right-block" alt="home"/></div>
                                <div className="span6"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <br/><br/><br/>
                            <div className="form-group">
                                <div className="col-md-0">
                                </div>
                                <h3>Sign in</h3>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        label="Username"
                                        placeholder="Enter Username"
                                        value={this.state.username}
                                        onChange={(event) => {
                                            this.props.changeUsername(event.target.value)
                                            this.setState({
                                                username: event.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="password"
                                        label="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={(event) => {
                                            this.setState({
                                                password: event.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div id='error1' className="c-card--error">{this.state.message}</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-0"></div>
                                    <button id='button1'
                                            className="btn btn-primary black-background white"
                                            type="button"
                                            onClick={() => this.handleSubmit(this.state)}>
                                        Sign in
                                    </button>
                                    <hr>
                                    </hr>
                                    <p>Don't have an account ?
                                        <Link to={`/signup/`} className="link">
                                            {/*<h3>Create an Account</h3>*/}
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return{
        select1: state.reducerUsers
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        changeUsername: (username) => {
            dispatch({
                type: "CHANGEUSERNAME",
                payload : {username:username}
            });
        },
    };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
