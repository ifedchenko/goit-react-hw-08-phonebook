import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/contacts/selectors';
import { FormBody, Label, Input, AddContactBtn } from './Form.styled';
import { ButtonLoader } from 'components/Loader/Loader';
import { TextField, Button } from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const contactsStorage = useSelector(getContacts);

  const addNewContact = (name, number) => {
    const isContactExist = contactsStorage.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExist) {
      setIsLoading(true);

      // const id = nanoid();
      dispatch(addContact({ name, number }))
        .then(() => {
          Notiflix.Notify.success(`You added contact with name "${name}"`);
          setName('');
          setNumber('');
        })
        .catch(error => {
          console.log('Error:', error);
          Notiflix.Notify.failure('Contact could not be added');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      Notiflix.Notify.failure(`The name "${name}" already exists!`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addNewContact(name, number);
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value.trim());
    }
  };

  return (
    <FormBody onSubmit={handleSubmit}>
      <Label>
        {/* Name */}
        {/* <Input
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required  
          onChange={onInputChange}
        /> */}
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </Label>

      <Label>
        {/* Number
        <Input
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        /> */}
        <TextField
          id="tel"
          label="Phone number"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </Label>
      {/* <AddContactBtn
        type="submit">
        {isLoading ? <ButtonLoader height="18" width="18" /> : 'Add contact'}
      </AddContactBtn> */}
      <Button variant="contained" type="submit">
        {isLoading ? (
          <ButtonLoader height="24.5" width="24.5" />
        ) : (
          'Add contact'
        )}
      </Button>
    </FormBody>
  );
};

export default Form;
