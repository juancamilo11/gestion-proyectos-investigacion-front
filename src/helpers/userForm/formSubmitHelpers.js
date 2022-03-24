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
) => ({
  basicResearcherInfo: { id, displayName, email, photoURL },
  role,
  phoneNumber,
  dateOfEntry,
  career: getCareerByCode(careerCode),
});

export default buildUser;
