# Proyecto final para el curso de Fundamentos de Sistemas de Información

## Universidad de Antioquia

---

### Integrantes:

- Juan Camilo Cardona Calderón
- Dairo Joan Rivas García
- Joan Sebastian Muentes Casadiego
- Oscar Dario Botero Vargas

---

Mockups: https://app.diagrams.net/#G1teNSsuDZWRYpCOGZatkuUJ2KA3OC8wR1

## API para las peticiones

1. Petición para obtener la información completa de un investigador / Líder investigador

TIPO: GET

Endpoint: "/api/v1/get/user/{userId}"

Parámetros: userId --> String

```JSON
{
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCHER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  },
  "enrolledProjects": [
    {
      "id": "3249KM-3C875843-53485C",
      "name": "Investigación de Microbacterias",
      "budget": 3500000,
      "objective": {
        "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
        "specificObjectives": [
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          }
        ]
      },
      "duration": {
        "startingDate": "2022-02-05",
        "endingDate": "2022-04-10"
      }
    },
    {
      "id": "348MX83-3C875843-53485C",
      "name": "Investigación de Microbacterias",
      "budget": 3500000,
      "objective": {
        "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
        "specificObjectives": [
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          }
        ]
      },
      "duration": {
        "startingDate": "2022-02-05",
        "endingDate": "2022-04-10"
      }
    },
    {
      "id": "023X9378-3C875843-53485C",
      "name": "Investigación de Microbacterias",
      "budget": 3500000,
      "objective": {
        "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
        "specificObjectives": [
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          }
        ]
      },
      "duration": {
        "startingDate": "2022-02-05",
        "endingDate": "2022-04-10"
      }
    },
    {
      "id": "345G45-3C875843-53485C",
      "name": "Investigación de Microbacterias",
      "budget": 3500000,
      "objective": {
        "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
        "specificObjectives": [
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          }
        ]
      },
      "duration": {
        "startingDate": "2022-02-05",
        "endingDate": "2022-04-10"
      }
    },
    {
      "id": "345F3-3C875843-53485C",
      "name": "Investigación de Microbacterias",
      "budget": 3500000,
      "objective": {
        "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
        "specificObjectives": [
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          },
          {
            "description": "descripcion objetivo especifico 1",
            "completed": false
          }
        ]
      },
      "duration": {
        "startingDate": "2022-02-05",
        "endingDate": "2022-04-10"
      }
    }
  ]
}

```

Body de la petición --> Vacío.

2. Obtener todos los estudiantes matriculados en un proyecto, con base en el Id del proyecto:

TIPO: GET

Endpoint: "/api/v1/get/users/project/{projectId}"

Parámetros: projectId --> String

Body de la petición --> Vacío.

```JSON
[{
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCH_LEADER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  }
}, {
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCHER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  }
},{
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCHER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  }
},{
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCHER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  }
},{
  "id": "97M7VMD-M8C5MX34-5M3475",
  "displayName": "Pedrito Perez Arango",
  "email": "pedrito.perez@udea.edu.co",
  "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
  "phoneNumber": "3122555499",
  "dateOfEntry": "2020-05-10",
  "role": "RESEARCHER",
  "career": {
    "name": "Ing. Química",
    "code": "513"
  }
}]
```

Body de la petición --> Vacío.

3. Cada vez que se hace login, se guarda la información del usuario.

TIPO: POST

Endpoint: "/api/v1/post/user"

Body de la petición:

```JSON
{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
}
```

Response: Toda la información del usuario actualizado

4. Guardar / Actualizar un proyecto de investigación:

TIPO: POST

Endpoint: "/api/v1/post/project"

Body de la petición:

```JSON

{
    "id": "345F3-3C875843-53485C",
    "name": "Investigación de Microbacterias",
    "budget": 3500000,
    "objective": {
      "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
      "specificObjectives": [
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        }
      ]
    },
    "duration": {
      "startingDate": "2022-02-05",
      "endingDate": "2022-04-10"
    },
    "researcherList":[{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
  }]
}
```

Response: ResponseEntity<String> --> 200 --> Success, 404 --> Error

5. Obtener todos los registros de la tabla de investigadores

TIPO: GET

Endpoint: "/api/v1/get/researchers"

Body de la petición: Vacío

Response:

```JSON
[{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
  },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    },{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    }]
```

4. Actualizar un proyecto de investigación:

TIPO: PUT

Endpoint: "/api/v1/put/researcher"

Recomendación --> Verificar que el usuario ya exista por medio del campo Id

Body de la petición:

```JSON
{
    "id": "97M7VMD-M8C5MX34-5M3475",
    "displayName": "Pedrito Perez Arango",
    "email": "pedrito.perez@udea.edu.co",
    "photoURL": "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
    "phoneNumber": "3122555499",
    "dateOfEntry": "2020-05-10",
    "role": "RESEARCHER",
    "career": {
      "name": "Ing. Química",
      "code": "513"
    }
    }


```

5. Matricular un usuario en un proyecto de investigación

Endpoint: "/api/v1/put/add/project/{projectId}/user/{email}"

Body: Vacío

Recomendación: Hacer validación de la existencia del usuario en el sistema, si no existe no agregarlo

Response: ResponseEntity<String> --> 200 --> Success, 404 --> Error

6. Obtener todos los proyectos

TIPO: GET

Endpoint: "/api/v1/get/projects"

Body de la petición: Vacío

Response:

```JSON
{
"id": "345F3-3C875843-53485C",
    "name": "Investigación de Microbacterias",
    "budget": 3500000,
    "objective": {
      "generalObjective": "Proponer un modelo para el estudio de las microbacterias",
      "specificObjectives": [
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        },
        {
          "description": "descripcion objetivo especifico 1",
          "completed": false
        }
      ]
    },
    "duration": {
      "startingDate": "2022-02-05",
      "endingDate": "2022-04-10"
    }
}

```

7. Eliminar un proyecto
