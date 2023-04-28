module.exports = {
    components: {
        schemas: {
            user: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: "Nombre del usuari@",
                        example: "Jose Juan LLanas Baldó"
                    },
                    email: {
                        type: 'string',
                        description: "Correo electrónico de la usuaria",
                        example: "josejuan@llanascorp.com"
                    },
                    password: {
                        type: 'string',
                        description: "User's password for register and login",
                        example: "false"
                    },
                    age: {
                        type: "number",
                        description: "User's age",
                        example: 25
                    }
                }
            }
        }
    }
}