import React, { useCallback } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Search = React.memo(({ value, onChange }: SearchProps) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        onChange(event.target.value);
      },
      [onChange]
    );

  return (
    <TextField
      onChange={onChangeHandler}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
});
