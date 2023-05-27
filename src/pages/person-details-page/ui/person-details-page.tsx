import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material';

import { useRequest } from 'shared/model/hooks/use-request';
import { fetchPerson } from 'entities/person';
import { PersonDetails } from 'entities/person/ui/person-details/person-details';
import { EditPersonForm } from 'features/edit-person-form';
import { ModeSwitcher } from './mode-swither/mode-switcher';
import { updatePerson } from 'entities/person';

const PersonDetailsPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams<{ id: string }>();

  const [
    personData,
    {
      doRequest: requestPerson,
      isLoading: isLoadingPerson,
      error: errorFetchPerson,
    },
  ] = useRequest(fetchPerson);

  const [
    updatedPerson,
    {
      doRequest: updatePersonRequest,
      isLoading: isLoadingUpdatePerson,
      error: errorUpdatePerson,
    },
  ] = useRequest(updatePerson);

  useEffect(() => {
    requestPerson(Number(id));
  }, [requestPerson]);

  const toggleEdit = useCallback(() => {
    setIsEdit((prevEdit) => !prevEdit);
  }, []);

  const personFormSx: SxProps<Theme> = useMemo(
    () => ({
      marginTop: '20px',
    }),
    []
  );

  const successUpdate = useCallback(() => {
    toggleEdit();
  }, [toggleEdit]);

  return (
    <Stack padding={2}>
      <ModeSwitcher
        isEdit={isEdit}
        isLoading={isLoadingPerson}
        toggle={toggleEdit}
      />
      {!isEdit && (
        <PersonDetails person={personData} isLoading={isLoadingPerson} />
      )}
      {isEdit && personData && (
        <EditPersonForm
          personData={personData}
          submit={updatePersonRequest}
          successUpdate={successUpdate}
          isLoading={isLoadingUpdatePerson}
          sx={personFormSx}
        />
      )}
    </Stack>
  );
};

export default PersonDetailsPage;
