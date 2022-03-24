import { getCareerByCode } from "./udeaCareers";

const buildUser = (
  id,
  displayName,
  email,
  photoURL,
  role,
  phoneNumber,
  dateOfEntry,
  careerCode
) => {
  return {
    basicResearcherInfo: { id, displayName, email, photoURL },
    role,
    phoneNumber,
    dateOfEntry,
    career: getCareerByCode(careerCode),
  };
};

export default buildUser;
