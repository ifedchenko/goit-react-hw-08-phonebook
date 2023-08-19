import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { List, ListItem, P } from './Contact.styled';
import { Loader, ButtonLoader } from 'components/Loader/Loader';
import { Button } from '@mui/material';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPageDidMount, setIsPageDidMount] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    setIsPageDidMount(true);
    dispatch(fetchContacts())
      .then(() => {
        setIsPageDidMount(false);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setIsPageDidMount(false);
      });
  }, [dispatch]);

  const handleDeleteContact = id => {
    setIsLoading(prevState => ({ ...prevState, [id]: true }));
    dispatch(deleteContact(id))
      .then(() => {
        setIsLoading(prevState => ({ ...prevState, [id]: false }));
        Notiflix.Notify.success('Contact deleted');
      })
      .catch(error => {
        setIsLoading(prevState => ({ ...prevState, [id]: false }));
        console.error('Error deleting contact:', error);
        Notiflix.Notify.failure('Failed to delete contact');
      });
  };

  return (
    <>
      {isPageDidMount ? (
        <Loader height="80" width="80" />
      ) : (
        <List>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <ListItem key={id}>
                <P>
                  {name}: {number}
                  {/* <DeleteButton
                    type="button"
                    onClick={() => handleDeleteContact(id)}
                  >
                    {isLoading[id] ? (
                      <ButtonLoader height="18" width="18" />
                    ) : (
                      'Delete'
                    )}
                  </DeleteButton> */}
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => handleDeleteContact(id)}
                    size="small"
                  >
                    {isLoading[id] ? (
                      <ButtonLoader height="22.75" width="22.75" />
                    ) : (
                      'Delete'
                    )}
                  </Button>
                </P>
              </ListItem>
            ))}
        </List>
      )}
    </>
  );
};

export default Contact;
