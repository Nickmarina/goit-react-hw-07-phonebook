import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import useStyles from './stylesApp';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { getContacts } from './redux/contacts-operations';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Phonebook
        <ContactPhoneIcon className={classes.icon} fontSize="large" />
      </h1>
      <div className={classes.main}>
        <ContactForm />
        <h2 className={classes.contactsTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
