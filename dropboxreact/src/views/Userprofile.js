import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Userprofile extends React.Component {


userdetails= (event) => {

        fileuploadservice.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("file uploaded");
                }
            });

    };




    render() {
        return (
        <div className="container">
       <button className="btn btn-primary" onClick={this.getuserdetails}>My files</button>
        
    );
    }
}



export {Userprofile as Userprofile};