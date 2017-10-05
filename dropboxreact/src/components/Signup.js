import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Signup extends Component {

    static propTypes = {
        handleSignup: PropTypes.func.isRequired
    };

    state = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Signup</h1>
                        </div>
                        
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="firstname"
                                placeholder="Enter First Name"
                                value={this.state.firstname}
                                onChange={(event) => {
                                    this.setState({
                                        firstname: event.target.value
                                    });
                                }}
                            />
                        </div>


                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="lastname"
                                placeholder="Enter Last Name"
                                value={this.state.lastname}
                                onChange={(event) => {
                                    this.setState({
                                        lastname: event.target.value
                                    });
                                }}
                            />
                        </div>

                        
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                label="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
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
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSignup(this.state)}>
                                Signup
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;