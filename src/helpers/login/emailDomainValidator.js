// const udeaDomain = "udea.edu.co";
const udeaDomain = "gmail.com";

export const validateEmail = (email) => {
  const emailDomain = email.split("@")[1];
  return udeaDomain === emailDomain;
};
