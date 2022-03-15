import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { projects, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOpenSearchPanel = (e) => {
    e.preventDefault();
    dispatch(activeSearchPanel());
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
  };

  return (
    <aside className="memory-catalog__sidebar">
      <div className="memory-catalog__sidebar-navbar">
        <div className="memory-catalog__sidebar-user-info">
          {auth?.photoUrl ? (
            <img
              src={auth.photoUrl}
              alt="profile pic"
              className="memory-catalog__img-profile"
            />
          ) : (
            <i className="fas fa fa-user-circle memory-catalog__logo-profile"></i>
          )}
          <span className="memory-catalog__display-name"> {auth.name}</span>
        </div>
        <div className="memory-catalog__sidebar-buttons">
          <button
            className="memory-catalog__search-button"
            onClick={handleOpenSearchPanel}
          >
            Buscar y filtrar
          </button>
          <button
            className="memory-catalog__logout-button"
            onClick={handleLogout}
          >
            Salir
          </button>
        </div>
      </div>
      <MemoryEntries memories={memories} />
    </aside>
  );
};

export default Sidebar;
