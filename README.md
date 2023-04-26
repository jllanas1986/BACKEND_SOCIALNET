![](./assets/Banner.jpg)


# INDEX

- [TRELLO](#trello-)
    - [Vista tablero](#vista-tablero)
    - [Vista lista](#vista-lista)

 - [MONGODB Investigación](#mongodb-investigación)
    - [¿Qué es MongoDB?](#qué-es-mongodb)
    - [¿Cuales son las características especiales de MONGODB?](#cuales-son-las-características-especiales-de-mongodb)
    - [¿Cómo se estructuran los datos en MongoDB?](#cómo-se-estructuran-los-datos-en-mongodb-)
    - [¿Ventajas de MONGODB respecto otras bases de datos relacionales?](#ventajas-de-mongodb-respecto-otras-bases-de-datos-relacionales)
    - [¿Desventajas de MongoDB? ¿Cuando no es recomendable utilizarlo?](#desventajas-de-mongodb-cuando-no-es-recomendable-utilizarlo)
    - [Instalación y configuración de MONGODB y requisitos mínimos de hardware y software.](#instalación-y-configuración-de-mongodb-y-requisitos-mínimos-de-hardware-y-software)

 - [Authors](#authors-)


# TRELLO 📅
## Vista tablero
[⬆️](#index)
![](./assets/Trello_1.jpg)

>*Vista general del tablero creado para el proyecto de investigación.*

## Vista lista
[⬆️](#index)
![](./assets/Trello_2.jpg)

>*Vista de la lista que contiene los checkpoints del proyecto.*

***
# MONGODB Investigación
## ¿Qué es MongoDB?
[⬆️](#index)
>MongoDB es una base de datos de código abierto y orientada a documentos, perteneciente a la familia de bases de datos NoSQL (Not Only SQL). Fue desarrollada por MongoDB Inc. y lanzada por primera vez en 2009. MongoDB se utiliza para almacenar y gestionar grandes cantidades de datos de manera flexible y escalable.

>A diferencia de las bases de datos relacionales tradicionales, que utilizan tablas y filas para organizar los datos, MongoDB utiliza un modelo de datos basado en documentos BSON (Binary JSON), que es una representación binaria de documentos JSON (JavaScript Object Notation). Esto permite almacenar datos de manera flexible, sin necesidad de tener un esquema fijo, lo que hace que MongoDB sea especialmente adecuado para aplicaciones modernas y dinámicas que requieren una evolución rápida del esquema de datos.

>MongoDB es conocido por su capacidad de escalamiento horizontal, lo que significa que puede manejar grandes volúmenes de datos y altas cargas de trabajo distribuyendo los datos en múltiples nodos o servidores. También ofrece características avanzadas como indexación, replicación y tolerancia a fallos para garantizar la disponibilidad y confiabilidad de los datos.

>MongoDB se utiliza en una amplia gama de aplicaciones, desde aplicaciones web y móviles, hasta análisis de datos, IoT (Internet de las cosas), juegos en línea, e-commerce y muchas otras. Es popular en la comunidad de desarrollo debido a su flexibilidad, rendimiento y escalabilidad. Además, cuenta con una gran cantidad de herramientas, bibliotecas y soporte de la comunidad que facilitan su adopción y uso en diferentes entornos.

## ¿Cuales son las características especiales de MONGODB?
[⬆️](#index)
>Modelo de datos basado en documentos: MongoDB utiliza un modelo de datos flexible y basado en documentos BSON (Binary JSON), lo que permite almacenar datos en forma de documentos JSON que pueden tener estructuras diferentes sin necesidad de tener un esquema fijo. Esto brinda agilidad y adaptabilidad a los cambios en los datos, lo cual es ideal para aplicaciones modernas y dinámicas.

>Escalamiento horizontal: MongoDB es altamente escalable, lo que significa que puede manejar grandes volúmenes de datos y altas cargas de trabajo distribuyendo los datos en múltiples nodos o servidores. Esto permite un crecimiento horizontal eficiente y una mejora en el rendimiento a medida que se agregan más servidores a la infraestructura.

>Alta disponibilidad y tolerancia a fallos: MongoDB ofrece características de replicación y tolerancia a fallos para garantizar la disponibilidad y confiabilidad de los datos. Permite configurar réplicas de datos en varios nodos para tener copias redundantes de los datos, lo que permite que la base de datos siga funcionando incluso si se produce una falla en un nodo.

>Indexación: MongoDB admite una variedad de índices, incluyendo índices simples, compuestos, geoespaciales y de texto completo, lo que permite una búsqueda eficiente y rápida de datos.

>Consultas avanzadas: MongoDB tiene un poderoso sistema de consultas que admite consultas complejas y avanzadas, incluyendo consultas ad hoc, consultas por rango, consultas geoespaciales y más. Además, MongoDB tiene una sintaxis de consultas similar a SQL, lo que facilita la transición para aquellos familiarizados con bases de datos relacionales.
 
>Flexibilidad en el almacenamiento de datos: MongoDB permite almacenar datos de diferentes tipos, como números, cadenas, fechas, arreglos, documentos anidados, entre otros. También admite operaciones avanzadas como actualizaciones atómicas, transacciones y agregaciones.

>Herramientas y ecosistema: MongoDB cuenta con una gran cantidad de herramientas, bibliotecas y soporte de la comunidad que facilitan su adopción y uso en diferentes entornos. Además, ofrece integraciones con otros lenguajes de programación y herramientas populares, lo que lo hace versátil y adecuado para una amplia variedad de aplicaciones y casos de uso.

>En resumen, MongoDB ofrece un modelo de datos flexible, escalabilidad horizontal, alta disponibilidad, consultas avanzadas y un amplio ecosistema de herramientas, lo que la hace una opción popular para aplicaciones modernas que requieren almacenamiento y gestión de datos eficiente y escalable.

## ¿Cómo se estructuran los datos en MongoDB?
[⬆️](#index)
>En MongoDB, los datos se estructuran en forma de documentos BSON (Binary JSON), que son representaciones binarias de documentos JSON (JavaScript Object Notation). Los documentos BSON son almacenados en colecciones, que son análogas a las tablas en las bases de datos relacionales, pero con algunas diferencias clave. A continuación, se describen los elementos principales de la estructura de datos en MongoDB:

>Documentos: Los documentos son la unidad básica de almacenamiento en MongoDB. Son estructuras de datos similares a JSON, que consisten en pares de clave-valor, donde las claves son strings y los valores pueden ser de diferentes tipos de datos, como números, cadenas, fechas, arreglos, documentos anidados, entre otros. Los documentos pueden tener estructuras diferentes y no necesitan seguir un esquema fijo, lo que brinda flexibilidad en la forma de almacenar datos.

>Colecciones: Las colecciones son agrupaciones lógicas de documentos en MongoDB, similares a las tablas en bases de datos relacionales. Cada documento se almacena en una colección y se identifica de manera única dentro de la colección mediante un campo especial llamado "_id". Las colecciones en MongoDB no requieren un esquema fijo y pueden contener documentos con estructuras diferentes.

>Bases de datos: Las bases de datos en MongoDB son contenedores de colecciones, y pueden contener una o más colecciones relacionadas. Cada base de datos tiene un nombre único y puede tener múltiples colecciones con diferentes esquemas.

>Campos: Los campos son las claves en los pares de clave-valor de los documentos. Los campos son strings y representan los atributos o propiedades de los documentos. Cada documento puede tener uno o más campos, y los campos pueden contener diferentes tipos de datos.

>Índices: Los índices en MongoDB son estructuras que permiten una búsqueda rápida y eficiente de datos en las colecciones. Los índices pueden ser simples o compuestos, y se crean en uno o más campos de los documentos para acelerar las operaciones de búsqueda y consulta.

>Consultas: Las consultas en MongoDB se realizan utilizando un lenguaje de consulta similar a SQL, pero adaptado para documentos BSON. Las consultas pueden incluir condiciones de búsqueda en los campos de los documentos, operadores lógicos, operadores de comparación, consultas por rango, consultas geoespaciales, entre otros.

>Agregaciones: Las agregaciones en MongoDB son operaciones que permiten procesar y transformar datos en colecciones mediante una serie de pasos en un pipeline. Las agregaciones pueden incluir operaciones como filtrado, proyección, agrupación, ordenamiento, entre otros, y son utilizadas para realizar análisis y transformaciones avanzadas en los datos almacenados en MongoDB.

>En resumen, los datos en MongoDB se estructuran en documentos BSON almacenados en colecciones, dentro de bases de datos. Los documentos son estructuras de datos flexibles y los campos representan los atributos o propiedades de los documentos. Los índices, consultas y agregaciones son herramientas utilizadas para acceder y procesar los datos almacenados en MongoDB de manera eficiente.

## ¿Ventajas de MONGODB respecto otras bases de datos relacionales?
[⬆️](#index)
>MongoDB ofrece varias ventajas en comparación con las bases de datos relacionales, especialmente en escenarios donde se requiere flexibilidad en la estructura de los datos y alta escalabilidad. Algunas de las ventajas principales de MongoDB son las siguientes:

>Esquema flexible: A diferencia de las bases de datos relacionales, que tienen un esquema fijo y riguroso, MongoDB permite almacenar datos con estructuras flexibles en documentos BSON. Esto significa que los campos y la estructura de los documentos pueden variar de un documento a otro, lo que brinda mayor flexibilidad en la forma de modelar los datos y permite adaptarse a cambios en los requerimientos del negocio de manera más ágil.

>Escalabilidad horizontal: MongoDB está diseñado para escalar horizontalmente, lo que significa que puede manejar grandes volúmenes de datos y altas cargas de trabajo distribuyendo los datos en múltiples nodos o servidores. Esto permite un crecimiento más sencillo y eficiente de la base de datos a medida que aumentan los requerimientos de almacenamiento y rendimiento, lo que lo hace ideal para aplicaciones de alta demanda.

>Alto rendimiento: MongoDB ofrece un rendimiento de lectura y escritura rápido gracias a su arquitectura optimizada para el acceso a datos en memoria y la capacidad de distribuir los datos en varios nodos. Además, ofrece características avanzadas como la replicación automática y la fragmentación de datos, que permiten mejorar el rendimiento y la disponibilidad de los datos en situaciones de alta carga.

>Modelado de datos complejos: MongoDB es adecuado para almacenar y consultar datos complejos, como datos anidados, arreglos y documentos embebidos, lo que permite representar relaciones complejas entre los datos de manera eficiente. Esto lo hace especialmente útil para aplicaciones con requerimientos de modelado de datos no estructurados o semiestructurados.

>Integración con lenguajes de programación populares: MongoDB tiene una gran comunidad de desarrolladores y ofrece controladores o librerías para varios lenguajes de programación populares, como Java, Python, Node.js, C#, entre otros, lo que facilita su integración con diferentes tecnologías y frameworks de desarrollo.

>Escalabilidad geográfica: MongoDB ofrece características avanzadas de replicación y distribución de datos que permiten escalar geográficamente la base de datos para distribuir los datos en diferentes ubicaciones geográficas y mejorar la latencia y la disponibilidad de los datos a nivel global.

>Administración sencilla: MongoDB ofrece herramientas de administración y monitoreo que facilitan la gestión de la base de datos, como su interfaz de línea de comandos (CLI), su interfaz gráfica de usuario (GUI) llamada MongoDB Compass, y su plataforma de gestión y monitoreo en la nube llamada MongoDB Atlas.

>En resumen, MongoDB ofrece ventajas en términos de flexibilidad en el esquema de datos, escalabilidad horizontal, alto rendimiento, modelado de datos complejos, integración con lenguajes de programación populares, escalabilidad geográfica y administración sencilla en comparación con las bases de datos relacionales, lo que lo hace una opción atractiva para aplicaciones modernas con requerimientos de datos flexibles y escalables.

## ¿Desventajas de MongoDB? ¿Cuando no es recomendable utilizarlo?
[⬆️](#index)

>Aunque MongoDB ofrece muchas ventajas, también tiene algunas limitaciones y desventajas que es importante tener en cuenta al considerar su uso en un proyecto. Algunas de las desventajas de MongoDB son las siguientes:

>Falta de soporte completo para transacciones: Aunque MongoDB ofrece soporte para transacciones a nivel de documento, no tiene soporte completo para transacciones ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad) a nivel de colección o base de datos. Esto puede ser una limitación en escenarios donde se requiere un control estricto de la consistencia y la integridad de los datos en transacciones complejas.

>Requiere una cuidadosa planificación de la estructura de datos: Aunque la flexibilidad del esquema en MongoDB es una ventaja, también puede ser una desventaja si no se planifica cuidadosamente la estructura de datos. La falta de un esquema fijo puede hacer que la gestión y consulta de datos sea más compleja, especialmente en aplicaciones con cambios frecuentes en la estructura de datos.

>Mayor complejidad en la administración y configuración: MongoDB tiene una serie de configuraciones y opciones avanzadas que pueden requerir un mayor nivel de experiencia y conocimientos técnicos para su configuración y gestión adecuada. Esto puede ser una desventaja en comparación con bases de datos relacionales más tradicionales que pueden tener interfaces y herramientas de administración más simples.

>Consumo de recursos: MongoDB puede requerir un mayor consumo de recursos, como memoria RAM y espacio de almacenamiento en comparación con bases de datos relacionales, debido a su arquitectura optimizada para el rendimiento en memoria y la duplicación de datos en múltiples nodos. Esto puede afectar el costo de infraestructura requerida para implementar y mantener una base de datos MongoDB.

>Curva de aprendizaje: Aunque MongoDB tiene una gran comunidad de desarrolladores y ofrece una documentación completa, puede tener una curva de aprendizaje más pronunciada para aquellos que están acostumbrados a trabajar con bases de datos relacionales tradicionales. El aprendizaje de nuevos conceptos y la adopción de un enfoque de diseño de datos basado en documentos puede requerir tiempo y esfuerzo adicional.

 

>*En general, MongoDB puede no ser recomendable en los siguientes casos:*

>Aplicaciones que requieren transacciones complejas y estricto control de la consistencia de datos.
>Aplicaciones con un esquema de datos estable y bien definido, sin requerimientos de flexibilidad en la estructura de datos.
>Proyectos con limitaciones de recursos, donde el consumo de memoria RAM y espacio de almacenamiento es una preocupación significativa.
>Proyectos con equipos de desarrollo sin experiencia previa en bases de datos NoSQL y que necesitan una curva de aprendizaje rápida.

>Es importante evaluar cuidadosamente los requerimientos y características específicas de tu proyecto antes de elegir MongoDB o cualquier otra base de datos, y considerar si se ajusta adecuadamente a tus necesidades.

## Instalación y configuración de MONGODB y requisitos mínimos de hardware y software.
[⬆️](#index)

>La instalación y configuración de MongoDB puede variar según el sistema operativo en el que se desee instalar. A continuación se proporcionan los pasos generales para la instalación en un entorno típico de Windows, Linux o macOS:

>*Pasos generales para la instalación de MongoDB:*

>Descarga el paquete de instalación de MongoDB desde el sitio web oficial de MongoDB (https://www.mongodb.com/try/download/community).
>Sigue las instrucciones específicas de instalación para tu sistema operativo. Por ejemplo, en Windows, ejecuta el archivo de instalación y sigue el asistente de instalación. En Linux, puedes usar el administrador de paquetes de tu distribución para instalar MongoDB. En macOS, puedes usar el administrador de paquetes Homebrew o descargar el archivo de instalación y seguir las instrucciones.
>Configura las opciones de instalación, como la ruta de instalación, el puerto de escucha, etc., según tus necesidades. MongoDB tiene una amplia variedad de opciones de configuración que puedes personalizar según tus requerimientos específicos.

>*Requisitos mínimos de hardware y software para MongoDB:*

>Sistema operativo: MongoDB es compatible con una amplia gama de sistemas operativos, incluyendo Windows, Linux, macOS, y otros sistemas Unix. Verifica la documentación oficial de MongoDB para obtener la lista completa de sistemas operativos compatibles.
>Memoria RAM: MongoDB utiliza la memoria RAM para almacenar datos en caché y para operaciones de indexación y agregación. El requisito mínimo de memoria RAM depende del tamaño de tus datos y del rendimiento deseado de la base de datos. Sin embargo, se recomienda tener al menos 8 GB de RAM disponible para una operación óptima.
>Espacio de almacenamiento: El espacio de almacenamiento necesario dependerá del volumen de datos que esperas manejar en tu aplicación. Asegúrate de tener suficiente espacio de almacenamiento disponible para tus datos, así como espacio adicional para operaciones de copia de seguridad, replicación y otros fines.
>Procesador: MongoDB es compatible con una amplia variedad de procesadores, pero se recomienda un procesador de al menos 2 núcleos y 2 GHz de velocidad para un rendimiento adecuado.
>Conectividad de red: MongoDB utiliza el protocolo TCP/IP para la comunicación entre los distintos nodos de un clúster y para la comunicación con los clientes. Asegúrate de tener una conectividad de red estable y suficiente ancho de banda para tus necesidades.

>Es importante tener en cuenta que estos son solo los requisitos mínimos y el rendimiento y la escalabilidad de MongoDB pueden mejorar significativamente con hardware más potente y una configuración adecuada. Se recomienda consultar la documentación oficial de MongoDB y seguir las mejores prácticas de instalación y configuración para obtener un rendimiento óptimo en tu entorno específico.

> __Note__
Powered by BLADGPT

## Authors ✒️
[⬆️](#index)

**Volodymyr Kolomiets** - *Especialista en CHATGTP* | *Especialista en TRELLO* | - [VolodymyrKolomiets](https://github.com/VolodymyrKolomiets)

**Joan Baldó** - *Readme builder* | *Coding* | - [joanbaldo](https://github.com/joanbaldo)

***
