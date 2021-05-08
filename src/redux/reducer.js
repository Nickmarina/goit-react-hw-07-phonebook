import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const items = createReducer(initialState.contacts.items, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});
const filter = createReducer(initialState.contacts.filter, {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
