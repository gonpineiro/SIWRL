# SIWRL: INIT
SI3: Inicio del Proyecto


### 1° Paso: Instalar Laravel

composer create-project --prefer-dist laravel/laravel 'name'

### 2° Paso: Prepara entorno para React.js

composer require laravel/ui

// Generate basic scaffolding...
php artisan ui react

// Generate login / registration scaffolding...
php artisan ui react --auth