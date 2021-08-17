import React from 'react';
import formValidationOutput from './formValidationOutput';

const formValidation = () => {
    const usernameInputCheck = (usernameVal, setUsernameMsg) => {
        const formMsgs = formValidationOutput;
        let noError = true;
        formMsgs().usernameField.map(UFieldItem => {
            //warnings about wrong input for users 
            UFieldItem.messages.map(msg => {
                setUsernameMsg('');
                if(usernameVal === ''){
                    setUsernameMsg(<p className={msg.emptyField.style}>{msg.emptyField.text}</p>);
                    noError = false;
                }
                else if(usernameVal.length < 4){
                    setUsernameMsg(<p className={msg.shortUsername.style}>{msg.shortUsername.text}</p>);
                    noError = false;
                }
                if(usernameVal.length > 20){
                    setUsernameMsg(<p className={msg.longUsername.style}>{msg.longUsername.text}</p>);
                    noError = false;
                }
                if(usernameVal.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
                    setUsernameMsg(<p className={msg.forbdidenSymbols.style}>{msg.forbdidenSymbols.text}</p>);
                    noError = false;
                }
                
            });
        });
        return noError;
    }
        //for email
    const emailInputCheck = (emailVal, setEmailMsg) => {
        const formMsgs = formValidationOutput;
        let noError = true;
        formMsgs().emailField.map(EmailFieldItem => {
            EmailFieldItem.messages.map(msg => {
                setEmailMsg('');
                if(emailVal === ''){
                    setEmailMsg(<p className={msg.emptyField.style}>{msg.emptyField.text}</p>);
                    noError = false;
                }
                else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailVal)){
                    setEmailMsg(<p className={msg.wrongFormat.style}>{msg.wrongFormat.text}</p>);
                    noError = false;
                }
            });
        });
        return noError;
    }
        //for passwords
    const passwordInputCheck = (passwordVal, setPasswordMsg, repPasswordVal, setRepeatPasswordMsg) => {
        const formMsgs = formValidationOutput;
        let noError = true;
        formMsgs().passwordFields.map(PwdFieldItem => {
            PwdFieldItem.messages.map(msg => {
                setPasswordMsg('');
                if (passwordVal === '') {
                    setPasswordMsg(<p className={msg.emptyField.style}>{msg.emptyField.text}</p>);
                    noError = false;
                } else {
                    if (repPasswordVal !== passwordVal) {
                        setRepeatPasswordMsg(<p className={msg.passwordsDontMatch.style}>{msg.passwordsDontMatch.text}</p>);
                        noError = false;
                    } else {setRepeatPasswordMsg();}
                        if (passwordStrength(passwordVal) < 4){
                            setPasswordMsg(<p className={msg.weakPassword.style}>{msg.weakPassword.text}</p>);
                            noError = false;
                        }
                        if (passwordStrength(passwordVal) >= 4){
                            setPasswordMsg(<p className={msg.mediumPassword.style}>{msg.mediumPassword.text}</p>);
                        }
                        if (passwordStrength(passwordVal) >= 5){
                            setPasswordMsg(<p className={msg.strongPassword.style}>{msg.strongPassword.text}</p>);
                        }
                        if (passwordVal.length > 39) {
                            setPasswordMsg(<p className={msg.passwordTooLong.style}>{msg.passwordTooLong.text}</p>);
                            noError = false;
                        }
                }
                console.log(passwordStrength(passwordVal));
            });
        });
       return noError;
    }
    const repeatPasswordInputCheck = (repPasswordVal, setRepeatPasswordMsg, passwordVal) => {
        const formMsgs = formValidationOutput;
        formMsgs().passwordFields.map(PwdFieldItem => {
            PwdFieldItem.messages.map(msg => {
                if (repPasswordVal === '') {
                    setRepeatPasswordMsg(<p className={msg.emptyField.style}>{msg.emptyField.text}</p>);
                }
                else if (repPasswordVal !== passwordVal) {
                    setRepeatPasswordMsg(<p className={msg.passwordsDontMatch.style}>{msg.passwordsDontMatch.text}</p>);
                } else {setRepeatPasswordMsg();}
            });
        });
    }
    const passwordStrength = (pwd) => {
        let pwdMeter = 0;
        if (pwd.length  >= 8)  {pwdMeter = + (pwd.length / 8)}
        if (/[A-Z]/.test(pwd)) {++pwdMeter}
        if (/[0-9]/.test(pwd)) {++pwdMeter}
        if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd)) {++pwdMeter}
        
        return pwdMeter;
    }
    return {usernameInputCheck, emailInputCheck, passwordInputCheck, repeatPasswordInputCheck};
}
export default formValidation;