import React from 'react';

const ChatWindow = (props) => {
    //console.log(props.msgs);
    return (
        
        <div className="chatWindow">
        {
        props.msgs && props.msgs.map(msgBlock =>  (
            <div className="message-block" key={msgBlock.username}>

                <img src={require('./img2.jpg').default}></img>
                <div>
                    <h1>{msgBlock.username}</h1>

                    <div className="message-content">
                        <p>{msgBlock.msg_text}</p>
                    </div>
                </div>
            </div>
        ))
        }
        </div>
        
    )
}
export default ChatWindow;