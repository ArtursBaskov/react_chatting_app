import React, {useState, useEffect} from 'react';
import ContactList from './ContactList';
import getDataFromPhp from './getDataFromPhp';
import ChatWindow from './ChatWindow';
const Home = () => {
    const [contactData, setContactData] = useState();
    const [messages, setMessages] = useState();
    const {getData, chatData} = getDataFromPhp(setContactData, setMessages);
    

    useEffect(() =>{
        getData('http://localhost:5000/getContacts.php');
    }, []);
    contactData && console.log(contactData);
    //get clicked contact`s messages from clicked contact
    const handleBlockClick = (id) => {
        chatData('http://localhost:5000/getMessages.php', id);
        console.log(messages);
    }
    return (
        <>
        <div className="contacts-chat">
            <ContactList 
            contactData={contactData} 
            handleBlockClick={handleBlockClick}
            />

            <ChatWindow msgs={messages}/>
        </div>
        </>
    )
}
export default Home;
