<?php
spl_autoload_register(function ($class) {


    $prefix = 'php_for_react\\Classes\\';

    $base_dir = __DIR__ . '/Classes/';

    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

        if (file_exists($file)) {
            require $file;
    }
});
