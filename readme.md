Csv test projects by Eugene Shashkov

Installation:

copy git repo:

1)git pull https://github.com/fonjeekay/csvtest

install dependencies

(*nix)

2)composer install


(windows)

2)php composer.phar install

3)rename `.env.example` to `.env`


(inside `.env` file:)

4)change config to your database:

DB_DATABASE=your_database_name

DB_USERNAME=your_user_name

DB_PASSWORD=your_password



5)php artisan key:generate

