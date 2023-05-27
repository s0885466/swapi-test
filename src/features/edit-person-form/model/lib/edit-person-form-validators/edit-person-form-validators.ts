import {
  GENDER_VALUES,
  NAME_FIELD_ERROR_MESSAGE,
  GENDER_FIELD_ERROR_MESSAGE,
} from '../../constants/constants';

export const nameValidator = (value: string): string | undefined => {
  if (value.trim().length < 4) {
    return NAME_FIELD_ERROR_MESSAGE;
  }
};

export const genderValidator = (gender: string): string | undefined => {
  const isValid = GENDER_VALUES.some((value) => value === gender);
  if (!isValid) {
    return GENDER_FIELD_ERROR_MESSAGE;
  }
};
