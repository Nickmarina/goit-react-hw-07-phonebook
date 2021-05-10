import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import useStyles from './styles';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

const getItem = id => state => state.items.find(item => item.id === id);

const ContactListItem = ({ id }) => {
  const classes = useStyles();
  const { name, number } = useSelector(getItem(id));
  console.log(id);
  const dispatch = useDispatch();
  const HandleDeleting = () => dispatch(deleteContact(id));

  return (
    <li className={classes.item} key={id}>
      {name}: <span className={classes.span}>{number}</span>
      <button className={classes.btn} type="button" onClick={HandleDeleting}>
        <PersonAddDisabledIcon fontSize="small" />
      </button>
    </li>
  );
};

export default ContactListItem;
