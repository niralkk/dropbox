import { userConstants } from '../_constants';
import {LIST_FILES,FILE_SHARE} from "../_actions/listfileaction";
console.log("in filelist reducer");
export const listoffiles = (state = {}, action) => {
switch (action.type) {

case LIST_FILES :

            if(action.files && action.files.length > 0) {
              console.log("pojja here");
              console.log(action.files);
                return {

                   ...state,
                   "files":{
                        "files" : action.files,
                        //"pwd" : action.pwd,
                       // "msg" : action.msg
                    }
                };

            }
            else {
                console.log("its else in reducer");
                return {
                   ...state,                  
                    "files":{
                        "files" :[],
                       // "pwd" : action.pwd,
                       // "msg" :"No files available"
                    }
                };

            }
 case FILE_SHARE:
 return{
   ...state,
   "filename" : action.filename
 };           

            break;


default:
console.log("hiii its state" +  state);
return state
  }
};

//export default listoffiles;