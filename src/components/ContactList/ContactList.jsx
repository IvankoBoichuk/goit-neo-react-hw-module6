import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css"
import { selectContacts } from "../../redux/contactsSlice";
import { selectFiltersName } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const searchQuery = useSelector(selectFiltersName)

    // Контакти, що відповідають пошуку
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery)
    );

    return <ul className={styles.contacts}>
        {filteredContacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </ul>
}

export default ContactList;