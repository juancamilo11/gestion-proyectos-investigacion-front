import moment from "moment";
import validator from "validator";
import { validateEmail } from "../login/emailDomainValidator";
import { getCareerByCode } from "./udeaCareers";

const userFormValidation = (
  { phoneNumber, dateOfEntry, careerCode },
  setErrorsState
) => {
  return validateFormValues(
    phoneNumber,
    dateOfEntry,
    careerCode,
    setErrorsState
  );
};

const validateFormValues = (
  phoneNumber,
  dateOfEntry,
  careerCode,
  setErrorsState
) => {
  return (
    validatePhoneNumber(phoneNumber, setErrorsState) &&
    validateDateOfEntry(dateOfEntry, setErrorsState) &&
    validateCareerCode(careerCode, setErrorsState)
  );
};

const setErrorStateForField = (
  setErrorsState,
  fieldName,
  hasErrors,
  message
) => {
  setErrorsState((state) => {
    return {
      ...state,
      [`${fieldName}`]: {
        hasErrors,
        message,
      },
    };
  });
};

const validatePhoneNumber = (phoneNumber, setErrorsState) => {
  const cellphoneRegex = new RegExp(
    "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$"
  );
  if (!cellphoneRegex.test(phoneNumber)) {
    setErrorStateForField(
      setErrorsState,
      "phoneNumber",
      true,
      "Error, el valor no corresponde a un número de teléfono"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "phoneNumber", false, "");
  return true;
};

const validateCareerCode = (careerCode, setErrorsState) => {
  if (getCareerByCode(careerCode) === null || careerCode === undefined) {
    setErrorStateForField(
      setErrorsState,
      "careerCode",
      true,
      "Error, no ha seleccionado ninguna carrera"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "careerCode", false, "");
  return true;
};

const validateDateOfEntry = (dateOfEntry, setErrorsState) => {
  const theDateOfEntry = moment(dateOfEntry);
  const now = moment();
  if (theDateOfEntry.isAfter(now)) {
    setErrorStateForField(
      setErrorsState,
      "dateOfEntry",
      true,
      "Error, la fecha de ingreso a la universidad debe estar en el pasado"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "dateOfEntry", false, "");
  return true;
};

export default userFormValidation;
