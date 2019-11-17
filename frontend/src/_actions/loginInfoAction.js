import axios from 'axios';
import {constant} from '../_constants/appConstant'
import {config} from '../configUtil'

export const endPoints = {
    login : "/api/login", //Post Request
    verifyOTP : "/api/verifyOTP", //Post Request
    register : "/api/register", //Post Request
}

export function getError(error) {
    return (error.response !== undefined ? error.response.data.message : error.message) || 'Something bad happened'
}

export const requestLogin = (requestData) => (dispatch)=>{
    console.log("Request Data - ", requestData);
    dispatch({type:constant.LOGIN_REQUEST});
    axios.post(config.apiRoot+endPoints.login, requestData)
    .then((response) => {
      dispatch({ type: constant.LOGIN_SUCCESSFUL, requestData, response: response.data });
    }).catch((err) => {
      dispatch({ type: constant.LOGIN_FAILURE, error: getError(err) });
    });
}

export const requestVerifyOTP = (requestData) => (dispatch)=>{
    console.log("Request Data - ", requestData);
    dispatch({type:constant.VERIFY_OTP});
    axios.post(config.apiRoot+endPoints.verifyOTP, requestData)
    .then((response) => {
      dispatch({ type: constant.VERIFY_OTP_SUCCESSFUL, requestData, response: response.data });
    }).catch((err) => {
      dispatch({ type: constant.VERIFY_OTP_FAILURE, error: getError(err) });
    });
}

export const requestRegistartion = (requestData) => (dispatch)=>{
    console.log("Request Data - ", requestData);
    dispatch({type:constant.REGISTERATION_REQUEST});
    axios.post(config.apiRoot+endPoints.register, requestData)
    .then((response) => {
      dispatch({ type: constant.REGISTRATION_SUCCESSFUL, requestData, response: response.data });
    }).catch((err) => {
      dispatch({ type: constant.REGISTRATION_FAILURE, error: getError(err) });
    });
}