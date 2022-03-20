import React, { useEffect, useState } from "react";
import { startFetchAllPeople } from "../../actions/projectActions";
import InputSearchBar from "./components/InputSearchBar";
import PeopleInfoList from "./components/PeopleInfoList";
import { v4 as uuidv4 } from "uuid";
import ConsoleAdminNavbar from "./ConsoleAdminNavbar";

export const fakePeopleList = [
  {
    id: uuidv4(),
    displayName: "Juan Camilo Cardona Calderón",
    email: "camilo.cardona11@udea.edu.co",
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
    email: "luisa.marin122@udea.edu.co",
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
    email: "andrea.ochoa@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCHER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.usuga@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCHER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
  {
    id: uuidv4(),
    displayName: "Random name" + parseInt(Math.random() * 100),
    email: "pedrito.valencia@udea.edu.co",
    photoURL:
      "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    phoneNumber: "3122555499",
    dateOfEntry: "2020-05-10",
    role: "RESEARCHER",
    career: {
      name: "Ing. Química",
      code: "513",
    },
  },
];

const UserAdministrationConsole = () => {
  //Guardar este valor en el localStorage para la experiencia de usuario

  const [searchValue, setSearchValue] = useState("");

  const [peopleList, setPeopleList] = useState(fakePeopleList);

  useEffect(() => {
    // startFetchAllPeople().then((people) => {
    //   setPeopleList(people);
    // });

    setPeopleList(
      fakePeopleList.filter((person) =>
        person.email.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

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

      <PeopleInfoList peopleList={peopleList} setPeopleList={setPeopleList} />
    </div>
  );
};

export default UserAdministrationConsole;
