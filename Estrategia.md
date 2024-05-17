## Flujo de trabajo Git Flow manual en GitHub

### Configuración inicial

Antes de comenzar, asegúrate de tener Git instalado en tu sistema y acceso a un repositorio en GitHub.

### Ramas principales

En tu repositorio, tendrás dos ramas principales:

- **main**: Esta rama contiene la versión estable y desplegable del proyecto.
- **develop**: Esta rama es donde se integran todas las características completadas y se preparan para el próximo lanzamiento.

### Ramas de características

Para desarrollar nuevas características, sigue estos pasos:

1. Crea una nueva rama a partir de `develop` para tu característica:

    ```bash
    git checkout develop
    git checkout -b feature/nombre_de_la_feature
    ```

2. Trabaja en tu característica en esta rama y realiza todos los commits necesarios.

3. Una vez que la característica esté lista, haz merge de la rama de la característica en `develop`:

    ```bash
    git checkout develop
    git merge --no-ff feature/nombre_de_la_feature
    ```

### Ramas de lanzamiento

Cuando estés listo para preparar una nueva versión para lanzamiento, sigue estos pasos:

1. Crea una nueva rama a partir de `develop` para el lanzamiento:

    ```bash
    git checkout develop
    git checkout -b release/nombre_del_release
    ```

2. Haz cualquier ajuste final necesario, como la actualización de la versión, la corrección de errores, etc.

3. Una vez que el lanzamiento esté listo, haz merge de la rama de lanzamiento en `main` y `develop`:

    ```bash
    git checkout main
    git merge --no-ff release/nombre_del_release
    git checkout develop
    git merge --no-ff release/nombre_del_release
    ```

4. Opcionalmente, puedes etiquetar el lanzamiento con la versión correspondiente:

    ```bash
    git tag -a v1.0 -m "Versión 1.0"
    ```