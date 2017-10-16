import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';
import Listfiles from './Listfiles';
import Navpage from './Navpage';

class HomePage extends React.Component {

    render() {
        return (
            <div>

    <div class="row">
    <div className="col-sm-12">

      <Navpage/>

    </div>


        </div>
        </div>

    );
    }

}

export {HomePage as HomePage};
