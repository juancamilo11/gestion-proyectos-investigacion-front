const buildResearchProject = (
  formValues,
  specificObjectives,
  researcherList
) => {
  return {
    ...formValues,
    id: formValues.projectId,
    projectObjective: {
      generalObjective: formValues.generalObjective,
      specificObjectiveList: specificObjectives,
    },
    researcherIdList: researcherList.map(
      (researcher) => researcher.basicResearcherInfo.id
    ),
    projectDuration: {
      startingDate: formValues.startingDate,
      endingDate: formValues.endingDate,
    },
  };
};

export default buildResearchProject;
