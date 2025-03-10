Con motivo de difundir mi trabajo y buscar empleo relacionado con la programación, decidí realizar un sitio web en donde pudiera exponer información sobre mí, sobre mis estudios y mis experiencias laborales, mi portfolio y mis datos de contacto.

Es una aplicacion web centrada mas que nada en el desarrollo frontend, con tecnologias como React, Javascript, CSS y HTML. El desarrollo backend esta hecho con Python y framework Django.

En él podemos encontrar las siguientes secciones:

Inicio:
Esta sección presenta una página simple con una fotografía personal y, junto a ella, una sección desarrollada como un componente en React.En este componente se muestra:
- Mi nombre completo
- Un efecto dinámico TypeWriter que resalta, una por una, las tecnologías en las que me especializo.
Debajo podemos ver iconos de acceso rápido a mis perfiles de LinkedIn, GitHub, Instagram y WhatsApp, además de un botón para descargar mi currículum vitae en PDF.
Luego de estos iconos, se encuentran barras de progreso que representan visualmente mis habilidades en distintos lenguajes de programación.
Si se accede desde un dispositivo móvil, el diseño se adapta para que mi nombre, los iconos y las barras de habilidades se ubiquen debajo de la foto, mejorando la experiencia de usuario en pantallas más pequeñas.

Acerca de mí:
En esta sección se encuentra una carta de presentación, acompañada de una foto.

Curriculum vitae:
A la derecha del título de la sección podemos encotrar un ícono a través del cual podemos descargar la versión en PDF del curriculum vitae. Luego encontramos dos columnas, por la izquierda se puede ver toda la información sobre mi educación relacionada a la programación.
Del lado derecho se encuentra, toda la información respecto a mi experiencia laboral, incluyendo sólo aquellos empleos que superen cierta estabilidad y formalidad. Debajo podemos ver los idiomas de los cuales tengo conocimiento.
En pantallas móviles las columnas no se visualizan una al lado de la otra, sino que la relacionada a la experiencia laboral se encuentra debajo de la que remite a la educación.

Portfolio:
El frontend de esta sección está desarrollado con React, mientras que el backend está construido con Django. Para la comunicación entre ambos, utilizo Django REST Framework (DRF), que me permite utilizar los datos a través de una API.
En esta sección se encuentran mis proyectos de programación, tanto con fines prácticos como productivos. Cada proyecto está almacenado en una base de datos SQLite3, desde donde se obtienen los siguientes datos mediante la API:
- Nombre del proyecto
- Descripción breve
- Tecnologías utilizadas
- Estado del proyecto (En producción, En desarrollo o Cancelado)
- Fecha de inicio
- Enlace al repositorio en GitHub
Además, cada proyecto cuenta con cuatro imágenes asociadas, también almacenadas en la base de datos. Estas imágenes se pueden visualizar de manera dinámica, permitiendo al usuario cambiar entre ellas mediante botones interactivos.
Para mejorar la experiencia de navegación, los proyectos pueden filtrarse según su estado, facilitando la búsqueda de aquellos que están en producción, en desarrollo o han sido cancelados.
En dispositivos móviles, los proyectos se organizan en filas, optimizando la presentación para pantallas más pequeñas.

Contacto:
En la última sección del sitio se pueden encontrar todos mis datos de contacto: Ubicación actual (ciudad), enlaces externos (LinkedIn, Github y un chat por Whatsapp), email y teléfono celular.
Luego se puede encontrar un formulario de contacto, mediante el cuál el usuario puede contactarse directamente sin necesidad de salir del sitio. En el mismo se debe indicar:
- Nombre y apellido del usuario.
- Dirección de email donde recibir la respuesta.
- Cuerpo del mensaje que se desea enviar.
Este mensaje llegara automaticamente a mi casilla de correo electronico.
Todo esto tambien se adapta a dispositivos moviles.




ESTRUCTURA DEL PROYECTO

Este sitio web ha sido desarrollado con Django como backend y React para el frontend en ciertas secciones. A continuación, se detalla la organización del proyecto:

Aplicaciones dentro del proyecto Django

El proyecto cuenta con tres aplicaciones principales:

-lisandro (App principal)

Contiene el template principal index.html, que actúa como la página de inicio.
Incluye otras secciones como:
"Acerca de mi": 
"Currículum": .
Utiliza un template base (base.html) que centraliza la estructura del sitio, incluyendo el header y los enlaces de navegación que son reutilizados en los demás templates.
También aquí se usa React, específicamente el componente TypeWriter, para mostrar de manera dinámica las tecnologías en las que me especializo.

- contacto (Formulario de contacto)

La lógica del formulario, incluyendo la validación y el envío de datos, está implementada en esta aplicación.

-portafolio (Sección de proyectos)

El backend expone los datos de los proyectos a través de una API creada con Django REST Framework.
El frontend de esta sección está desarrollado con React, obteniendo los datos desde la API y generando los componentes dinámicamente.
La integración de React con Django se realiza mediante archivos estáticos generados con npm run build, los cuales se cargan dentro del template correspondiente.
Esta estructura permite una separación clara entre el backend y el frontend, optimizando la organización y escalabilidad del proyecto.
