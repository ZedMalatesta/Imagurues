<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
//define('WP_CACHE', true);
//define( 'WPCACHEHOME', '/home/imagurues/public_html/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'new2');

/** Имя пользователя MySQL */
define('DB_USER', 'db_es');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'MRS6ugm%)_1l');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/** Ограничение ревизий */
define('WP_POST_REVISIONS', 3);

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'H9T(z>-{]W3?_3DtLsTmQ+sX,aXK>}r#Bs!`mqI?Ee 4sBw5BttZIzC]D=r3vUCZ');
define('SECURE_AUTH_KEY',  '6T,^/W}=,.x`m}}bPcZ z}siJU&!%0Sc:c_6@Kml13)+]!)PXxhe#()ii:PH:LWf');
define('LOGGED_IN_KEY',    'JsBjw[pBu.AG:BXJd&a(4}W`$.DYn[P-|;:|Qml0O)Zb[6 DFCEi[UE|QqD[95/|');
define('NONCE_KEY',        'mW8dJ%bU`]j2=A^wth*u/E1Ui0VLs$-lsR<cq{`aLRIym<[Y&R?NQ^.!7(rs$&)#');
define('AUTH_SALT',        '$=|YfvI27U-vEJPg&}mi<MH|Z@,%]AigRY`VI*H7#=O&{%Tn/ngjS-fCU)&bg*Z*');
define('SECURE_AUTH_SALT', 'Fvyd}En/)e:C*6&2oB&Gk{g9xMsOEwziD`BKBWtp%$(F]xW.uKl.[T;tAFWbKVcy');
define('LOGGED_IN_SALT',   'JB(,rhx<mKlT?v<=$Y-27E>EN;%8]y_bhF#;2,Iv%5.F$OHV2@[.c`9_9 zn007p');
define('NONCE_SALT',       'yCUlOX0)= W)79^{T-X*;$oLtYOf^hls8_LT-)h`q0:Z/Q8Sk:^GJ_m+543J%::>');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'imagurues';
/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
define('WP_MEMORY_LIMIT', '512M');
/* Это всё, дальше не редактируем. Успехов! */
/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
?>