import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import useStyles from './stylesApp';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Phonebook</h1>
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
