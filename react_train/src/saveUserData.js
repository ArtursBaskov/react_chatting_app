//import React from 'react';
import axios from 'axios';
const saveUserData = (usernameF, emailF, passwordF, repeatPasswordF) => {
    const postData = (url, setPostDataResponse) =>{
        axios({
            method: 'post',
            url: url,
            data: {
                username: usernameF,
                email: emailF,
                password: passwordF,
                repeatPassword: repeatPasswordF
            }
        })
        .then((response) => {
            //console.log(response);
            response && setPostDataResponse(response);
        }).catch( (error) => {
            console.log(error);
        });
    }
    return {postData};
}
export default saveUserData;