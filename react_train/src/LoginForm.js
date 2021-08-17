import React, {useState} from 'react';
import sendToPhp from './sendToPhp';
import { useHistory, Redirect } from 'react-router-dom';


export const LoginForm = () => {
    //let history = useHistory();
    
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const inputFieldChangeHandle = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const {login} =  sendToPhp();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        login('http://localhost:5000/login.php', values.username, values.password)
            .then((response) => {
                localStorage.setItem("login_status", response.data.login_status);
                localStorage.setItem("username_session", response.data.logged_user);
            })
            .then( () => {
                console.log(localStorage.getItem("login_status"));
                if(localStorage.getItem("login_status")){
                    console.log(localStorage.getItem("login_status"));
                    return <Redirect to="/" />;
                }
                //localStorage.getItem("username_session") && history.push('/');
            });
    }

    
    return (
        <div className="form-background">
            <div className='reg-log-form'>
                <form method="post" onSubmit={handleFormSubmit}>
                    <div className="form-inputs">
                        <div className="field-group">
                        <label className="form-label">Username</label>
                        <input 
                            className="form-inpt" 
                            name="username"
                            value={values.username}
                            onChange={inputFieldChangeHandle}
                        />
                        </div>

                        
                        <div className="field-group">
                        <label className="form-label">Password</label>
                        <input
                            type='password'
                            name="password"
                            className="form-inpt"
                            value={values.password}
                            onChange={inputFieldChangeHandle}
                        />
                        </div>
                    </div>
                    
                    <div className="form-buttons">
                        <button 
                        className="form-button"
                        >
                            Login</button>
                        <button type="button" className="form-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
