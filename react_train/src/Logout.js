import React, {useEffect} from 'react';

export const Logout = (props) => {
    console.log(props);
    console.log(props.loginStatus);
    const removeSessions = () => {
        
        if(props.loginStatus){
            window.localStorage.removeItem("login_status");
            window.localStorage.removeItem("username_session");
        }
    }
    useEffect( () => {
        removeSessions();
    }, [props.loginStatus]);
    
    return (
        <>
        <p>User logged out</p>
        </>
    );
}
