import React, { useEffect } from "react";
import ErrorFlag from "../../../components/ui/ErrorFlag";
import useForm from "../../../hooks/useForm";

const InputSearchBar = ({ setSearchValue, inputPlaceholder }) => {
  const [formValues, handleInputSearch, reset] = useForm({
    searchValue: "",
  });
  const { searchValue } = formValues;

  const handleSubmitForSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setSearchValue(searchValue);
  }, [searchValue]);

  return (
    <form onSubmit={handleSubmitForSearch}>
      <div className="project-form_form-container admin-console_search-bar-container">
        <input
          type="text"
          autoFocus="true"
          name="searchValue"
          id="searchValue"
          className="project-form_input admin-console_search-input"
          autoComplete="off"
          value={searchValue}
          onChange={handleInputSearch}
          placeholder={inputPlaceholder}
        />
      </div>
    </form>
  );
};

export default InputSearchBar;
