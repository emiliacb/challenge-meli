## Challenge para Mercado Libre 

![Meli Logo](client/src/images/Logo_ML_x2.png) 

#### by Emilia Cabral


## Deployado en:

http://challenge-meli-frontend.vercel.app/

https://challenge-meli-backend.herokuapp.com/

## Como iniciar el proyecto en local:

#### Una vez clonado el proyecto crear el archivo .env en ambos root y agregar las variables:

En api/.env :

``
PORT= 3000
``

En client/.env :

``
API_URL=http://localhost:3000
``

#### Realizado esto correr:

En api/ :

``
npm start
``

En client/ :

``
npm run build && npm run serve
``

## Notas:

- No llegue a implementar el 100% de lo que hubiese querido, pero creo que se puede ver bastante de mi forma de trabajar y mis intenciones. Al final del readme voy a añadir algunos toDo.

## Features:

- No se utilizó CRA (create-react-app) porque está diseñado para proyectos pequeños o medianos y la idea de este proyecto es que pueda ser fácilmente escalable. En caso de necesitar escalarlo a gran escala, un proyecto basado en CRA sería dificil de mejorar en performance a largo plazo.
- Se utilizó una estructura de componente atomizada
- Se utilizaron alias en webpack para tener imports mas legibles
- Se utilizó React.useMemo, React.useCallback, React.Lazy y React.Suspense para mejorar la performance.
- Se logró un alto nivel de performance en Lighthouse
- Esta largamente comentado (más de lo que sería optimo en una app en producción, pero tuve en cuenta que al ser un desafío, es importante expresar los pensamientos e intenciones alrededor del código)
- Sitio responsive.

## ToDo:

Estas carácterísticas no las pude agregar por falta de tiempo, me mudé sola en el medio del desafío y perdí casi la mitad de días con eso por no tenerlo en cuenta a la hora de estimar.

- [ ] Añadir unit testing tanto en front como en back.
- [ ] Añadir la posibiliad de pasarle un imageClass al componente image.
- [ ] Mejorar el SEO, los OG tags y transformar la app en PWA.
- [ ] Añadir login con Auth0 o integración con MercadoLibre.
- [ ] Utilizar <picture> y <source> para seleccionar el icono mas pequeño en mobile y el más grande en tablet/desktop.

- [ ] Usar typescript en backend.
- [ ] Usar docker en backend.
- [ ] Documentar la api.
- [ ] Añadir rutas y respuestas para diferentes status.
- [ ] Utilizar una plataforma de CI-CD.
- [ ] Agregar vistas para las diferentes rutas como en api.mercadolibre.com

