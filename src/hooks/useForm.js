import React, { useState } from "react";

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = (resetState) => {
    setFormValues(resetState);
  };

  return [formValues, handleInputChange, resetForm];
};

export default useForm;
