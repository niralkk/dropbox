import React, {Component} from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './Login.css';
import { Redirect } from 'react-router';
import * as API from '../api/API';

export class SignUp extends Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        message: '',
        fireRedirect: false
    };

    handleSignUp = (e) => {
        e.preventDefault();
        if(this.state.password.length<6){
            this.setState({
                message: "Password should be of minimum 6 characters!!"
            });
            document.getElementById('error2').style.display="block";
        }else{
            API.doSignUp(this.state)
                .then((status) => {
                    if (status === 201) {
                        this.setState({
                            message: "Successfully signed up..!!"
                        });
                        this.setState({ fireRedirect: true })
                        //this.props.router.push("/")
                    } else if (status === 200) {
                        this.setState({
                            message: "You have signed up already..!!"
                        });
                        document.getElementById('error2').style.display="block";
                        //this.login1();
                    } else {
                        this.setState({
                            message: "Something went wrong in sign up..!!"
                        });
                        //this.login1();
                    }
                });
        }
    };

    render(){
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
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
                                <h3>Sign up</h3>
                            </div>

                            <form onSubmit={this.handleSignUp}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="inputFirstName"
                                           id="inputFirstName" placeholder="First Name" required
                                           value={this.state.firstname}
                                           onChange={(event) => {
                                               this.setState({
                                                   firstname: event.target.value
                                               });
                                           }}/>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" name="inputLastName"
                                           id="inputLastName" placeholder="Last Name" required
                                           value={this.state.lastname}
                                           onChange={(event) => {
                                               this.setState({
                                                   lastname: event.target.value
                                               });
                                           }}/>
                                </div>

                                <div className="form-group">
                                    <input type='email' className="form-control" name="inputUsername"
                                           id="inputUsername" placeholder="Email Id" required
                                           value={this.state.username}
                                           onChange={(event) => {
                                               this.setState({
                                                   username: event.target.value
                                               });
                                           }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control"
                                           name="inputPassword" id="inputPassword" placeholder="Password" required
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
                                        <div id='error2' className="c-card--error">{this.state.message}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="col-md-0"></div>
                                        <button type="submit" className="btn btn-primary black-background white">Sign Up</button>
                                    </div>
                                </div>

                                <hr>
                                </hr>
                                <p>Already have an account ?
                                    <Link to={`/`} className="link">
                                        {/*<h3>Create an Account</h3>*/}
                                        Sign In
                                    </Link>
                                </p>

                            </form>
                            {fireRedirect && (
                                <Redirect to={from || '/'}/>
                            )
                            }
                        </div>
                    </div>
                    <div className="row justify-content-md-center">

                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(SignUp)
