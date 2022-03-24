const getCurrentDate = () => new Date().toISOString().split("T")[0];

export const userFormInitialValues = (user) => ({
  id: user.uid,
  displayName: user.name,
  email: user.email,
  photoURL: user.photoURL,
  role: user.role,
  phoneNumber: user.phoneNumber,
  dateOfEntry: user.dateOfEntry,
  careerCode: user.careerCode,
});

export const formInitialErrorState = {
  phoneNumber: { hasErrors: false, message: "" },
  dateOfEntry: { hasErrors: false, message: "" },
  careerCode: { hasErrors: false, message: "" },
};
