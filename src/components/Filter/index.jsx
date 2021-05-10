import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts-actions';
import useStyles from './styles';

const Filter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(filterContacts(e.target.value));
  return (
    <div>
      <h4 className={classes.title}>Find contacts by name</h4>
      <input
        className={classes.input}
        placeholder="Enter the name"
        type="text"
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default Filter;
