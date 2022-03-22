import React, { useEffect, useState } from "react";
import { startFetchAllPeople } from "../../actions/projectActions";
import InputSearchBar from "./components/InputSearchBar";
import PeopleInfoList from "./components/PeopleInfoList";
import ConsoleAdminNavbar from "./ConsoleAdminNavbar";

const UserAdministrationConsole = () => {
  //Guardar este valor en el localStorage para la experiencia de usuario

  const [searchValue, setSearchValue] = useState("");

  const [peopleList, setPeopleList] = useState([]);
  const [peopleListToShow, setPeopleListToShow] = useState([]);

  useEffect(() => {
    setPeopleListToShow(
      peopleList.filter((person) =>
        person.basicResearcherInfo.email
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  useEffect(() => {
    startFetchAllPeople().then((allPeople) => {
      setPeopleList(allPeople);
      setPeopleListToShow(allPeople);
    });
  }, []);

  return (
    <div className="admin-console__main-container">
      <ConsoleAdminNavbar />

      <h2 className="admin-console__main-title">
        Lista completa de líderes e investigadores
      </h2>

      <InputSearchBar
        setSearchValue={setSearchValue}
        inputPlaceholder="Ingresa el correo del investigador/Líder de investigación que deseas buscar"
      />

      <PeopleInfoList
        peopleListToShow={peopleListToShow}
        setPeopleList={setPeopleList}
      />
    </div>
  );
};

export default UserAdministrationConsole;
