import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faTrash,
    faLocationDot,
    faPhoneFlip,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    return (
        <div className="col-12 mb-3">
            <div className="card d-flex flex-row align-items-center">
                <img
                    src={contact.imgUrl || "https://www.nobbot.com/wp-content/uploads/2016/04/foto-perfil.jpg"}
                    alt="Profile"
                    className="rounded-circle m-3"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text mb-1">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-danger mr-2"
                            style={{ marginRight: "10px" }}
                        />
                        {contact.address}
                    </p>
                    <p className="card-text mb-1">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-primary mr-2"
                            style={{ marginRight: "10px" }}
                        />
                        {contact.email}
                    </p>
                    <p className="card-text mb-1">
                        <FontAwesomeIcon
                            icon={faPhoneFlip}
                            className="text-success mr-2"
                            style={{ marginRight: "10px" }}
                        />
                        {contact.phone}
                    </p>
                </div>
                <div className="ml-auto d-flex flex-column align-items-center m-3">
                    <Link to={`/add-contact/${contact.id}`}>
                        <button className="btn btn-warning mr-2">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            actions.deleteContact(contact.id);
                            actions.fetchContacts();
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
};

