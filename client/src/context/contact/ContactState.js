import React, { useReducer } from "react";
import { v1 as uuid } from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
} from "../../types";

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jill@gmail.com",
                phone: "111-111-1111",
                type: "personal",
            },
            {
                id: 2,
                name: "Sara Watson",
                email: "sara@gmail.com",
                phone: "222-222-2222",
                type: "personal",
            },
            {
                id: 3,
                name: "Harry White",
                email: "harry@gmail.com",
                phone: "333-333-3333",
                type: "professional",
            },
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add COntact

    const addContact = (contact) => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };
    // Delete Contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update Contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Filter Contacct
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text });
    };

    // Clear Contact
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
            }}
        >
            {props.children}
        </contactContext.Provider>
    );
};

export default ContactState;
