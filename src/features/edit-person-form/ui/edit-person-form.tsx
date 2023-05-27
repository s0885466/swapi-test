import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { enUS } from '@mui/x-date-pickers/locales';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SxProps,
  Theme,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {
  nameValidator,
  genderValidator,
} from '../model/lib/edit-person-form-validators/edit-person-form-validators';
import { GENDER_VALUES } from '../model/constants/constants';
import { isValidDate } from 'shared/model/lib/is-valid-date/is-valid-date';
import { EditPersonFormSkeleton } from './edit-person-form-skeleton/edit-person-form-skeleton';
import { Person } from 'entities/person';

type EditPersonFormProps = {
  personData: Person;
  submit: (data: Person) => Promise<Person | string>;
  successUpdate: VoidFunction;
  isLoading: boolean;
  sx?: SxProps<Theme>;
};

export const EditPersonForm = React.memo(
  ({
    personData,
    submit,
    successUpdate,
    isLoading,
    sx,
  }: EditPersonFormProps) => {
    const {
      handleSubmit,
      control,
      reset,
      formState: { errors },
    } = useForm<Person>({
      mode: 'onSubmit',
      defaultValues: personData,
    });

    const onSubmit = useCallback(async (data: Person) => {
      try {
        await submit(data);
        successUpdate();
      } catch (error) {
        console.log(error);
      }
    }, []);

    const onReset = useCallback(() => {
      reset();
    }, [reset]);

    if (isLoading) {
      return <EditPersonFormSkeleton sx={{ marginTop: 2 }} />;
    }

    return (
      <Stack
        spacing={2}
        component="form"
        sx={sx}
        onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
      >
        <Controller
          name="name"
          control={control}
          rules={{ validate: nameValidator }}
          render={({ field }) => (
            <TextField
              fullWidth
              autoFocus
              value={field.value}
              label="name"
              onChange={field.onChange}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          rules={{ validate: genderValidator }}
          render={({ field }) => (
            <FormControl error={Boolean(errors.gender?.message)}>
              <InputLabel id="gender">gender</InputLabel>
              <Select
                id="gender"
                label="gender"
                fullWidth
                value={field.value}
                onChange={field.onChange}
                error={Boolean(errors.gender)}
              >
                {GENDER_VALUES.map((value) => (
                  <MenuItem value={value} key={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              {errors.gender?.message && (
                <FormHelperText>{errors.gender?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="created"
          render={({ field }) => (
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              localeText={
                enUS.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DateTimePicker
                label="Created"
                value={new Date(field.value)}
                onChange={(value) => {
                  if (isValidDate(value)) {
                    field.onChange(value?.toISOString());
                  }
                }}
              />
            </LocalizationProvider>
          )}
        />
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button type="submit" variant="contained">
            Save
          </Button>
          <Button type="reset" color="warning">
            Reset
          </Button>
        </Stack>
      </Stack>
    );
  }
);
