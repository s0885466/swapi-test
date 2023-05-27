import React from 'react';
import { format } from 'date-fns';
import { Stack, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';

import { Person } from '../../model/types/person.types';
import { Maybe } from 'shared/model/types/main.types';

type PersonDetailsProps = {
  person: Maybe<Person>;
  isLoading: boolean;
};

export const PersonDetails = React.memo(
  ({ person, isLoading }: PersonDetailsProps) => {
    let content: React.ReactNode = null;

    if (isLoading) {
      content = <Skeleton width={470} height={470} variant="rectangular" />;
    }

    if (person && !isLoading) {
      const createdDate = format(new Date(person.created), 'MM/dd/yyyy HH:mm');
      const editedDate = format(new Date(person.edited), 'MM/dd/yyyy HH:mm');

      content = (
        <>
          <Typography variant="h2">{person.name}</Typography>
          <Link href={person.url}>
            <Typography variant="h5">api link</Typography>
          </Link>
          <Typography variant="h5">Created date: {createdDate}</Typography>
          <Typography variant="h5">Edited date: {editedDate}</Typography>
          <Typography variant="h5">Gender: {person.gender}</Typography>
          <Typography variant="h4">Films links</Typography>
          <Stack spacing={1} alignItems="flex-start">
            {person.films.map((filmUrl, index) => (
              <Link
                href={filmUrl}
                key={filmUrl}
                aria-label={`to film ${index}`}
              >
                <Typography variant="h5" key={filmUrl}>
                  {filmUrl}
                </Typography>
              </Link>
            ))}
          </Stack>
        </>
      );
    }

    return <Stack spacing={1}>{content}</Stack>;
  }
);
