import Swal from "sweetalert2";
import { appRoles } from "../user-info/userRoles";

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

export const sweetAlertForRequestResponseError = (message) =>
  Swal.fire({
    icon: "error",
    text: `${message || "Falta definir el mensaje"}`,

    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
  });

export const sweetAlertForInvalidUserEmail = (email) =>
  Swal.fire({
    icon: "error",
    text: "El correo electrónico no corresponde al dominio de la Universidad de Antioquia",
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

export const sweetAlertForDeleteAPersonFromApplication = async (
  displayName,
  photoURL
) =>
  Swal.fire({
    icon: "warning",
    title: "Eliminación de una persona de la aplicación",
    html: `¿Realmente desea eliminar a <b>${displayName}</b> de la aplicación?`,
    footer: `<h4><b>Se eliminará de todos los proyectos en los que está matriculado</b></h4>`,
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

export const sweetAlertForChangeRoleToUser = (
  displayName,
  photoURL,
  selectedRole
) =>
  Swal.fire({
    icon: "warning",
    title: "Cambio de rol a un usuario",
    html: `¿Realmente desea cambiar el rol de usuario a <b>${displayName}</b> como <b>${
      appRoles.find((role) => role.value === selectedRole).label
    }</b> en la aplicación?`,
    footer: `<h4><b>${
      selectedRole === "RESEARCHER"
        ? "Se eliminará de todos los proyectos en los que está matriculado como investigador"
        : "Se eliminarán todos los proyectos de investigación que esté liderando en el momento"
    }</b></h4>`,
    imageUrl: { photoURL },
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    timerProgressBar: true,
    timer: 30000,
    confirmButtonText: "Confirmar cambio",
    cancelButtonText: "Cancelar",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetAlertForDeleteAProjectFromApplication = (
  name,
  budget,
  duration
) =>
  Swal.fire({
    icon: "warning",
    title: "Eliminación de un proyecto de la aplicación",
    html: `¿Realmente desea eliminar el proyecto <b>${name}</b> de la aplicación, el cual se habilitó para el periodo desde ${duration.startingDate} hasta ${duration.endingDate} y tiene un presupuesto de ${budget}?`,
    footer: `<h4><b>Esta acción es irreversible.</b></h4>`,
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

export const sweetAlertForDisplayProjectObjectives = (name, objective) =>
  Swal.fire({
    icon: `${objective.generalObjective}`,
    title: "Lista de objetivos específicos del proyecto " + name,
    text: "hola",
    html: `<div>
        ${objective.specificObjectives.map(
          (specificObjective) =>
            `
              ${specificObjective.description}
              </br>
              ${
                specificObjective.completed
                  ? "&#9989 Completado"
                  : "&#10060 No completado"
              } 
              </br></br>
            `
        )}
      </div>`,
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
  });

export const sweetAlertForSpecificObjectiveAlreadyDefined = (newObjective) =>
  Swal.fire({
    icon: "error",
    html: `El objetivo específico <b>${newObjective}</b> ya está definido, intenta con otro valor.`,
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
    timer: 5000,
  });

export const sweetAlertForInvalidEmailInput = (newEmail) =>
  Swal.fire({
    icon: "error",
    html: `El valor <b>${newEmail}</b> no corresponde a un correo institucional de la Universidad de Antioquia.`,
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
    timer: 5000,
  });

export const sweetAlertForResearcherEmailAlreadyDefined = (newEmail) =>
  Swal.fire({
    icon: "error",
    html: `El email <b>${newEmail}</b> corresponde al email de un investigador que ya está matriculado en este proyecto de investigación.`,
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
    timer: 5000,
  });

export const sweetAlertForFormSubmitWithErrors = () =>
  Swal.fire({
    icon: "error",
    html: `El formulario tiene errores, intenta resolver estos errores e intenta nuevamente.`,
    showCancelButton: false,
    showConfirmButton: false,
    allowEscapeKey: true,
    allowOutsideClick: true,
    timer: 5000,
  });
