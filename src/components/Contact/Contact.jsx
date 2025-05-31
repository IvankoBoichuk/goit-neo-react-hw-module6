import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact : { name, number, id } }) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => dispatch(deleteContact(id))
    return <li className={styles.contact}>
        <ul>
            <li><FaUser /> {name}</li>
            <li><FaPhone /> {number}</li>
        </ul>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
}

export default Contact;