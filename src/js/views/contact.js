import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";

export const Contact = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.createAgenda();
        actions.fetchContacts();
        console.log(store.contacts);
        
    }, []);

    return (
        <div className="container">
            <div className="row">
                {store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
            <Link to="/add-contact">
                <button className="btn btn-primary mt-3">Add New Contact</button>
            </Link>
        </div>
    );
};
