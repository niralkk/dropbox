import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';
import Listfiles from './Listfiles';
import { history } from '../_helpers';


class NavPage extends React.Component {
render() {
        return (
        <div>

        <div role="list" class="ui list" floated="left">

        <div role="listitem" class="item">
        <div class="content"><button className="btn btn-warning" onClick={() => {
                                history.push('/Fileupload');
                            }}>Upload File </button>
        </div>
        <br/>
        <br/>
        </div>
        <div role="listitem" class="item">
        <div class="content">
        <button className="btn btn-warning" onClick={() => {
                               history.push('/Listfiles');
                            }}> List file </button>
         </div>
        </div>
         </div>
        </div>

    );
    }
}



export default NavPage;
