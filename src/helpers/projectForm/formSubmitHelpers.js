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

const currentJSON = {
  projectId: "123",
  name: "Proyecto de prueba 1",
  budget: 3500,
  description: "descripción de este proyecto",
  generalObjective: "Objetivo general de prueba",
  startingDate: "2023-03-15",
  endingDate: "2025-05-20",
  currentEmail: "",
  currentSpecificObjective: "",
  specificObjectives: [
    {
      description: "Descripción objetivo específico 1",
      completed: true,
    },
    {
      description: "Descripción objetivo específico 2",
      completed: true,
    },
    {
      description: "Descripción objetivo específico 3",
      completed: false,
    },
    {
      description: "Descripción objetivo específico 4",
      completed: true,
    },
  ],
  researcherList: [
    {
      basicResearcherInfo: {
        id: "QRaRdBUKGVZ1LVhjmoKdKVaH5th1",
        displayName: "JUAN CAMILO CARDONA CALDERON",
        email: "juan.cardona69@udea.edu.co",
        photoURL:
          "https://lh3.googleusercontent.com/a-/AOh14GjyzI5opneCnFe6QtKGzbQnZFrYsIeG9o8yx3RjhA=s96-c",
      },
      phoneNumber: "NN",
      dateOfEntry: "2022-03-20",
      role: "RESEARCHER",
      career: {
        name: "NN",
        code: "NN",
      },
    },
    {
      basicResearcherInfo: {
        id: "EnqKFDrrAnZetBXSF626docthgK2",
        displayName: "Gestión de Proyectos de Investigación",
        email: "gestion.proyectos.inv.udea@gmail.com",
        photoURL:
          "https://lh3.googleusercontent.com/a/AATXAJynHuRkU-eA8919PuN5OUFkf63mamss37PT9RTJ=s96-c",
      },
      phoneNumber: "NN",
      dateOfEntry: "2022-03-20",
      role: "RESEARCH_LEADER",
      career: {
        name: "NN",
        code: "NN",
      },
    },
  ],
};

const validJSON = {
  id: "567",
  name: "Proyecto de prueba",
  budget: 3500,
  description: "descripción de este proyecto",
  projectObjective: {
    generalObjective: "Objetivo general de prueba",
    specificObjectiveList: [
      {
        description: "Descripción objetivo específico 1",
        completed: true,
      },
      {
        description: "Descripción objetivo específico 2",
        completed: true,
      },
      {
        description: "Descripción objetivo específico 3",
        completed: false,
      },
      {
        description: "Descripción objetivo específico 4",
        completed: true,
      },
    ],
  },
  researcherIdList: ["QRaRdBUKGVZ1LVhjmoKdKVaH5th1"],
  projectDuration: {
    startingDate: "2020-03-15",
    endingDate: "2020-05-20",
  },
};
