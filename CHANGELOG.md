# Changelog

Todas las modificaciones importantes de este proyecto se documentarán en este archivo.

El formato se adhiere a [Keep a Changelog](https://keepachangelog.com/) y sigue la versión semántica [SemVer](https://semver.org/).

## Cómo escribir registros por actualización

1.Título de la versión: ## [x.y.z] - YYYY-MM-DD

- x.y.z es el número de versión (siguiendo SemVer: mayor, menor, parche).
- YYYY-MM-DD es la fecha de la versión.

2.Categorías de cambios:

- Usa “Added” para lo nuevo.
- Usa “Changed” para modificaciones.
- Usa “Fixed” para errores corregidos.
- Usa “Removed” para lo eliminado.

3.Formato:

- Enumera cada punto con guiones (-).
- Sé claro y conciso.

## [0.6.1] 2025-12-03

## ### Fixed 2025-12-03

- Se corrige error de carga en imagenes.
- Se implementa ChangeDetectionStrategy para la carga de imagenes.

## [0.6.0] 2025-12-02

## ### Added 2025-12-02

- Se realizan las vistas testingMenu y Project.
- Se imlementa skeleton para la carga diferida de imagenes.
- Se implenta interfaces para las imagenes.
- Se realiza el diseño Masonry en tastingMenu.
- Se implementa diseño de galeria en project.

## [0.5.0] 2025-08-10

## ### Added 2025-08-10

- Se trabaja en la implementacion de routerLink en direccionamiento a tasting-menu y about.
- Se implementan imagenes de arceo juarez en carousel.
- Se modifica font-zise de la tarjeta principal de welcome.

## [0.4.0] 2025-07-23

## ### Added 2025-07-23

- Se trabaja en la vista principal welcome, se implementa carousel.
- Se implementan imagenes en carousel de internet (cambiar imagenes una vez que se tengan las reales).
- Se implementa modo oscuro en la vista welcome.
- Se implementan redes dociales "icons" (Modificar bien los tamaños y centrar).

## ### Changed

- Se modifica el color de modo dark en navbar: de dark:bg-gray-900 a dark:bg-gray-800.

## [0.3.0] 2025-06-25

### Added 2025-06-25

- Se implementa SEO en vistas: about y work.

## [0.2.0] 2025-02-18

### Added 2025-02-18

- Se implementa Server-side Rendering
- Se implementa servicio personalizado para habilitar el uso de Flowbite con SSR

## [0.1.0] 2025-02-13

### Added 2025-02-13

- Se implementa directiva para el modo o tema oscuro( se renderiza código).

### Added 2025-02-12

- Se realiza array para la navegación de rutas.
- Se eliminan hovers de en li de navbar, ya que hacian interrupción con el routerActive.

### Added 2025-02-11

- Se realizan las rutas padres como tambien rutas hijas.
- Se realiza navbar para la navegacion entre paginas.

### Added 2025-02-10

- Se crean las páginas para las vistas.
- Se realiza las rutas padres(principales) y rutas hijas(alternas).
- Se modifica el modo oscuro. De blanco a oscuro.

### Added 2025-02-09

- Instalacion de flowbite/plugin.
- configuración y creación de modo oscuro. De oscuro a blanco.

### Added 2025-02-06

- Se inicia proyecto nuevo de Angular version 18. Nombre de proyecto portfolio_designer.
- Instalación de dependencia Tailwind.
