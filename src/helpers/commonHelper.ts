import {
  UPPER_CASE_CHARS,
  NUMBER_CHARS,
  SYMBOL_CHARS,
  LOWER_CASE_CHARS,
} from '../constants/constants';

export interface GeneratorOptions {
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export const generatePassword = (
  {includeLowercase, includeUppercase, includeNumbers, includeSymbols}: GeneratorOptions,
  pwLength: number
): string => {
  let characters = '';

  if (includeLowercase) characters += LOWER_CASE_CHARS;
  if (includeUppercase) characters += UPPER_CASE_CHARS;
  if (includeNumbers) characters += NUMBER_CHARS;
  if (includeSymbols) characters += SYMBOL_CHARS;

  let newPassword = '';
  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }

  return newPassword;
};
