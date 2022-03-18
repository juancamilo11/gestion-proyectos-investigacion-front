const availableEmailDomains = [
  "udea.edu.co",
  "unal.edu.co",
  "udemedellin.edu.co",
  "itm.edu.co",
  "correounivalle.edu.co",
];

export const validateEmail = (email) => {
  const emailDomain = email.split("@")[1];
  return availableEmailDomains.includes(emailDomain);
};
