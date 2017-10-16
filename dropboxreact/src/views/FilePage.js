import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';

class FilePage extends React.Component {

    render() {
        <div class="container">
        <div className="row">
        <div className="col-md-6">
            <LeftCont/>
        </div>
        <div className="col-md-6">
            <Fileupload/>
        </div>
        
        </div>
        </div>
        
    }
}


//const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };