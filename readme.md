
# I'm in danger?
_Proyecto para Hack the ocean by Launch X - Mayo 2022_

![logo](/src/assets/logo3.png)

_Ya es bien conocido que en el mar conviven numerosas especies acuáticas las cuales conforman un amplio y variado ecosistema. Sin embargo, dicho ecosistema está sufriendo importantes daños, como consecuencia numerosas especies marinas se encuentren en peligro de extinción.
I´m in danger? Surge como iniciativa para concientizar a la población sobre la importancia de la vida marina. ¿Te encuentras de vacaciones en la playa y observas especies que no conoces? ¿Explorando en la web ves imágenes de animales marinos y quieres saber más sobre ellos?  I´m in danger? Permite ayudarte a saber si esa especie se encuentra en peligro de extinción, solo necesitas tomar una foto, subir una existente o ingresar el url de una imagen para poder obtener información sobre dicha especie._

![screen1](/src/assets/screenshots/desk1.png)

## Características


•	Creación de API con Azure Custom Vision entrenado con Machine Learning para reconocer 5 tipos de animales.

•	Consumo de la API mediante Python.

•	Uso de Vue para desarrollar la parte de Frontend evitando el alto acoplamiento.

•	Con la ayuda de la API se logran procesar imágenes para saber si esa especie está en peligro de extinción, a través de una interfaz web el usuario puede tomar una foto, subir una imagen existente o ingresar una url, si una especie es identificada se mostrará en pantalla datos sobre esa especie como nombre científico, alimentación, hábitat, causas de amenaza, etc.

•	Si se ingresa alguna imagen que no corresponda a las que se tiene en la IA se mostrara en pantalla un mensaje diciendo que no es una especie en peligro de extinción

•	Despliegue con ayuda de Azure Websites

![IA](/src/assets/screenshots/custom%20vision%20iaminDanger.gif)  


## Despliegue 🚀

[AI'm in Danger?](https://white-sand-0e88f9710.1.azurestaticapps.net/#/)   
Despliegue realizado en Azure Static Web App

![screen2](/src/assets/screenshots/desk2.png)


## Cómo desplegar el proyecto en tu computadora local 🔧

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

1. Descargarel reposotio
2. Usar comando "npm install" (sólo la primera vez)

```
npm install
```

3. Usar comando "npm run serve"

```
npm run serve
```

4. Ir a http://192.168.0.109:8080/ desde el navegador web


### Pre-requisitos 📋

_1. Tener instalado Node.js_

_2. Tener instalado NPM_


## Construido con 🛠️

* [Azure Computer Vision](https://azure.microsoft.com/es-mx/services/cognitive-services/computer-vision/)
* [Python](https://www.python.org/)
* [Vue.js](https://vuejs.org/)
* [Javascript](https://www.javascript.com/)
* [HTML](https://codigofacilito.com/articulos/que-es-html)
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS)


## Autores ✒️

* **Hector Gerardo Bravo** - *Líder de proyecto - Backend* - [HectorGbravo](https://github.com/HectorGbravo)
* **Santiago Quintana** - *Backend* - [SantQuintana](https://github.com/SantQuintana)
* **Maria Oralia Hernandez** - *Frontend* - [oraliahdz](https://github.com/oraliahdz)
* **Luis Eduardo Hernandez** - *Frontend* - [LuisEHernandezV](https://github.com/LuisEHernandezV)
* **Erick Romero** - *Frontend* - [ErickRomeroZ](https://github.com/ErickRomeroZ) 

