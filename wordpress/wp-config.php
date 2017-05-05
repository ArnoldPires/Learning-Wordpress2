<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'learningWordPress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'c1e>]US%-5@s GSn`G)XI[-_2My/2DD?}J(T,Ik_?EM+5=3I88JsVWv<>zZr?J.n');
define('SECURE_AUTH_KEY',  'w|3{7KxH$y4@ckFY~uphuY>IhtcG:a[-<N#Fo#CSH18_I!]A}QL%@AS5RJ<m?He:');
define('LOGGED_IN_KEY',    '&zO@#_${Y#}L)M+|LD*,H2WzF{fu^Oln%o3R^c}f;lscWK*5g74RV9IHEipmX!j ');
define('NONCE_KEY',        'm.b:|o3FzFdDCdE&x(.R~zo7pj-xoW}595m1F:y&V@I7QQt2A+/8PNqNv;-,J`?x');
define('AUTH_SALT',        'Jp|@`M<#lzd!;y7HGuL(NRk}@7#z.|B?g+EE4u66Ny6d#]FVotDsOOYeDr^v]}^+');
define('SECURE_AUTH_SALT', '}ix:RVKK^]s&}hqeYd7l|?Q1yz>yCt;?gUaby}FVO`CpDVXaaoR1d)%Z]SMywL>&');
define('LOGGED_IN_SALT',   'eo z<?S&? d2Fw))riVp!8d@_^x8sAH2D89XBeS|MxH`mwEYe_RsyFEb@o1^NdHT');
define('NONCE_SALT',       '&STkI,CR )~25%-4um!n7M2B0u ;p:#4,P0,niOb?XpaAQY%Q#1# 0-V.OR{x0LT');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_learning';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
