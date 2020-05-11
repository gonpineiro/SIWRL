# SIWRL - S.I Web React Laravel
S.I Web React Laravel: Version 1.0.2 - Estable.

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

### Dependencias

#### Desarrollo

    ```
    "devDependencies": {
        "@babel/preset-react": "^7.0.0",
        "axios": "^0.19.2",
        "bootstrap": "^4.0.0",
        "cross-env": "^7.0",
        "jquery": "^3.2",
        "laravel-mix": "^5.0.1",
        "lodash": "^4.17.13",
        "popper.js": "^1.12",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "resolve-url-loader": "^3.1.0",
        "sass": "^1.15.2",
        "sass-loader": "^8.0.0"
    },
    ```

#### Producción

    ```
    "dependencies": {
        "@babel/plugin-proposal-class-properties": "^7.8.3",
        "@babel/plugin-transform-arrow-functions": "^7.8.3",
        "@material-ui/core": "^4.9.13",
        "@material-ui/icons": "^4.9.1",
        "react-redux": "^7.2.0",
        "react-router-dom": "^5.1.2",
        "redux": "^4.0.5",
        "redux-thunk": "^2.3.0"
    }
    ```
