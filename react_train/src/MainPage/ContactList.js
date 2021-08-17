import React, {useState, useEffect} from 'react';
import getDataFromPhp from './getDataFromPhp';
import ChatWindow from './ChatWindow';

const ContactList = (props) => {
    
   
    return (
        <>
        <div 
            className="contactList-container"
        >
            <div className="contact-list">
                {
                    props.contactData &&
                    props.contactData.map(contact => (
                        <div 
                            className="contact-block" 
                            key={contact.id_chat_group}
                            onClick={() => props.handleBlockClick(contact.id_chat_group)}
                        >
                            <div className="contact-image">
                                <img src={require('./img2.jpg').default}></img>
                            </div>
                            <div className="contact-info">
                                <p className="contact-name">{contact.group_name}</p>
                                <p className="message-prewiev">{contact.last_msg}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        </>
    )
}
export default ContactList;