import {constant} from '../_constants/appConstant';
var data = {
    isLoginSuccesful : false,
    isVerificationOTPSuccessful : false,
    isRegistrationSuccessful : false,
    verificationResponse : "",
    loginResponse : ""
}

/**
 * Change Accordingly to future need
 */
export default function applicationContext(state=data,action){
    switch(action.type){
        case constant.LOGIN_REQUEST:
            return{...state};
        case constant.LOGIN_SUCCESSFUL:
            return{...state,isLoginSuccesful:true, loginResponse:action.response};
        case constant.LOGIN_FAILURE:
            return{...state};
        case constant.REGISTERATION_REQUEST:
            return{...state};
        case constant.REGISTRATION_SUCCESSFUL:
            return{...state,isRegistrationSuccessful:true};
        case constant.REGISTRATION_FAILURE:
            return{...state};
        case constant.VERIFY_OTP:
            return{...state};
        case constant.VERIFY_OTP_SUCCESSFUL:
            return{...state,isVerificationOTPSuccessful:true , verificationResponse: action.response};
        case constant.VERIFY_OTP_FAILURE:
            return{...state};
        default:
            return state;
    }
}