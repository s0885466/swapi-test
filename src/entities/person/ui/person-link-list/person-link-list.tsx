import React, { useMemo } from 'react';
import { Stack, SxProps, Theme, Typography } from '@mui/material';

import { Person } from '../../model/types/person.types';
import { PersonLink } from '../person-link/person-link';
import { PersonLinkSkeleton } from '../person-link-skeleton/person-link-skeleton';
import { NO_PERSON_MESSAGE } from '../../model/constants/constants';

type PersonLinkListProps = {
  people?: Person[];
  isLoading: boolean;
  sx?: SxProps<Theme>;
};

const SKELETONS_NUMBER = 10;

export const PersonLinkList = React.memo(
  ({ people, isLoading }: PersonLinkListProps) => {
    const skeletonIndexes = useMemo(
      () => Array.from({ length: SKELETONS_NUMBER }, (_, index) => index),
      []
    );

    return (
      <Stack spacing={2} alignItems="start">
        {isLoading &&
          skeletonIndexes.map((index) => <PersonLinkSkeleton key={index} />)}
        {!isLoading &&
          people?.map((person, index) => (
            <PersonLink key={index} name={person.name} personId={index + 1} />
          ))}
        {people && people.length < 1 && (
          <Typography data-testid="noPersonMessage">
            {NO_PERSON_MESSAGE}
          </Typography>
        )}
      </Stack>
    );
  }
);
