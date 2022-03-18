const udeaDomain = "udea.edu.co";

export const validateEmail = (email) => {
  const emailDomain = email.split("@")[1];
  return udeaDomain === emailDomain;
};
