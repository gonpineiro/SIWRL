# SIWRL: INIT
SI3: Inicio del Proyecto

### 1° Paso: Instalar Laravel

composer create-project --prefer-dist laravel/laravel 'name'

### 2° Paso: Prepara entorno para React.js

    ```
    composer require laravel/ui

    // Generate basic scaffolding...
    php artisan ui react

    // Generate login / registration scaffolding...
    php artisan ui react --auth
    ```

### 3° Paso: Instalar dependencias de Redux

    ```
    npm install --save react-redux redux redux-thunk
    ```

### 4° Paso: Configurar Babel

    ```
    npm install --save-dev @babel/plugin-transform-arrow-functions
    npm install --save-dev @babel/plugin-proposal-class-properties
    ```

#### Crear babel.config.js en la raiz del proyecto con el siguente contenido

    ```
    module.exports = {
    presets: [ "@babel/preset-env", "@babel/preset-react" ],
    plugins: [ "@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties" ]
    }
    ```
