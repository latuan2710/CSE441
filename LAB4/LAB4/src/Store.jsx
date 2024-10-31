import {configureStore, createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export const mapContacts = contact => {
  const {name, picture, phone, cell, email} = contact;
  return {
    id: uuidv4(),
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
    },
    addFavorite: (state, action) => {
      const {phone} = action.payload;

      let contact = state.contacts.find(contact => contact.phone === phone);
      contact.favorite = !contact.favorite;
    },
  },
});

export const {fetchContactsSuccess, addFavorite} = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store;
