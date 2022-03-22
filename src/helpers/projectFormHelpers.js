import { v4 as uuidv4 } from "uuid";

const getCurrentDate = () => new Date().toISOString().split("T")[0];

export const formInitialValues = {
  projectId: uuidv4(),
  name: "",
  budget: "",
  generalObjective: "",
  startingDate: getCurrentDate(),
  endingDate: getCurrentDate(),
  description: "",

  currentEmail: "",
  currentSpecificObjective: "",
};

// export const formInitialValues = {
//   projectId: uuidv4(),
//   name: "Nombre de prueba",
//   budget: "2500000",
//   generalObjective: "General objetive de prueba",
//   startingDate: getCurrentDate(),
//   endingDate: getCurrentDate(),
//   description: "Descripción de pruebaaaaa",

//   currentEmail: "juancamilo19997814@gmail.com",
//   currentSpecificObjective: "Objetivo específico actual",
// };

export const getInitialFormValuesForUpdating = (activeMemoryToUpdate) => ({
  projectId: activeMemoryToUpdate.projectId,
  name: activeMemoryToUpdate.name,
  budget: activeMemoryToUpdate.budget,
  generalObjective: activeMemoryToUpdate.objective.generalObjective,
  startingDate: activeMemoryToUpdate.duration.startingDate,
  endingDate: activeMemoryToUpdate.duration.endingDate,
  description: activeMemoryToUpdate.description,

  currentEmail: "",
  currentSpecificObjective: "",
});

export const formInitialErrorState = {
  // projectId: { hasErrors: false, message: "" },
  name: { hasErrors: false, message: "" },
  budget: { hasErrors: false, message: "" },
  objective: {
    generalObjective: { hasErrors: false, message: "" },
    specificObjectiveList: { hasErrors: false, message: "" },
  },
  duration: {
    startingDate: { hasErrors: false, message: "" },
    endingDate: { hasErrors: false, message: "" },
  },
  description: { hasErrors: false, message: "" },
  researcherList: { hasErrors: false, message: "" },

  currentEmail: { hasErrors: false, message: "" },
  currentSpecificObjective: { hasErrors: false, message: "" },
};
