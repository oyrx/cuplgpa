FROM daocloud.io/php:5.6-fpm
COPY config/php.ini /usr/local/etc/php
COPY / /var/www/html/
CMD ["php-fpm"]
