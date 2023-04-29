module.exports = {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                name: "Authorization",
                in: "header"
            }
        },
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
                        description: "Contraseña para registro y login",
                        example: "123456"
                    },
                    age: {
                        type: "number",
                        description: "User's age",
                        example: 25
                    }
                }
            },
            userLogin: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: "Correo electrónico de la usuaria",
                        example: "josejuan@llanascorp.com"
                    },
                    password: {
                        type: 'string',
                        description: "Contraseña para registro y login",
                        example: "123456"
                    }
                }
            },
            user_id: {
                type: 'objectId',
                description: "El ID de un usuario",
                example: "644a760dfd6aef1d4419797d"
            },
            post: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Título del post",
                        example: "Chat GPT v10 ha llegado"
                    },
                    body: {
                        type: 'string',
                        description: "Texto del post",
                        example: "Con la v.9 dispositivos como Alexa o Siri,fueron exterminados del ecosistema digital..."
                    }
                }
            },
            post_id: {
                type: 'objectId',
                description: "El ID del post",
                example: "644a760dfd6aef1d4419797d"
            },
            comment: {
                type: 'object',
                properties: {
                    commentTitle: {
                        type: 'string',
                        description: "Título del comentario",
                        example: "Discrepo totalmente"
                    },
                    commentBody: {
                        type: 'string',
                        description: "Texto del comentario",
                        example: "Eso es mentira porque lo dijo Jorge Javier en Sálvame Deluxe"
                    }
                }
            },
            comment_id: {
                type: 'objectId',
                description: "El ID del comentario",
                example: "644a760dfd6aef1d4419797d"
            }
        }
    }
}