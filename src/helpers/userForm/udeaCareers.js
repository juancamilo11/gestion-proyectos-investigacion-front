export const udeaCareers = [
  {
    facultyName: "Ciencias de la Salud",
    careers: [
      { name: "Administración Ambiental y Sanitaria", code: "106556" },
      { name: "Biología", code: "452" },
      {
        name: "Profesional en Gerente de Sistemas de Información en Salud",
        code: "34312",
      },
      { name: "Instrumentación Quirúrgica", code: "3275" },
      { name: "Licenciatura en Ciencias Naturales", code: "106513" },
      { name: "Enfermería", code: "427" },
      { name: "Medicina", code: "55177" },
      { name: "Medicina Veterinaria", code: "403" },
      { name: "Zootecnista", code: "404" },
      { name: "Microbiología Industrial y Ambiental", code: "17711" },
      { name: "Microbiología y Bioanálisis", code: "426" },
      { name: "Nutrición y Dietética", code: "429" },
      { name: "Administracion en salud", code: "1062142" },
      { name: "Tecnología en Regencia de Farmacia", code: "401" },
    ],
  },
  {
    facultyName: "Administración y Negocios",
    careers: [
      { name: "Administración de Empresas", code: "439" },
      { name: "Administración en Salud", code: "1062144" },
      { name: "Contaduría Pública", code: "440" },
      { name: "Gerencia en Sistemas de Información de Salud", code: "34312" },
    ],
  },
  {
    facultyName: "Ciencias Sociales",
    careers: [
      { name: "Antropología", code: "4313" },
      { name: "Ciencia Política", code: "17702" },
      { name: "Derecho", code: "437" },
      { name: "Economía", code: "438" },
      { name: "Licenciatura en Ciencias Sociales", code: "106328" },
      { name: "Psicología", code: "434" },
      { name: "Sociología", code: "436" },
      { name: "Trabajo Social", code: "435" },
    ],
  },
  {
    facultyName: "Humanidades",
    careers: [
      { name: "Archivística", code: "101991" },
      { name: "Bibliotecología", code: "432" },
      { name: "Comunicaciones", code: "17704" },
      { name: "Entrenamiento Deportivo", code: "54174" },
      { name: "Filología Hispánica", code: "106118" },
      { name: "Filosofía", code: "441" },
      { name: "Historia", code: "442" },
      { name: "Licenciatura en Educación Especial", code: "412" },
      { name: "Licenciatura en Educación Física", code: "413" },
      { name: "Licenciatura en Educación Infantil", code: "106515" },
      {
        name: "Licenciatura en Leng. Extran. con énfasis en Inglés y Francés",
        code: "106583",
      },
      { name: "Pedagogía", code: "104686" },
      { name: "Periodismo", code: "10339" },
      { name: "Traducción Inglés-Francés-Español", code: "11417" },
    ],
  },
  {
    facultyName: "Arte",
    careers: [
      { name: "Arte Dramático", code: "406" },
      { name: "Artes Plásticas", code: "405" },
      { name: "Comunicación Audiovisual y Multimedia", code: "20267" },
      { name: "Licenciatura en Artes Escénicas", code: "106570" },
      { name: "Licenciatura en Artes Plásticas", code: "106571" },
      { name: "Licenciatura en Danza", code: "106569" },
      { name: "Licenciatura en Música", code: "101706" },
    ],
  },
  {
    facultyName: "Ciencias Exactas",
    careers: [
      { name: "Astronomía", code: "54182" },
      { name: "Estadística", code: "101571" },
      { name: "Física", code: "453" },
      { name: "Licenciatura en Matemáticas", code: "106516" },
      { name: "Química", code: "455" },
    ],
  },
  {
    facultyName: "Ingeniería",
    careers: [
      { name: "Bioingeniería", code: "10578" },
      { name: "Ingeniería Aeroespacial", code: "105943" },
      { name: "Ingeniería Agroindustrial - Uraba", code: "103110" },
      { name: "Ingeniería Agroindustrial - Oriente", code: "103138" },
      { name: "Ingeniería Ambiental - Med", code: "20270" },
      { name: "Ingeniería Ambiental - Virt", code: "90402" },
      { name: "Ingeniería Biomédico ", code: "103309" },
      { name: "Ingeniería Bioquímico - Urabá", code: "103312" },
      { name: "Ingeniería Bioquímico - Oriente", code: "103309" },
      { name: "Ingeniería Civil", code: "20042" },
      { name: "Ingeniería Energético", code: "105973" },
      { name: "Ingeniería Electrónica", code: "446" },
      { name: "Ingeniería Agropecuaria", code: "55052" },
      { name: "Ingeniería Eléctrica", code: "445" },
      { name: "Ingeniería Materiales", code: "3678" },
      { name: "Ingeniería Industrial", code: "52490" },
      { name: "Ingeniería Industrial - Virt", code: "20609" },
      { name: "Ingeniería Mecánica", code: "448" },
      { name: "Ingeniería Oceanográfico", code: "101540" },
      { name: "Ingeniería Química", code: "450" },
      { name: "Ingeniería Sanitaria", code: "451" },
      { name: "Ingeniería de Alimentos", code: "10555" },
      { name: "Ingeniería de Sistemas", code: "444" },
      { name: "Ingeniería de Sistemas - Virt", code: "51603" },
      { name: "Ingeniería de Telecomunicaciones", code: "20602" },
      { name: "Ingeniería de Telecomunicaciones - Virt", code: "20370" },
      { name: "Ingeniería de Urbano", code: "104068" },
      {
        name: "Tecnología en Gestión de Insumos Agropecuarios",
        code: "106635",
      },
    ],
  },
];

export const getCareerByCode = (careerCode) => {
  let careerToReturn = null;
  let value = udeaCareers.map((faculty) => {
    faculty.careers.map((career) => {
      if (career.code === careerCode) {
        careerToReturn = career;
      }
    });
  })[0];
  return careerToReturn;
};
