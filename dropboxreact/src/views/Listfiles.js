import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
//import ImageGridList from "./ImageGridList";
//import TextField from 'material-ui/TextField';
//import Typography from 'material-ui/Typography';
import * as listfileaction from '../_actions/listfileaction';
//import {SelectableList} from 'material-ui/SelectableList';
import DownloadLink from 'react-download-link';
import Navpage from './Navpage';

class Listfiles extends React.Component {

    constructor(props) {
        super(props);
    }
    /*Listfiles = (event) => {
        //const payload = new FormData();
        //payload.append('mypic', event.target.files[0]);
        console.log("inside listfiles");
        //console.log(payload.fieldName);
         const { dispatch } = this.props;
       listfileaction.listfiles();
    };*/
    componentDidMount() {
        this.props.addTodoNew()
    }


    render() {
            const {item} = this.props;
            const { listoffiles  } = this.props;
        return (
            <div>
            <div class="row">
            <div className="col-md-12">
            <Navpage/>
            </div>
            <br/>
            <div className="col-md-6">

            <h1> Listing Files </h1>
            <div className="card-body">

                {this.props.fileList.length > 0 ?

                    this.props.fileList.map((file) => {

                        return ( <div>
                            <button onClick= ""><img src={require('../Star.png')}/></button>
                            <DownloadLink
                                filename={file}
                                label= {file}
                                />
                            </div>);
                    })

                    : ''}

                 </div>
                 </div>
               </div>
               </div>

        );
    }
}

function mapStateToProps(data) {
    let fileList = [];
    console.log("in component ----- ");
    if(data.listoffiles.files !== undefined) {
        fileList = data.listoffiles.files.files;
        console.log(data.listoffiles.files.files);

    }
    return {fileList};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoNew : () => dispatch(listfileaction.listfiles())
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Listfiles);
/*<button className="btn btn-primary" onClick={() => {
                                this.props.addTodoNew()
                            }}>My files</button>*/
