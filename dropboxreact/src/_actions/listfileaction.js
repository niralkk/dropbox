//import { userConstants } from '../_constants';
//import { userService } from '../_services';
//import { alertActions } from './';

import { history } from '../_helpers';
import * as fileuploadservice from '../_services/fileuploadservice';
export const LIST_FILES = 'LIST_FILES';
export const FILE_SHARE = 'FILE_SHARE';



export function listfiles() {
  //return dispatch => {
       // dispatch(request({ reponseJson }));
       return function(dispatch){
  fileuploadservice.listfiles()
            .then((responseJson) => {
               console.log("its Listfiles actions");
               console.log(responseJson);
                dispatch(updateListFiles(responseJson));
            },
           
            );}
  }

export function updateListFiles(responseJson) {
console.log("hey its update list files");
console.log(responseJson);
  return {
    type: LIST_FILES,
    files : responseJson
  }
  
}
export function sharefileaction(file){
  return{
    type: FILE_SHARE,
    filename: file
  }
}