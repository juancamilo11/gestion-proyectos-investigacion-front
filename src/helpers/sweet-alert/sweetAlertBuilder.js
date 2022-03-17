import Swal from "sweetalert2";

export const sweetAlertForSearchAndFilterProjectsBuilder = (dispatch) =>
  Swal.fire({
    title: "Búsqueda y filtro de proyectos de investigación",
    text: "Ingresa el nombre del proyecto",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Buscar",
    showLoaderOnConfirm: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    preConfirm: async (searchValue) => {
      try {
        return await searchValue;
      } catch (error) {}
    },
  });

export const sweetAlertForRequestResponseError = () =>
  Swal.fire({
    icon: "error",
    title:
      "Error en la petición para obtener todos los investigadores de este proyecto",

    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
  });
