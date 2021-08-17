import React from 'react'

let NavBar = (props) => {
    return (
        <div>
            <nav>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/signup">Sing Up</a>
                    <a href="/signin">Sing In</a>
                    {props.loginStatus && <a href="/logout">Logout</a>}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
