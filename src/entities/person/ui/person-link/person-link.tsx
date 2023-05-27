import React from 'react';
import Link from '@mui/material/Link';

import { getPersonDetailsLink } from '../../model/lib/get-person-details-link/get-person-details-link';

type PersonLinkProps = {
  name: string;
  personId: IdNumber;
};

export const PersonLink = React.memo(({ name, personId }: PersonLinkProps) => {
  const href = getPersonDetailsLink(personId);

  return (
    <Link href={href} aria-label={`link to ${name}`} data-testid="PersonLink">
      {name}
    </Link>
  );
});
