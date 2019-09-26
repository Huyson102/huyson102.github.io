import validator from "../utils/validator.js";
import { makeResponse, responseCode, responseType} from "./response.js" ;
import user from "../models/user.js";

const authController = {
    register: async function(request){
    const result = validator.validate({
        name: { name: "notEmpty" },
        password: {name: "minLength", value: 8},
        retypePassword: {name: "matched", value: request.password}
        // email: "isEmail",
        // retypePassword: {rule: "matched"}
        } , request);

        await firebase.auth().createUserWithEmailAndPassword(request.email, request.password)   
        firebase.auth().currentUser.updateProfile({
            displayName: request.name
        })
        firebase.auth().currentUser.sendEmailVerification();
        return makeResponse(
            responseType.SUCCESS, 
            responseCode.auth.register_success,
            firebase.auth().currentUser
        );
     },

    login: async function(request){
        const loginResult = await firebase
            .auth()
            .signInWithEmailAndPassword(request.email, request.password);
            // console.log(loginResult.user);
        if(!loginResult.user.emailVerified) {  //if(loginResult.user.emailVerified == false)
        return makeResponse(
                responseType.FAILURE, 
                responseCode.auth.email_not_verify);
        } else {
            user.authedUser = {
                email: loginResult.user.email,
                displayName: loginResult.user.displayName
            };
            return makeResponse(
                responseCode.SUCCESS,
                responseCode.auth.login_success,
                loginResult.user
            );
        }
     }
};

export default authController;