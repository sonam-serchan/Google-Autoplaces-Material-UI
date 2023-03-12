import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import usePlacesAutocomplete from 'use-places-autocomplete';

const PlacesAutocomplete: React.FC = () => {
  const {
    setValue,
    suggestions: { data },
  } = usePlacesAutocomplete({ debounce: 300 });

  return (
    <Autocomplete
      id='combo-box-demo'
      freeSolo
      options={data}
      sx={{ width: 400 }}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.description
      }
      filterOptions={(x) => x}
      renderInput={(params) => <TextField {...params} label='Movie' />}
      onInputChange={(event, newValue) => setValue(newValue)}
      renderOption={(props, option) => (
        <li {...props}>
          <img src='src/location.png' width={40} />
          {option.description}
        </li>
      )}
    />
  );
};

export default PlacesAutocomplete;
