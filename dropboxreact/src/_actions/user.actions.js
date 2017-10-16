import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import * as fileuploadservice from '../_services/fileuploadservice';

export const userActions = {
    login,
   // logout,
    register,
    //getAll,
   // delete: _delete
   //listfiles
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    if(user.status==201)
                    {
                    dispatch(success(user));
                    history.push('/homepage');
                    }
                
                else
                {
                    
                    dispatch(failure(user));
                    dispatch(alertActions.error(user));
                
                }
           } );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

/*function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}*/

function register(user) {
     console.log(user);
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

/*function listfiles()
{
            fileuploadservice.listfiles()
            .then((reponseJson) => {

               console.log("its Listfiles actions");
               console.log(reponseJson);
            },
           
            );

    function request(responseJson) { return { type: userConstants.REGISTER_REQUEST, responseJson } }
    function success(responseJson) { return { type: userConstants.REGISTER_SUCCESS, responseJson } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }

}*/

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}