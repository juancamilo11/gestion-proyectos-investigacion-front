import validator from "validator";
import moment from "moment";

const projectFormValidation = (formValues, setErrorsState) => {
  return validateFormValues(formValues, setErrorsState);
};

const getCurrentDate = () => new Date().toISOString().split("T")[0];

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

const validateFormValues = (formValues, setErrorsState) => {
  const {
    name,
    budget,
    generalObjective,
    startingDate,
    endingDate,
    description,
  } = formValues;

  return (
    validateProjectName(name, setErrorsState) &&
    validateProjectDescription(description, setErrorsState) &&
    validateProjectBudget(budget, setErrorsState) &&
    validateProjectGeneralObjective(generalObjective, setErrorsState) &&
    validateProjectStartingDate(startingDate, setErrorsState) &&
    validateProjectEndingDate(endingDate, setErrorsState) &&
    validateProjectDates(startingDate, endingDate, setErrorsState)
  );
};

const validateProjectName = (name, setErrorsState) => {
  if (name.trim().length < 5 || name.trim().length > 60) {
    setErrorStateForField(
      setErrorsState,
      "name",
      true,
      "Error, el nombre del proyecto debe tener entre 5 y 60 caracteres"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "name", false, "");
  return true;
};

const validateProjectBudget = (budget, setErrorsState) => {
  if (parseFloat(budget) <= 0) {
    setErrorStateForField(
      setErrorsState,
      "budget",
      true,
      "Error, el presupuesto asignado para el proyecto debe ser mayor a cero COP"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "budget", false, "");
  return true;
};

const validateProjectGeneralObjective = (generalObjective, setErrorsState) => {
  if (
    generalObjective.trim().length < 5 ||
    generalObjective.trim().length > 60
  ) {
    setErrorStateForField(
      setErrorsState,
      "generalObjective",
      true,
      "Error, el objetivo general del proyecto debe tener entre 5 y 60 caracteres"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "generalObjective", false, "");
  return true;
};

const validateProjectStartingDate = (startingDate, setErrorsState) => {
  const theStartingDate = moment(startingDate);
  const now = moment();
  if (theStartingDate.isBefore(now)) {
    setErrorsState((state) => {
      const endingDate = state.duration.endingDate;
      return {
        ...state,
        duration: {
          endingDate,
          startingDate: {
            hasErrors: true,
            message:
              "Error, La fecha de inicio del proyecto debe estar en el futuro.",
          },
        },
      };
    });
    return false;
  }
  setErrorStateForField(setErrorsState, "startingDate", false, "");
  return true;
};

const validateProjectEndingDate = (endingDate, setErrorsState) => {
  const theEndingDate = moment(endingDate);
  const now = moment();
  if (theEndingDate.isBefore(now)) {
    setErrorsState((state) => {
      const startingDate = state.duration.startingDate;
      return {
        ...state,
        duration: {
          startingDate,
          endingDate: {
            hasErrors: true,
            message:
              "Error, La fecha de finalización del proyecto debe estar en el futuro.",
          },
        },
      };
    });
    return false;
  }
  setErrorStateForField(setErrorsState, "endingDate", false, "");
  return true;
};

const validateProjectDates = (startingDate, endingDate, setErrorsState) => {
  const theStartingDate = moment(startingDate);
  const theEndingDate = moment(endingDate);

  if (theEndingDate.isBefore(theStartingDate)) {
    setErrorsState((state) => {
      const startingDate = state.duration.startingDate;
      return {
        ...state,
        duration: {
          startingDate,
          endingDate: {
            hasErrors: true,
            message:
              "Error, La fecha de finalización del proyecto debe estar después que la fecha de inicio.",
          },
        },
      };
    });
    return false;
  }
  setErrorStateForField(setErrorsState, "endingDate", false, "");
  return true;
};

const validateProjectDescription = (description, setErrorsState) => {
  if (description.trim().length < 5 || description.trim().length > 60) {
    setErrorStateForField(
      setErrorsState,
      "description",
      true,
      "Error, la descripción del proyecto debe tener entre 5 y 60 caracteres"
    );
    return false;
  }
  setErrorStateForField(setErrorsState, "description", false, "");
  return true;
};

export default projectFormValidation;
