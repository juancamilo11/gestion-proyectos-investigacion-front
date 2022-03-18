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

export const sweetAlertForInvalidUserEmail = (email) =>
  Swal.fire({
    icon: "error",
    title:
      "El correo electrónico no corresponde al dominio de la Universidad de Antioquia",
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
  });

export const sweetAlertForDeleteAResearchFromAProject = async (
  displayName,
  photoURL
) =>
  Swal.fire({
    icon: "warning",
    title: "Eliminación de un investigador",
    html: `¿Realmente desea eliminar el investigador <b>${displayName}</b> del proyecto de investigación?`,
    footer: `<small><b>Esta acción no se puede deshacer</b></small>`,
    imageUrl: { photoURL },
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    timerProgressBar: true,
    timer: 10000,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });
