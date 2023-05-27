import React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type ModeSwitcherProps = {
  toggle: VoidFunction;
  isEdit: boolean;
  isLoading: boolean;
};

export const ModeSwitcher = ({
  toggle,
  isEdit,
  isLoading,
}: ModeSwitcherProps) => {
  let content: React.ReactNode = null;

  if (isLoading) {
    content = <Skeleton width="100%" height={36.5} variant="rectangular" />;
  }

  if (!isLoading && isEdit) {
    content = (
      <>
        <Typography variant="h5">Edit person</Typography>
        <Button onClick={toggle} color="warning">
          Cancel
        </Button>
      </>
    );
  }

  if (!isLoading && !isEdit) {
    content = (
      <>
        <Typography variant="h5">View person</Typography>
        <Button onClick={toggle}>Edit</Button>
      </>
    );
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {content}
    </Stack>
  );
};
