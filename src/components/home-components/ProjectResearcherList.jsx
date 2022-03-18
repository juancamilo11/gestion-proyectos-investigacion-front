import React from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectResearcherItem from "./ProjectResearcherItem";

export const fakeResearcherList = [
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.perez@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCH_LEADER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.perez@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCH_LEADER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.perez@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCH_LEADER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.perez@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCH_LEADER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
];

const ProjectResearcherList = ({ researcherList, setResearcherList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {fakeResearcherList.length === 0 ? (
            <ErrorFlag
              message="Aún no hay investigadores agregados al proyecto"
              color="#f54d4d"
              fontColor="white"
              width="85%"
            />
          ) : (
            <h3 className="project-form__specific-objectives-title">
              Lista de investigadores
            </h3>
          )}
        </h3>
      </div>
      {researcherList.map((researcher) => (
        <ProjectResearcherItem
          {...researcher}
          setResearcherList={setResearcherList}
        />
      ))}
    </div>
  );
};

export default ProjectResearcherList;
