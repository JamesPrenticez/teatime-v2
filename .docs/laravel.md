# Laravel
```bash 
composer create-project laravel/laravel .
```

```bash
php artisan serve
```

# Migrations
```bash
php artisan make:model Survey -m
php artisan make:model SurveyQuestion -m
php artisan make:model SurveyAnswer -m
php artisan make:model SurveyQuestionAnswer -m
```
update the migrations
then run migrations
```bash
php artisan migrate
```

# API
(API)[https://laravel.com/docs/11.x/routing#api-routes]
```bash
php artisan install:api
```

# Auth
make sure sanctum is installed

```bash
composer require laravel/sanctum
```
Publish the Sanctum configuration:
```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Run the Sanctum migrations:
```bash 
php artisan migrate
```

Add Sanctum's middleware:
Add Sanctum's middleware to your api middleware group within your app/Http/Kernel.php file:
```
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```
## Update User Model to include api tokens

```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, Notifiable;
}
```