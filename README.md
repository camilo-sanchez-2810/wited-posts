# Prueba tecnica wited

![Static Badge](https://img.shields.io/badge/node_version-18.16.1-44cc44)
![Static Badge](https://img.shields.io/badge/npm_version-9.8.0-4444cc)

## Descripcion

Este repositorio contiene el código correspondiente a la prueba técnica realizada para [Wited](https://www.wited.com/). El objetivo de esta prueba es desarrollar una aplicación que muestre una serie de publicaciones realizadas por usuarios en la plataforma, utilizando una API externa para obtener los datos necesarios. Cada publicación debe ser enlazada a una página de detalles correspondiente.

## Detalles tecnicos

La prueba fue realizada con las siguientes tecnologias:

- [node](https://nodejs.org/) v18.16.1
- [npm](https://www.npmjs.com/) v9.8.0
- [vite](https://vitejs.dev/)
- [tailwind](https://tailwindcss.com/) v3.3.3
- [pinia](https://pinia.vuejs.org/) v2.1.6
- [axios](https://axios-http.com/) v1.4.0
- [vue-router](https://router.vuejs.org/) v4.2.4

## Instalacion

Anotacion: antes de instalar el proyecto, primero se debe configurar un archivo .env con la variable `VITE_API_URL`, el cual contiene la direccion de la api. La api utilizada fue "https://jsonplaceholder.typicode.com/"

Clonacion e instalacion de paquetes:

```
$ git clone https://github.com/camilo-sanchez-2810/wited-posts.git

$ cd wited-posts

$ npm install
```

Ejecucion de la aplicacion en modo desarrollo:

```
$ npm run dev
```

Compilacion y ejecucion de la aplicacion:

```
$ npm run build
$ npm run preview
```