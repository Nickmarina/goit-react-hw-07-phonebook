import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import useStyles from './styles';

const getItem = id => state => state.items.find(item => item.id === id);

const ContactListItem = ({ id }) => {
  const classes = useStyles();
  const { name, number } = useSelector(getItem(id));
  console.log(id);
  const dispatch = useDispatch();
  const HandleDeleting = () => dispatch(deleteContact({ id }));

  return (
    <li className={classes.item} key={id}>
      {name}: <span className={classes.span}>{number}</span>
      <button className={classes.btn} type="button" onClick={HandleDeleting}>
        X
      </button>
    </li>
  );
};

export default ContactListItem;
