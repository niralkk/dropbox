import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
import { history } from '../_helpers';
class Fileshare extends React.Component {

handleShare()
{
  const payload = this.props.filename;
       console.log(payload);
        console.log("inside handleShare fileshare Component");
        fileuploadservice.sharefile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("file shared");
                    history.push('/Fileupload');
                }
            });
}


render() {
        return (
          <div>
          <h4> SHARE </h4>
          <input type="text" placeholder="Email" className="mm-popup__input" name="sharing email" value=""/>
          <h4> File: </h4><input type="text" value={this.props.sharedfilename}/>
          <button className="btn btn-primary" onClick= {()=>this.handleShare()}>Share</button>
        </div>

   );
}
}
function mapStateToProps(data) {
    let sharedfilename = data.listoffiles.filename;
    return {sharedfilename};
}
export default connect(mapStateToProps)(Fileshare);
