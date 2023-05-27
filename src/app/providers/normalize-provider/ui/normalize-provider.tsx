import React, { PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export const NormalizeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
