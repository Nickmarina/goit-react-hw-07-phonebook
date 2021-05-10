import { useSelector } from 'react-redux';
import useStyles from './styles';
import ContactListItem from '../ContactListItem';

// const getContacts = state => state.items;
const filteredContacts = state => {
  const normalizedContact = state.filter.toLowerCase();
  return state.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );
};

const ContactList = () => {
  const classes = useStyles();
  const contacts = useSelector(filteredContacts);
  return (
    <ul className={classes.list}>
      {contacts.map(({ id }) => (
        <ContactListItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
