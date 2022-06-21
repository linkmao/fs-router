# FS-ROUTER
Desarrollo **Full Stack** (fs), tanto backend como frontend, de una sencilla página web, el backend es simplemente las rutas de tres secciones de la web (index, about, contact), el frontend se renderiza haciendo uso de **ejs**, el cual permite segmentar el html en pequeños porciones de código llamado partials que luego se pueden invocar en cualquier parte de la web.

Tambien **ejs** permite el envio de datos del backend hacia el frontend

Se hace despliegue en Heroku [este video de Fazt][video de fazt]
***

## Como ejecutar

### ejecucion de solo backend desarrollo
`$ npm run dev`

## Tecnologías usadas para el backend
- express
- morgan (notificaciones en consola de las peticiones http realizadas, se usa como midleware de express)
- nodemon (Para ejecutar contiuamente node y se actualice la ejecucion con cada vez que se haya un cambio)

## Tecnologías para el frontend
- ejs  (permite dividir el html en partials y el envio de datos desde el backend al forntend)

## Detalle del proyecto
En realidad este es un proyecto sencillo, con el cual la intencíón es repasar todo lo que corresponde con el diseño del backend, particularmente las rutas que serviran cada una de las secciones de una página web. En este proyecto no hay nada de base de datos.
El frontend se realiza con ejs, el cual permite segmentar el html en porciones llamados partials, los cuales pueden luego ser unidos. Ademas ejs permite el envio de datos desde el backend para ser usados en el frontend.
***

## Despliegue
Se hace el despliegue del proyecto en heroku. [Despliegue]

### Maolink software
Version. 1.0.0
Junio 2022



[video de fazt]:<https://www.youtube.com/watch?v=OVESuyVoPkI>
[Despliegue]:<http://maolink-web.herokuapp.com/>