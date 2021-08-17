import React, {useState, useEffect} from 'react';
import formValidation from './formValidation';
import saveUserData from './saveUserData';

const RegisterForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const inputFieldChangeHandle = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    //useState for input messages
    const [username_msg, setUsernameMsg] = useState();
    const [email_msg, setEmailMsg] = useState();
    const [password_msg, setPasswordMsg] = useState();
    const [repeatPassword_msg, setRepeatPasswordMsg] = useState();
    
    //form validation handler
    //validation check
    //for username
    const {usernameInputCheck, emailInputCheck, passwordInputCheck, repeatPasswordInputCheck} = formValidation();

    
    //handle onKeyUps nad onKeyDowns
    let timeGoing;
    //username field
    const usernameOnKeyDownHandle = () => {
        clearTimeout(timeGoing);
        setUsernameMsg('');
    }
    const usernameOnkeyUpHandle = () => {
        clearTimeout(timeGoing);
        timeGoing = setTimeout(() => {
            usernameInputCheck(values.username, setUsernameMsg);
        }, 200); 
    }
    //email field
    const emailOnKeyDownHandle = () => {
        clearTimeout(timeGoing);
        setEmailMsg('');
    }
    const emailOnkeyUpHandle = () => {
        clearTimeout(timeGoing); //я так понимаю это удаляет все предыдущие на мгновение прокнувшие таймеры на поднятие клавиши, так что анимация не будет проигрыватся много раз.
        timeGoing = setTimeout(() => {
            emailInputCheck(values.email, setEmailMsg);
        }, 200);  
        
    }
    //password field
    const passwordOnKeyDownHandle = () => {
        clearTimeout(timeGoing);
        setPasswordMsg('');
    }
    const passwordOnkeyUpHandle = () => {
        clearTimeout(timeGoing);
        timeGoing = setTimeout(() => {
            passwordInputCheck(values.password, setPasswordMsg, values.repeatPassword, setRepeatPasswordMsg);
        }, 350);  
    }
    //repeat password field
    const repeatPasswordOnKeyDownHandle = () => {
        clearTimeout(timeGoing);
        setRepeatPasswordMsg('');
    }
    const repeatPasswordOnkeyUpHandle = () => {
        clearTimeout(timeGoing);
        timeGoing = setTimeout(() => {
            repeatPasswordInputCheck(values.repeatPassword, setRepeatPasswordMsg, values.password);
        }, 200);
    }


    //fetch
    const [postDataResponse, setPostDataResponse] = useState(undefined);
    const {postData} = saveUserData(values.username, values.email, values.password, values.repeatPassword);

    //submit form
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //show errors on submit 
        usernameInputCheck(values.username, setUsernameMsg);
        emailInputCheck(values.email, setEmailMsg);
        passwordInputCheck(values.password, setPasswordMsg, values.repeatPassword, setRepeatPasswordMsg);
        repeatPasswordInputCheck(values.repeatPassword, setRepeatPasswordMsg, values.password);
        // if validation functions don`t return false, post data
        if(
            usernameInputCheck(values.username, setUsernameMsg) &&
            emailInputCheck(values.email, setEmailMsg) &&
            passwordInputCheck(values.password, setPasswordMsg, values.repeatPassword, setRepeatPasswordMsg)

        ){
            postData('http://localhost:5000/index.php', setPostDataResponse);
            
        }

    }
    //check if response has updated data from server
    useEffect(() => {
        postDataResponse && console.log(postDataResponse);

        postDataResponse &&
        setUsernameMsg(<p className="warning">{postDataResponse.data.username_taken}</p>);

        postDataResponse &&
        setEmailMsg(<p className="warning">{postDataResponse.data.email_taken}</p>);
    }, [postDataResponse]);
    
    return (
        <div className="form-background">
            <div className='reg-log-form'>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <div className="field-group">
                        <label className="form-label">Username</label>
                        <input 
                            className="form-inpt" 
                            name="username"
                            value={values.username}
                            onChange={inputFieldChangeHandle}
                            onKeyUp={usernameOnkeyUpHandle}
                            onKeyDown={usernameOnKeyDownHandle}
                        />
                        {username_msg}
                        </div>

                        <div className="field-group">
                        <label className="form-label">Email</label>
                        <input 
                            className="form-inpt" 
                            name="email"
                            value={values.email}
                            onChange={inputFieldChangeHandle}
                            onKeyUp={emailOnkeyUpHandle}
                            onKeyDown={emailOnKeyDownHandle}
                        />
                        {email_msg}
                        </div>

                        <div className="field-group">
                        <label className="form-label">Password</label>
                        <input
                            type='password'
                            name="password"
                            className="form-inpt"
                            value={values.password}
                            onChange={inputFieldChangeHandle}
                            onKeyUp={passwordOnkeyUpHandle}
                            onKeyDown={passwordOnKeyDownHandle}
                        />
                        {password_msg}
                        </div>

                        <div className="field-group">
                        <label className="form-label">Repeat password</label>
                        <input
                            type='password'
                            className="form-inpt" 
                            name="repeatPassword"
                            value={values.repeatPassword}
                            onChange={inputFieldChangeHandle}
                            onKeyUp={repeatPasswordOnkeyUpHandle}
                            onKeyDown={repeatPasswordOnKeyDownHandle}
                        />
                        {repeatPassword_msg}
                        </div>
                    </div>
                    
                    <div className="form-buttons">
                        <button 
                        className="form-button"
                        >
                            Submit</button>
                        <button type="button" className="form-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;