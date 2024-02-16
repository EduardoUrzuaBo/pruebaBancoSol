# ¡Bienvenido al Proyecto de Automatización con Cypress! Este repositorio contiene pruebas automatizadas para la aplicación web Todo.ly utilizando Cypress con la arquitectura de Modelo de Objeto de Página (Page Object Model, POM).

Estructura del Proyecto
lua
Copy code
|-- cypress
|   |-- fixtures
|   |-- integration
|   |-- pages
|   |-- plugins
|   |-- support
|-- README.md
|-- package.json

cypress: Contiene archivos de pruebas de Cypress, fixtures, comandos personalizados y archivos de soporte.
cypress/integration: Contiene archivos de prueba para diferentes características.
cypress/pages: Contiene clases del Modelo de Objeto de Página (POM) para cada página.
README.md: Este archivo.
package.json: Contiene las dependencias y scripts del proyecto.

Instalación
Clona este repositorio:


git clone <URL_del_repositorio>
Instala las dependencias:


npm install
Ejecución de Pruebas
Puedes ejecutar las pruebas de Cypress de dos maneras:

Ejecutar:
npx cypress open
npm run cypress:open
Modo Headless: Ejecuta las pruebas de Cypress en la línea de comandos sin el Test Runner.





Autor
Eduardo Andres Urzua Udaeta

