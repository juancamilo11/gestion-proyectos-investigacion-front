const urlImageList = [
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1647309738/gestion-proyectos-investigacion/login-01_luorsk.jpg",
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1647309759/gestion-proyectos-investigacion/login-02_wepj9k.jpg",
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1647309904/gestion-proyectos-investigacion/login-03_ab8xci.jpg",
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1647310053/gestion-proyectos-investigacion/login-04_jehsjo.jpg",
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1647309748/gestion-proyectos-investigacion/login-05_onuy7y.jpg",
];

const generateRandomNumber = () => {
  let randomNumber = -1;
  while (randomNumber < 0 || randomNumber >= urlImageList.length) {
    randomNumber = parseInt(Math.random() * 100);
  }
  return randomNumber;
};

const pickRandomImage = () => {
  return urlImageList[generateRandomNumber()];
};

export default pickRandomImage;
