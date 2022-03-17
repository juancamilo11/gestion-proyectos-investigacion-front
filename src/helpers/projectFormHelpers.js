const getLocalDate = () => {
  return new Date().toISOString().split("T")[0];
};

export const formInitialValues = {
  id: "",
  description: "",
  name: "",
  budget: "",
  objective: { generalObjective: "", specificObjectives: [] },
  duration: { startingDate: getLocalDate(), endingDate: getLocalDate() },
  currentEmail: "",
  currentSpecificObjective: "",
};

export const formInitialErrorState = {
  description: { hasErrors: false, message: "" },
  name: { hasErrors: false, message: "" },
  budget: { hasErrors: false, message: "" },
  objective: {
    generalObjective: { hasErrors: false, message: "" },
    specificObjectives: { hasErrors: false, message: "" },
  },
  duration: {
    startingDate: { hasErrors: false, message: "" },
    endingDate: { hasErrors: false, message: "" },
  },
  currentEmail: { hasErrors: false, message: "" },
  currentSpecificObjective: { hasErrors: false, message: "" },
};

export const getInitialFormValuesForUpdating = (activeMemoryToUpdate) => ({
  id: activeMemoryToUpdate.id,
  description: activeMemoryToUpdate.description,
  name: activeMemoryToUpdate.name,
  budget: activeMemoryToUpdate.budget,
  objective: activeMemoryToUpdate.objective,
  currentEmail: activeMemoryToUpdate.currentEmail,
  currentSpecificObjective: activeMemoryToUpdate.currentSpecificObjective,
  duration: activeMemoryToUpdate.duration,
});
