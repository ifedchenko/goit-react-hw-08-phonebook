import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/contacts/slice';
import { Lable } from './Filter.styled';
import { TextField } from '@mui/material';
const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filter(evt.target.value.toLowerCase()));
  };

  return (
    <div>
      <Lable>
        <TextField
          // id="name"
          label="Find contacts by name"
          variant="outlined"
          type="text"
          onChange={onChange}
        />
      </Lable>
    </div>
  );
};

export default Filter;
