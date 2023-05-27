import React from 'react';
import Pagination from '@mui/material/Pagination';

type PaginationComponentProps = {
  page: number;
  count: number;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export const PaginationComponent = React.memo(
  ({ page, onChange, count, disabled = false }: PaginationComponentProps) => {
    return (
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
);
