import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorFlag from "../../../components/ui/ErrorFlag";
import PersonInfoItem from "./PersonInfoItem";

const PeopleInfoList = ({ peopleListToShow, setPeopleList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {peopleListToShow.length === 0 && (
            <ErrorFlag
              message="Aún no hay personas registradas en la aplicación"
              color="#f54d4d"
              fontColor="white"
              width="90%"
            />
          )}
        </h3>
      </div>
      <p>Lista de administrador de plataforma</p>
      <hr />
      {peopleListToShow
        .filter((researcher) => researcher.role === "ADMINISTRATOR")
        .map((researcher) => (
          <PersonInfoItem {...researcher} setPeopleList={setPeopleList} />
        ))}
      <p>Líderes de Investigación</p>
      <hr />
      {peopleListToShow
        .filter((researcher) => researcher.role === "RESEARCH_LEADER")
        .map((researcher) => (
          <PersonInfoItem {...researcher} setPeopleList={setPeopleList} />
        ))}
      <p>Investigadores</p>
      <hr />
      {peopleListToShow
        .filter((researcher) => researcher.role === "RESEARCHER")
        .map((researcher) => (
          <PersonInfoItem {...researcher} setPeopleList={setPeopleList} />
        ))}
    </div>
  );
};

export default PeopleInfoList;
