import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";

const Contacts = () => {
    const contactsContext = useContext(ContactContext);

    const { contacts, filtered } = contactsContext;

    if (contacts.length === 0) {
        return <h4>Please Add a Contacts</h4>;
    }
    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map((contact) => (
                          <CSSTransition
                              key={contact.id}
                              timeout={500}
                              classNames="item"
                          >
                              <ContactItem contact={contact} />
                          </CSSTransition>
                      ))
                    : contacts.map((contact) => (
                          <CSSTransition
                              key={contact.id}
                              timeout={500}
                              classNames="item"
                          >
                              <ContactItem contact={contact} />
                          </CSSTransition>
                      ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
