import { useState, useMemo } from 'react';

export const usePasswordValidator = (password) => {
  const lower = useMemo(() => new RegExp('(?=.*[a-z])'), []);
  const upper = useMemo(() => new RegExp('(?=.*[A-Z])'), []);
  const number = useMemo(() => new RegExp('(?=.*[0-9])'), []);
  const special = useMemo(() => new RegExp('(?=.*[!@#$%^&*_])'), []);
  const length = useMemo(() => new RegExp('(?=.{12,})'), []);
  const [validations, setValidations] = useState({
    lowerValidated: false,
    upperValidated: false,
    numberValidated: false,
    characterValidated: false,
    lengthValidated: false,
  });

  const validatePassword = (password) => {
    const lowerValidated = lower.test(password);
    const upperValidated = upper.test(password);
    const numberValidated = number.test(password);
    const characterValidated = special.test(password);
    const lengthValidated = length.test(password);

    setValidations({
      lowerValidated,
      upperValidated,
      numberValidated,
      characterValidated,
      lengthValidated,
    });
  };
  useMemo(() => {
    validatePassword(password);
  }, [password]);

  return validations;
};

// const validations = usePasswordValidator(password);

// const onFocusRepeat = () => {
//   if (!samePasswordMessage) {
//     setSamePasswordMessage(false);
//   }
//   setIsRepeatPasswordFocused(true);
//   const values = Object.values(validations);
//   for (let x in values) {
//     if (!values[x]) {
//       setIsOpenTextValidations(true);
//       setIsPasswordValid(false);
//       break;
//     } else {
//       setIsPasswordValid(true);
//     }
//   }
// };