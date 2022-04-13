import React, {useState} from "react";
import AddContact from "../components/AddContact";
import ContactCard from "../components/ContactCard";

const Contacts = (props) => {
    const contactsContainerStyle = {
        width: '400px',
        height: '600px',
        backgroundColor: 'white',
        border: '4px solid #DBABBE',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    
    const contactCardsWrapperStyle = {
        width: '100%',
        flexGrow: '2',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        alignItems: 'center'
    }
    
    const [contacts, setContacts] = useState([])
    
    const addContactHandler = (name, tel) => {
        setContacts([...contacts, {name: name, telephone: tel}]);
        console.log('added')
    }

    const deleteContactHandler = (contactIndex) => {
        setContacts(contacts.filter((c, idx) => contactIndex !== idx))
    }

    return <div style={contactsContainerStyle}>
        <AddContact addContact={addContactHandler}/>
        <div style={contactCardsWrapperStyle}>
        {contacts.map((contact, idx) => (
            <ContactCard 
            key={idx} 
            name={contact.name}
            tel={contact.telephone}
            deleteContact={() => deleteContactHandler(idx)}
            />))}
        </div>
    </div>
};

export default Contacts;