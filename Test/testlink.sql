-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-11-2017 a las 07:10:09
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testlink`
--
CREATE DATABASE IF NOT EXISTS `testlink` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `testlink`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_assignment_status`
--

DROP TABLE IF EXISTS `tst_assignment_status`;
CREATE TABLE IF NOT EXISTS `tst_assignment_status` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL DEFAULT 'unknown',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_assignment_status`
--

INSERT INTO `tst_assignment_status` (`id`, `description`) VALUES
(1, 'open'),
(2, 'closed'),
(3, 'completed'),
(4, 'todo_urgent'),
(5, 'todo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_assignment_types`
--

DROP TABLE IF EXISTS `tst_assignment_types`;
CREATE TABLE IF NOT EXISTS `tst_assignment_types` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fk_table` varchar(30) DEFAULT '',
  `description` varchar(100) NOT NULL DEFAULT 'unknown',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_assignment_types`
--

INSERT INTO `tst_assignment_types` (`id`, `fk_table`, `description`) VALUES
(1, 'testplan_tcversions', 'testcase_execution'),
(2, 'tcversions', 'testcase_review');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_attachments`
--

DROP TABLE IF EXISTS `tst_attachments`;
CREATE TABLE IF NOT EXISTS `tst_attachments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fk_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `fk_table` varchar(250) DEFAULT '',
  `title` varchar(250) DEFAULT '',
  `description` varchar(250) DEFAULT '',
  `file_name` varchar(250) NOT NULL DEFAULT '',
  `file_path` varchar(250) DEFAULT '',
  `file_size` int(11) NOT NULL DEFAULT '0',
  `file_type` varchar(250) NOT NULL DEFAULT '',
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` longblob,
  `compression_type` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `tst_attachments_idx1` (`fk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_builds`
--

DROP TABLE IF EXISTS `tst_builds`;
CREATE TABLE IF NOT EXISTS `tst_builds` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testplan_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT 'undefined',
  `notes` text,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `is_open` tinyint(1) NOT NULL DEFAULT '1',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `release_date` date DEFAULT NULL,
  `closed_on_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_name` (`testplan_id`,`name`),
  KEY `tst_testplan_id` (`testplan_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Available builds';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_build_design_values`
--

DROP TABLE IF EXISTS `tst_cfield_build_design_values`;
CREATE TABLE IF NOT EXISTS `tst_cfield_build_design_values` (
  `field_id` int(10) NOT NULL DEFAULT '0',
  `node_id` int(10) NOT NULL DEFAULT '0',
  `value` varchar(4000) NOT NULL DEFAULT '',
  PRIMARY KEY (`field_id`,`node_id`),
  KEY `tst_idx_cfield_build_design_values` (`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_design_values`
--

DROP TABLE IF EXISTS `tst_cfield_design_values`;
CREATE TABLE IF NOT EXISTS `tst_cfield_design_values` (
  `field_id` int(10) NOT NULL DEFAULT '0',
  `node_id` int(10) NOT NULL DEFAULT '0',
  `value` varchar(4000) NOT NULL DEFAULT '',
  PRIMARY KEY (`field_id`,`node_id`),
  KEY `tst_idx_cfield_design_values` (`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_execution_values`
--

DROP TABLE IF EXISTS `tst_cfield_execution_values`;
CREATE TABLE IF NOT EXISTS `tst_cfield_execution_values` (
  `field_id` int(10) NOT NULL DEFAULT '0',
  `execution_id` int(10) NOT NULL DEFAULT '0',
  `testplan_id` int(10) NOT NULL DEFAULT '0',
  `tcversion_id` int(10) NOT NULL DEFAULT '0',
  `value` varchar(4000) NOT NULL DEFAULT '',
  PRIMARY KEY (`field_id`,`execution_id`,`testplan_id`,`tcversion_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_node_types`
--

DROP TABLE IF EXISTS `tst_cfield_node_types`;
CREATE TABLE IF NOT EXISTS `tst_cfield_node_types` (
  `field_id` int(10) NOT NULL DEFAULT '0',
  `node_type_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`field_id`,`node_type_id`),
  KEY `tst_idx_custom_fields_assign` (`node_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_testplan_design_values`
--

DROP TABLE IF EXISTS `tst_cfield_testplan_design_values`;
CREATE TABLE IF NOT EXISTS `tst_cfield_testplan_design_values` (
  `field_id` int(10) NOT NULL DEFAULT '0',
  `link_id` int(10) NOT NULL DEFAULT '0' COMMENT 'point to testplan_tcversion id',
  `value` varchar(4000) NOT NULL DEFAULT '',
  PRIMARY KEY (`field_id`,`link_id`),
  KEY `tst_idx_cfield_tplan_design_val` (`link_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_cfield_testprojects`
--

DROP TABLE IF EXISTS `tst_cfield_testprojects`;
CREATE TABLE IF NOT EXISTS `tst_cfield_testprojects` (
  `field_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `testproject_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `display_order` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `location` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `required_on_design` tinyint(1) NOT NULL DEFAULT '0',
  `required_on_execution` tinyint(1) NOT NULL DEFAULT '0',
  `monitorable` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`field_id`,`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_custom_fields`
--

DROP TABLE IF EXISTS `tst_custom_fields`;
CREATE TABLE IF NOT EXISTS `tst_custom_fields` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL DEFAULT '',
  `label` varchar(64) NOT NULL DEFAULT '' COMMENT 'label to display on user interface',
  `type` smallint(6) NOT NULL DEFAULT '0',
  `possible_values` varchar(4000) NOT NULL DEFAULT '',
  `default_value` varchar(4000) NOT NULL DEFAULT '',
  `valid_regexp` varchar(255) NOT NULL DEFAULT '',
  `length_min` int(10) NOT NULL DEFAULT '0',
  `length_max` int(10) NOT NULL DEFAULT '0',
  `show_on_design` tinyint(3) UNSIGNED NOT NULL DEFAULT '1' COMMENT '1=> show it during specification design',
  `enable_on_design` tinyint(3) UNSIGNED NOT NULL DEFAULT '1' COMMENT '1=> user can write/manage it during specification design',
  `show_on_execution` tinyint(3) UNSIGNED NOT NULL DEFAULT '0' COMMENT '1=> show it during test case execution',
  `enable_on_execution` tinyint(3) UNSIGNED NOT NULL DEFAULT '0' COMMENT '1=> user can write/manage it during test case execution',
  `show_on_testplan_design` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `enable_on_testplan_design` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_idx_custom_fields_name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_db_version`
--

DROP TABLE IF EXISTS `tst_db_version`;
CREATE TABLE IF NOT EXISTS `tst_db_version` (
  `version` varchar(50) NOT NULL DEFAULT 'unknown',
  `upgrade_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `notes` text,
  PRIMARY KEY (`version`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_db_version`
--

INSERT INTO `tst_db_version` (`version`, `upgrade_ts`, `notes`) VALUES
('DB 1.9.17', '2017-11-07 19:31:31', 'TestLink 1.9.17 Alan Turing');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_events`
--

DROP TABLE IF EXISTS `tst_events`;
CREATE TABLE IF NOT EXISTS `tst_events` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `transaction_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `log_level` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `source` varchar(45) DEFAULT NULL,
  `description` text NOT NULL,
  `fired_at` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `activity` varchar(45) DEFAULT NULL,
  `object_id` int(10) UNSIGNED DEFAULT NULL,
  `object_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tst_transaction_id` (`transaction_id`),
  KEY `tst_fired_at` (`fired_at`)
) ENGINE=MyISAM AUTO_INCREMENT=281 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_events`
--

INSERT INTO `tst_events` (`id`, `transaction_id`, `log_level`, `source`, `description`, `fired_at`, `activity`, `object_id`, `object_type`) VALUES
(1, 1, 16, 'GUI', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510083134, 'LOGIN', 1, 'users'),
(2, 2, 16, 'GUI', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510088553, 'LOGIN', 1, 'users'),
(3, 3, 16, 'GUI', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:16:\"audit_user_saved\";s:6:\"params\";a:1:{i:0;s:5:\"admin\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510088613, 'SAVE', 1, 'users'),
(4, 4, 32, 'GUI', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510088614, 'LOCALIZATION', 0, NULL),
(5, 5, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:25:\"audit_testproject_created\";s:6:\"params\";a:1:{i:0;s:6:\"PiBank\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510088861, 'CREATE', 1, 'testprojects'),
(6, 5, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'available_test_projects\' is not localized for locale \'es_ES\'  - using en_GB', 1510088861, 'LOCALIZATION', 0, NULL),
(7, 6, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'expiration\' is not localized for locale \'es_ES\'  - using en_GB', 1510089041, 'LOCALIZATION', 0, NULL),
(8, 6, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$images - in C:\\wamp64\\www\\testlink\\lib\\usermanagement\\usersView.php - Line 202', 1510089041, 'PHP', 0, NULL),
(9, 7, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined variable: feedback - in C:\\wamp64\\www\\testlink\\lib\\plugins\\pluginView.php - Line 57', 1510089063, 'PHP', 0, NULL),
(10, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510089093, 'LOCALIZATION', 0, NULL),
(11, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510089093, 'LOCALIZATION', 0, NULL),
(12, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510089093, 'LOCALIZATION', 0, NULL),
(13, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510089094, 'LOCALIZATION', 0, NULL),
(14, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510089094, 'LOCALIZATION', 0, NULL),
(15, 8, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510089095, 'LOCALIZATION', 0, NULL),
(16, 9, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510089107, 'LOCALIZATION', 0, NULL),
(17, 9, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510089107, 'LOCALIZATION', 0, NULL),
(18, 10, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:17:\"audit_user_logout\";s:6:\"params\";a:1:{i:0;s:5:\"admin\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510089128, 'LOGOUT', 1, 'users'),
(19, 11, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510089130, 'LOGIN', 1, 'users'),
(20, 12, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510089131, 'LOCALIZATION', 0, NULL),
(21, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510089131, 'LOCALIZATION', 0, NULL),
(22, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510089131, 'LOCALIZATION', 0, NULL),
(23, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510089131, 'LOCALIZATION', 0, NULL),
(24, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510089131, 'LOCALIZATION', 0, NULL),
(25, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510089131, 'LOCALIZATION', 0, NULL),
(26, 13, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510089131, 'LOCALIZATION', 0, NULL),
(27, 14, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_check_connection\' is not localized for locale \'es_ES\'  - using en_GB', 1510089147, 'LOCALIZATION', 0, NULL),
(28, 14, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issueTracker_connection_ok\' is not localized for locale \'es_ES\'  - using en_GB', 1510089148, 'LOCALIZATION', 0, NULL),
(29, 14, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issueTracker_connection_ko\' is not localized for locale \'es_ES\'  - using en_GB', 1510089148, 'LOCALIZATION', 0, NULL),
(30, 15, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510124635, 'LOGIN', 1, 'users'),
(31, 16, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:17:\"audit_user_logout\";s:6:\"params\";a:1:{i:0;s:5:\"admin\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510124649, 'LOGOUT', 1, 'users'),
(32, 17, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510124653, 'LOGIN', 1, 'users'),
(33, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510124653, 'LOCALIZATION', 0, NULL),
(34, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510124653, 'LOCALIZATION', 0, NULL),
(35, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510124654, 'LOCALIZATION', 0, NULL),
(36, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510124654, 'LOCALIZATION', 0, NULL),
(37, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510124654, 'LOCALIZATION', 0, NULL),
(38, 18, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510124654, 'LOCALIZATION', 0, NULL),
(39, 19, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510124654, 'LOCALIZATION', 0, NULL),
(40, 20, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_check_connection\' is not localized for locale \'es_ES\'  - using en_GB', 1510124671, 'LOCALIZATION', 0, NULL),
(41, 20, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issueTracker_connection_ok\' is not localized for locale \'es_ES\'  - using en_GB', 1510124671, 'LOCALIZATION', 0, NULL),
(42, 20, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issueTracker_connection_ko\' is not localized for locale \'es_ES\'  - using en_GB', 1510124671, 'LOCALIZATION', 0, NULL),
(43, 21, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510300890, 'LOGIN', 1, 'users'),
(44, 22, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510300891, 'LOCALIZATION', 0, NULL),
(45, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510300891, 'LOCALIZATION', 0, NULL),
(46, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510300891, 'LOCALIZATION', 0, NULL),
(47, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510300891, 'LOCALIZATION', 0, NULL),
(48, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510300891, 'LOCALIZATION', 0, NULL),
(49, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510300891, 'LOCALIZATION', 0, NULL),
(50, 23, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510300891, 'LOCALIZATION', 0, NULL),
(51, 24, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'available_test_projects\' is not localized for locale \'es_ES\'  - using en_GB', 1510300969, 'LOCALIZATION', 0, NULL),
(52, 25, 2, 'GUI - Proyecto de Pruebas ID : 1', 'In TestProject Update with id: 1, name: PiBank, prefix: PB_', 1510302249, NULL, 0, NULL),
(53, 25, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:23:\"audit_testproject_saved\";s:6:\"params\";a:1:{i:0;s:6:\"PiBank\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510302249, 'UPDATE', 1, 'testprojects'),
(54, 26, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510302260, 'LOCALIZATION', 0, NULL),
(55, 26, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510302260, 'LOCALIZATION', 0, NULL),
(56, 27, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_to_get_attachment\' is not localized for locale \'es_ES\'  - using en_GB', 1510302261, 'LOCALIZATION', 0, NULL),
(57, 27, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_ea_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510302261, 'LOCALIZATION', 0, NULL),
(58, 27, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_inline_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510302261, 'LOCALIZATION', 0, NULL),
(59, 28, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510302331, 'PHP', 0, NULL),
(60, 29, 1, 'DATABASE', 'ERROR ON exec_query() - database.class.php <br />1064 - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'AND RSPEC.id = 0\' at line 1 - /* Class:requirement_spec_mgr - Method: get_by_id */ SELECT RSPEC.id,RSPEC.doc_id, RSPEC.testproject_id,  RSPEC_REV.id AS revision_id, RSPEC_REV.revision  , \'\' AS author, \'\' AS modifier, NH_RSPEC.node_order,  RSPEC_REV.scope,RSPEC_REV.total_req,RSPEC_REV.type, RSPEC_REV.author_id,RSPEC_REV.creation_ts,RSPEC_REV.modifier_id, RSPEC_REV.modification_ts,NH_RSPEC.name AS title  FROM tst_req_specs RSPEC  JOIN tst_req_specs_revisions RSPEC_REV  ON RSPEC_REV.parent_id = RSPEC.id  JOIN tst_nodes_hierarchy NH_RSPEC  ON RSPEC.id = NH_RSPEC.id  WHERE RSPEC.id = NH_RSPEC.id  AND RSPEC_REV.id =   AND RSPEC.id = 0 <br />THE MESSAGE : /* Class:requirement_spec_mgr - Method: get_by_id */ SELECT RSPEC.id,RSPEC.doc_id, RSPEC.testproject_id,  RSPEC_REV.id AS revision_id, RSPEC_REV.revision  , \'\' AS author, \'\' AS modifier, NH_RSPEC.node_order,  RSPEC_REV.scope,RSPEC_REV.total_req,RSPEC_REV.type, RSPEC_REV.author_id,RSPEC_REV.creation_ts,RSPEC_REV.modifier_id, RSPEC_REV.modification_ts,NH_RSPEC.name AS title  FROM tst_req_specs RSPEC  JOIN tst_req_specs_revisions RSPEC_REV  ON RSPEC_REV.parent_id = RSPEC.id  JOIN tst_nodes_hierarchy NH_RSPEC  ON RSPEC.id = NH_RSPEC.id  WHERE RSPEC.id = NH_RSPEC.id  AND RSPEC_REV.id =   AND RSPEC.id = 0 \nQuery failed: errorcode[1064]\n	errormsg:You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'AND RSPEC.id = 0\' at line 1 ', 1510302538, NULL, 0, NULL),
(61, 30, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_req_spec_created\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:13:\"REQ_PRINCIPAL\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510302567, 'CREATE', 2, 'req_specs'),
(62, 31, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_mon\' is not localized for locale \'es_ES\'  - using en_GB', 1510302571, 'LOCALIZATION', 0, NULL),
(63, 32, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'caption_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510302658, 'LOCALIZATION', 0, NULL),
(64, 33, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'assign_tproject_roles\' is not localized for locale \'es_ES\'  - using en_GB', 1510302666, 'LOCALIZATION', 0, NULL),
(65, 33, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'assign_tplan_roles\' is not localized for locale \'es_ES\'  - using en_GB', 1510302666, 'LOCALIZATION', 0, NULL),
(66, 33, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'system_design_blocks_global_admin_change\' is not localized for locale \'es_ES\'  - using en_GB', 1510302666, 'LOCALIZATION', 0, NULL),
(67, 34, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510302688, 'PHP', 0, NULL),
(68, 35, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_attachments\' is not localized for locale \'es_ES\'  - using en_GB', 1510302931, 'LOCALIZATION', 0, NULL),
(69, 36, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:17:\"audit_user_logout\";s:6:\"params\";a:1:{i:0;s:5:\"admin\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510302954, 'LOGOUT', 1, 'users'),
(70, 37, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510302955, 'LOGIN', 1, 'users'),
(71, 38, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510302956, 'LOCALIZATION', 0, NULL),
(72, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510302956, 'LOCALIZATION', 0, NULL),
(73, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510302956, 'LOCALIZATION', 0, NULL),
(74, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510302956, 'LOCALIZATION', 0, NULL),
(75, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510302956, 'LOCALIZATION', 0, NULL),
(76, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510302956, 'LOCALIZATION', 0, NULL),
(77, 39, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510302956, 'LOCALIZATION', 0, NULL),
(78, 40, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510302979, 'LOCALIZATION', 0, NULL),
(79, 40, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510302979, 'LOCALIZATION', 0, NULL),
(80, 41, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_to_get_attachment\' is not localized for locale \'es_ES\'  - using en_GB', 1510302980, 'LOCALIZATION', 0, NULL),
(81, 41, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_ea_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510302980, 'LOCALIZATION', 0, NULL),
(82, 41, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_inline_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510302980, 'LOCALIZATION', 0, NULL),
(83, 42, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'attachment_skipped_during_import\' is not localized for locale \'es_ES\'  - using en_GB', 1510302993, 'LOCALIZATION', 0, NULL),
(84, 42, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'req_not_in_DB_on_tcimport\' is not localized for locale \'es_ES\'  - using en_GB', 1510302993, 'LOCALIZATION', 0, NULL),
(85, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'applyExecTypeChangeToAllSteps\' is not localized for locale \'es_ES\'  - using en_GB', 1510303003, 'LOCALIZATION', 0, NULL),
(86, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk\' is not localized for locale \'es_ES\'  - using en_GB', 1510303003, 'LOCALIZATION', 0, NULL),
(87, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'freeze_this_tcversion\' is not localized for locale \'es_ES\'  - using en_GB', 1510303003, 'LOCALIZATION', 0, NULL),
(88, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'clear_all_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510303004, 'LOCALIZATION', 0, NULL),
(89, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'img_title_remove_keyword\' is not localized for locale \'es_ES\'  - using en_GB', 1510303004, 'LOCALIZATION', 0, NULL),
(90, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_msg\' is not localized for locale \'es_ES\'  - using en_GB', 1510303004, 'LOCALIZATION', 0, NULL),
(91, 43, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_title\' is not localized for locale \'es_ES\'  - using en_GB', 1510303004, 'LOCALIZATION', 0, NULL),
(92, 44, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_mon\' is not localized for locale \'es_ES\'  - using en_GB', 1510310213, 'LOCALIZATION', 0, NULL),
(93, 45, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'req_title_lenght_exceeded\' is not localized for locale \'es_ES\' ', 1510310227, 'LOCALIZATION', 0, NULL),
(94, 45, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'req_docid_lenght_exceeded\' is not localized for locale \'es_ES\' ', 1510310227, 'LOCALIZATION', 0, NULL),
(95, 46, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'monitor_set\' is not localized for locale \'es_ES\'  - using en_GB', 1510310258, 'LOCALIZATION', 0, NULL),
(96, 47, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510310704, 'LOGIN', 1, 'users'),
(97, 48, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:23:\"audit_requirement_saved\";s:6:\"params\";a:1:{i:0;s:9:\"SPRNT_2_1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510310808, 'SAVE', 28, 'requirements'),
(98, 49, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:23:\"Descarga de parámetros\";i:1;s:16:\"A first TestCase\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510310851, 'ASSIGN', 0, NULL),
(99, 50, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:23:\"Descarga de parámetros\";i:1;s:19:\"Your first TestCase\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510310873, 'ASSIGN', 0, NULL),
(100, 51, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'caption_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510311432, 'LOCALIZATION', 0, NULL),
(101, 51, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'on_turn_off\' is not localized for locale \'es_ES\'  - using en_GB', 1510311432, 'LOCALIZATION', 0, NULL),
(102, 51, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'off_turn_on\' is not localized for locale \'es_ES\'  - using en_GB', 1510311432, 'LOCALIZATION', 0, NULL),
(103, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(104, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(105, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(106, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(107, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(108, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(109, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(110, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(111, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(112, 51, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nInvalid argument supplied for foreach() - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqMonitorOverview.php - Line 91', 1510311432, 'PHP', 0, NULL),
(113, 52, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'onlywithuser\' is not localized for locale \'es_ES\'  - using en_GB', 1510311450, 'LOCALIZATION', 0, NULL),
(114, 53, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_testplan_created\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:26:\"Plan 1 de Pruebas Spring 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510311612, 'CREATED', 51, 'testplans'),
(115, 54, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'with_exec_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510311647, 'LOCALIZATION', 0, NULL),
(116, 55, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:19:\"audit_build_created\";s:6:\"params\";a:3:{i:0;s:6:\"PiBank\";i:1;s:26:\"Plan 1 de Pruebas Spring 2\";i:2;s:14:\"Build Spring 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510311665, 'CREATE', 1, 'builds'),
(117, 56, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'execution_context\' is not localized for locale \'es_ES\'  - using en_GB', 1510311683, 'LOCALIZATION', 0, NULL),
(118, 57, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510312328, 'LOGIN', 1, 'users'),
(119, 58, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'hint_add_testcases_to_testplan_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510312378, 'LOCALIZATION', 0, NULL),
(120, 59, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:26:\"audit_tc_added_to_testplan\";s:6:\"params\";a:3:{i:0;s:24:\"PB_-1 : A first TestCase\";i:1;s:1:\"1\";i:2;s:43:\"Plan 1 de Pruebas Spring 2 - Plataforma:WEB\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510312397, 'ASSIGN', 51, 'testplans'),
(121, 60, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined index: bulk_tester_div - in C:\\wamp64\\www\\testlink\\lib\\plan\\tc_exec_assignment.php - Line 302', 1510312418, 'PHP', 0, NULL),
(122, 60, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'user_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510312418, 'LOCALIZATION', 0, NULL),
(123, 60, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_send_link\' is not localized for locale \'es_ES\'  - using en_GB', 1510312418, 'LOCALIZATION', 0, NULL),
(124, 61, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined index: bulk_tester_div - in C:\\wamp64\\www\\testlink\\lib\\plan\\tc_exec_assignment.php - Line 302', 1510312421, 'PHP', 0, NULL),
(125, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_passed\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(126, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_failed\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(127, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_blocked\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(128, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_passed_next\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(129, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_failed_next\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(130, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_blocked_next\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(131, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issue_on_step\' is not localized for locale \'es_ES\'  - using en_GB', 1510312468, 'LOCALIZATION', 0, NULL),
(132, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'add_link_to_tlexec\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(133, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'bug_copy_from_latest_exec\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(134, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_next_tcase\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(135, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'bug_summary\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(136, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'bug_description\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(137, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issueType\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(138, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'issuePriority\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(139, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'artifactVersion\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(140, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'artifactComponent\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(141, 62, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'create_issue_feedback\' is not localized for locale \'es_ES\'  - using en_GB', 1510312469, 'LOCALIZATION', 0, NULL),
(142, 63, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510397717, 'LOGIN', 1, 'users'),
(143, 64, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_req_spec_deleted\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:13:\"REQ_PRINCIPAL\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510398120, 'DELETE', 2, 'req_specs'),
(144, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_with_prefix\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(145, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_summary\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(146, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_steps\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(147, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_preconditions\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(148, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_testcase_requirements\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(149, 65, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_attachments\' is not localized for locale \'es_ES\'  - using en_GB', 1510399632, 'LOCALIZATION', 0, NULL),
(150, 66, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510403032, 'LOGIN', 1, 'users'),
(151, 67, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510403033, 'LOCALIZATION', 0, NULL),
(152, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510403033, 'LOCALIZATION', 0, NULL),
(153, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510403033, 'LOCALIZATION', 0, NULL),
(154, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510403033, 'LOCALIZATION', 0, NULL),
(155, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510403033, 'LOCALIZATION', 0, NULL),
(156, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510403033, 'LOCALIZATION', 0, NULL),
(157, 68, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510403033, 'LOCALIZATION', 0, NULL),
(158, 69, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:37:\"audit_all_user_roles_removed_testplan\";s:6:\"params\";a:1:{i:0;s:26:\"Plan 1 de Pruebas Spring 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510403046, 'ASSIGN', 51, 'testplans'),
(159, 69, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_testplan_deleted\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:26:\"Plan 1 de Pruebas Spring 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510403046, 'DELETE', 51, 'testplan'),
(160, 70, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403076, 'PHP', 0, NULL),
(161, 70, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403076, 'PHP', 0, NULL),
(162, 71, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403088, 'PHP', 0, NULL),
(163, 71, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403088, 'PHP', 0, NULL),
(164, 71, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403088, 'PHP', 0, NULL),
(165, 72, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403095, 'PHP', 0, NULL),
(166, 72, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403095, 'PHP', 0, NULL),
(167, 72, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403095, 'PHP', 0, NULL),
(168, 72, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403095, 'PHP', 0, NULL),
(169, 73, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403112, 'PHP', 0, NULL),
(170, 73, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403112, 'PHP', 0, NULL),
(171, 73, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403112, 'PHP', 0, NULL),
(172, 73, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403112, 'PHP', 0, NULL),
(173, 73, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$editorType - in C:\\wamp64\\www\\testlink\\gui\\templates_c\\1d30e71d6ead14f5935875b44246de44889459b8.file.platformsView.tpl.php - Line 135', 1510403112, 'PHP', 0, NULL),
(174, 74, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'available_test_projects\' is not localized for locale \'es_ES\'  - using en_GB', 1510403170, 'LOCALIZATION', 0, NULL),
(175, 75, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'assign_tproject_roles\' is not localized for locale \'es_ES\'  - using en_GB', 1510403176, 'LOCALIZATION', 0, NULL),
(176, 75, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'assign_tplan_roles\' is not localized for locale \'es_ES\'  - using en_GB', 1510403176, 'LOCALIZATION', 0, NULL),
(177, 75, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'system_design_blocks_global_admin_change\' is not localized for locale \'es_ES\'  - using en_GB', 1510403176, 'LOCALIZATION', 0, NULL),
(178, 76, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'expiration\' is not localized for locale \'es_ES\'  - using en_GB', 1510403185, 'LOCALIZATION', 0, NULL),
(179, 76, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$images - in C:\\wamp64\\www\\testlink\\lib\\usermanagement\\usersView.php - Line 202', 1510403185, 'PHP', 0, NULL),
(180, 77, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'action_create_user\' is not localized for locale \'es_ES\'  - using en_GB', 1510403189, 'LOCALIZATION', 0, NULL),
(181, 77, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'action_edit_user\' is not localized for locale \'es_ES\'  - using en_GB', 1510403189, 'LOCALIZATION', 0, NULL),
(182, 77, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'expiration_date\' is not localized for locale \'es_ES\'  - using en_GB', 1510403189, 'LOCALIZATION', 0, NULL),
(183, 78, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$images - in C:\\wamp64\\www\\testlink\\lib\\usermanagement\\usersView.php - Line 202', 1510403193, 'PHP', 0, NULL),
(184, 79, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:18:\"audit_user_created\";s:6:\"params\";a:1:{i:0;s:4:\"sara\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510403268, 'CREATE', 2, 'users'),
(185, 80, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$images - in C:\\wamp64\\www\\testlink\\lib\\usermanagement\\usersView.php - Line 202', 1510403268, 'PHP', 0, NULL),
(186, 81, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'right_testcase_freeze\' is not localized for locale \'es_ES\'  - using en_GB', 1510403280, 'LOCALIZATION', 0, NULL),
(187, 81, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'right_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510403280, 'LOCALIZATION', 0, NULL),
(188, 81, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'role_management\' is not localized for locale \'es_ES\'  - using en_GB', 1510403280, 'LOCALIZATION', 0, NULL),
(189, 82, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined property: stdClass::$images - in C:\\wamp64\\www\\testlink\\lib\\usermanagement\\usersView.php - Line 202', 1510403284, 'PHP', 0, NULL),
(190, 83, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510403295, 'LOCALIZATION', 0, NULL),
(191, 83, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510403295, 'LOCALIZATION', 0, NULL),
(192, 84, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'req_title_lenght_exceeded\' is not localized for locale \'es_ES\' ', 1510403984, 'LOCALIZATION', 0, NULL),
(193, 84, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'req_docid_lenght_exceeded\' is not localized for locale \'es_ES\' ', 1510403984, 'LOCALIZATION', 0, NULL),
(194, 85, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_mon\' is not localized for locale \'es_ES\'  - using en_GB', 1510404005, 'LOCALIZATION', 0, NULL),
(195, 85, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_to_get_attachment\' is not localized for locale \'es_ES\'  - using en_GB', 1510404005, 'LOCALIZATION', 0, NULL),
(196, 85, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_ea_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510404005, 'LOCALIZATION', 0, NULL),
(197, 85, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_inline_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510404005, 'LOCALIZATION', 0, NULL),
(198, 86, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'monitor_set\' is not localized for locale \'es_ES\'  - using en_GB', 1510404012, 'LOCALIZATION', 0, NULL),
(199, 87, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'export_attachments\' is not localized for locale \'es_ES\'  - using en_GB', 1510404040, 'LOCALIZATION', 0, NULL),
(200, 88, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_req_spec_deleted\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:8:\"Sprint 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404098, 'DELETE', 156, 'req_specs'),
(201, 89, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_testplan_created\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:17:\"TestPlan Sprint 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404132, 'CREATED', 174, 'testplans'),
(202, 89, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:32:\"audit_users_roles_added_testplan\";s:6:\"params\";a:3:{i:0;s:5:\"admin\";i:1;s:17:\"TestPlan Sprint 2\";i:2;s:5:\"admin\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404132, 'ASSIGN', 174, 'testplans'),
(203, 90, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404173, 'PHP', 0, NULL),
(204, 91, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404177, 'PHP', 0, NULL),
(205, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'applyExecTypeChangeToAllSteps\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(206, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(207, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'freeze_this_tcversion\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(208, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'clear_all_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(209, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'img_title_remove_keyword\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(210, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_msg\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(211, 92, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_title\' is not localized for locale \'es_ES\'  - using en_GB', 1510404205, 'LOCALIZATION', 0, NULL),
(212, 93, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_save_and_insert\' is not localized for locale \'es_ES\'  - using en_GB', 1510404211, 'LOCALIZATION', 0, NULL),
(213, 94, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404229, 'PHP', 0, NULL),
(214, 95, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404272, 'PHP', 0, NULL),
(215, 96, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404277, 'PHP', 0, NULL),
(216, 97, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404297, 'PHP', 0, NULL),
(217, 97, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:73:\"Yo como usuario necesito un login para poder acceder a mi Ã¡rea privada\";i:1;s:22:\"Iniciar la aplicación\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404297, 'ASSIGN', 0, NULL),
(218, 98, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404304, 'PHP', 0, NULL),
(219, 99, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404308, 'PHP', 0, NULL),
(220, 99, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:73:\"Yo como usuario necesito un login para poder acceder a mi Ã¡rea privada\";i:1;s:22:\"Iniciar la aplicación\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404308, 'ASSIGN', 0, NULL),
(221, 100, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404311, 'PHP', 0, NULL),
(222, 101, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404316, 'PHP', 0, NULL),
(223, 102, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510404319, 'PHP', 0, NULL),
(224, 102, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:73:\"Yo como usuario necesito un login para poder acceder a mi Ã¡rea privada\";i:1;s:22:\"Iniciar la aplicación\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404319, 'ASSIGN', 0, NULL),
(225, 103, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:22:\"audit_req_spec_deleted\";s:6:\"params\";a:2:{i:0;s:6:\"PiBank\";i:1;s:8:\"Sprint 2\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510404355, 'DELETE', 175, 'req_specs'),
(226, 104, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510405418, 'LOGIN', 1, 'users'),
(227, 105, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510667745, 'LOGIN', 1, 'users'),
(228, 106, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510667746, 'LOCALIZATION', 0, NULL),
(229, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510667746, 'LOCALIZATION', 0, NULL),
(230, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510667746, 'LOCALIZATION', 0, NULL),
(231, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510667746, 'LOCALIZATION', 0, NULL),
(232, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510667746, 'LOCALIZATION', 0, NULL),
(233, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510667747, 'LOCALIZATION', 0, NULL),
(234, 107, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510667747, 'LOCALIZATION', 0, NULL),
(235, 108, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_to_get_attachment\' is not localized for locale \'es_ES\'  - using en_GB', 1510667772, 'LOCALIZATION', 0, NULL),
(236, 108, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_ea_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510667772, 'LOCALIZATION', 0, NULL),
(237, 108, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_inline_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510667772, 'LOCALIZATION', 0, NULL),
(238, 109, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined index: testplanID - in C:\\wamp64\\www\\testlink\\lib\\general\\frmWorkArea.php - Line 107', 1510667780, 'PHP', 0, NULL),
(239, 109, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_NOTICE\nUndefined index: testplanName - in C:\\wamp64\\www\\testlink\\lib\\general\\frmWorkArea.php - Line 108', 1510667780, 'PHP', 0, NULL),
(240, 109, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'no_good_build\' is not localized for locale \'es_ES\'  - using en_GB', 1510667780, 'LOCALIZATION', 0, NULL),
(241, 110, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510668477, 'LOCALIZATION', 0, NULL),
(242, 110, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510668477, 'LOCALIZATION', 0, NULL),
(243, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'applyExecTypeChangeToAllSteps\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL);
INSERT INTO `tst_events` (`id`, `transaction_id`, `log_level`, `source`, `description`, `fired_at`, `activity`, `object_id`, `object_type`) VALUES
(244, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(245, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'freeze_this_tcversion\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(246, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'clear_all_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(247, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'img_title_remove_keyword\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(248, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_msg\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(249, 111, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_title\' is not localized for locale \'es_ES\'  - using en_GB', 1510668505, 'LOCALIZATION', 0, NULL),
(250, 112, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668510, 'PHP', 0, NULL),
(251, 113, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668522, 'PHP', 0, NULL),
(252, 114, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668526, 'PHP', 0, NULL),
(253, 115, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'monitor_set\' is not localized for locale \'es_ES\'  - using en_GB', 1510668561, 'LOCALIZATION', 0, NULL),
(254, 116, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668568, 'PHP', 0, NULL),
(255, 117, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668573, 'PHP', 0, NULL),
(256, 117, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:77:\"Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada\";i:1;s:22:\"Iniciar la aplicación\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510668573, 'ASSIGN', 0, NULL),
(257, 118, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668695, 'PHP', 0, NULL),
(258, 119, 2, 'GUI - Proyecto de Pruebas ID : 1', 'E_WARNING\nCreating default object from empty value - in C:\\wamp64\\www\\testlink\\lib\\requirements\\reqTcAssign.php - Line 353', 1510668699, 'PHP', 0, NULL),
(259, 119, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_req_assigned_tc\";s:6:\"params\";a:2:{i:0;s:77:\"Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada\";i:1;s:29:\"Login sin recordar el usuario\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510668699, 'ASSIGN', 0, NULL),
(260, 120, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_save_and_insert\' is not localized for locale \'es_ES\'  - using en_GB', 1510668791, 'LOCALIZATION', 0, NULL),
(261, 121, 16, 'GUI - Proyecto de Pruebas ID : 1', 'O:18:\"tlMetaStringHelper\":4:{s:5:\"label\";s:21:\"audit_login_succeeded\";s:6:\"params\";a:2:{i:0;s:5:\"admin\";i:1;s:3:\"::1\";}s:13:\"bDontLocalize\";b:0;s:14:\"bDontFireEvent\";b:0;}', 1510827929, 'LOGIN', 1, 'users'),
(262, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_config\' is not localized for locale \'es_ES\' ', 1510827930, 'LOCALIZATION', 0, NULL),
(263, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_left_bottom_link\' is not localized for locale \'es_ES\' ', 1510827930, 'LOCALIZATION', 0, NULL),
(264, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_top_link\' is not localized for locale \'es_ES\' ', 1510827930, 'LOCALIZATION', 0, NULL),
(265, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'plugin_TLTest_right_bottom_link\' is not localized for locale \'es_ES\' ', 1510827930, 'LOCALIZATION', 0, NULL),
(266, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_exec_ro_access\' is not localized for locale \'es_ES\'  - using en_GB', 1510827930, 'LOCALIZATION', 0, NULL),
(267, 122, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'href_req_monitor_overview\' is not localized for locale \'es_ES\'  - using en_GB', 1510827930, 'LOCALIZATION', 0, NULL),
(268, 123, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'full_text_search\' is not localized for locale \'es_ES\'  - using en_GB', 1510827931, 'LOCALIZATION', 0, NULL),
(269, 124, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_remove\' is not localized for locale \'es_ES\'  - using en_GB', 1510827935, 'LOCALIZATION', 0, NULL),
(270, 124, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk_copy\' is not localized for locale \'es_ES\'  - using en_GB', 1510827935, 'LOCALIZATION', 0, NULL),
(271, 125, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'click_to_get_attachment\' is not localized for locale \'es_ES\'  - using en_GB', 1510827935, 'LOCALIZATION', 0, NULL),
(272, 125, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_ea_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510827935, 'LOCALIZATION', 0, NULL),
(273, 125, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'display_inline_string\' is not localized for locale \'es_ES\'  - using en_GB', 1510827935, 'LOCALIZATION', 0, NULL),
(274, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'applyExecTypeChangeToAllSteps\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(275, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'btn_bulk\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(276, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'freeze_this_tcversion\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(277, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'clear_all_status\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(278, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'img_title_remove_keyword\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(279, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_msg\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL),
(280, 126, 32, 'GUI - Proyecto de Pruebas ID : 1', 'string \'remove_kw_msgbox_title\' is not localized for locale \'es_ES\'  - using en_GB', 1510827941, 'LOCALIZATION', 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_executions`
--

DROP TABLE IF EXISTS `tst_executions`;
CREATE TABLE IF NOT EXISTS `tst_executions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `build_id` int(10) NOT NULL DEFAULT '0',
  `tester_id` int(10) UNSIGNED DEFAULT NULL,
  `execution_ts` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `testplan_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tcversion_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tcversion_number` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `platform_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `execution_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 -> manual, 2 -> automated',
  `execution_duration` decimal(6,2) DEFAULT NULL COMMENT 'NULL will be considered as NO DATA Provided by user',
  `notes` text,
  PRIMARY KEY (`id`),
  KEY `tst_executions_idx1` (`testplan_id`,`tcversion_id`,`platform_id`,`build_id`),
  KEY `tst_executions_idx2` (`execution_type`),
  KEY `tst_executions_idx3` (`tcversion_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_execution_bugs`
--

DROP TABLE IF EXISTS `tst_execution_bugs`;
CREATE TABLE IF NOT EXISTS `tst_execution_bugs` (
  `execution_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `bug_id` varchar(64) NOT NULL DEFAULT '0',
  `tcstep_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`execution_id`,`bug_id`,`tcstep_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_execution_tcsteps`
--

DROP TABLE IF EXISTS `tst_execution_tcsteps`;
CREATE TABLE IF NOT EXISTS `tst_execution_tcsteps` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `execution_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tcstep_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `notes` text,
  `status` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_execution_tcsteps_idx1` (`execution_id`,`tcstep_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_inventory`
--

DROP TABLE IF EXISTS `tst_inventory`;
CREATE TABLE IF NOT EXISTS `tst_inventory` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testproject_id` int(10) UNSIGNED NOT NULL,
  `owner_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `ipaddress` varchar(255) NOT NULL,
  `content` text,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modification_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `tst_inventory_idx1` (`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_issuetrackers`
--

DROP TABLE IF EXISTS `tst_issuetrackers`;
CREATE TABLE IF NOT EXISTS `tst_issuetrackers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` int(10) DEFAULT '0',
  `cfg` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_issuetrackers_uidx1` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_keywords`
--

DROP TABLE IF EXISTS `tst_keywords`;
CREATE TABLE IF NOT EXISTS `tst_keywords` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `keyword` varchar(100) NOT NULL DEFAULT '',
  `testproject_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `notes` text,
  PRIMARY KEY (`id`),
  KEY `tst_testproject_id` (`testproject_id`),
  KEY `tst_keyword` (`keyword`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `tst_latest_req_version`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `tst_latest_req_version`;
CREATE TABLE IF NOT EXISTS `tst_latest_req_version` (
`req_id` int(10) unsigned
,`version` smallint(5) unsigned
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `tst_latest_rspec_revision`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `tst_latest_rspec_revision`;
CREATE TABLE IF NOT EXISTS `tst_latest_rspec_revision` (
`req_spec_id` int(10) unsigned
,`testproject_id` int(10) unsigned
,`revision` smallint(5) unsigned
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `tst_latest_tcase_version_number`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `tst_latest_tcase_version_number`;
CREATE TABLE IF NOT EXISTS `tst_latest_tcase_version_number` (
`testcase_id` int(10) unsigned
,`version` smallint(5) unsigned
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_milestones`
--

DROP TABLE IF EXISTS `tst_milestones`;
CREATE TABLE IF NOT EXISTS `tst_milestones` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testplan_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `target_date` date DEFAULT NULL,
  `start_date` date NOT NULL,
  `a` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `b` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `c` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT 'undefined',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_name_testplan_id` (`name`,`testplan_id`),
  KEY `tst_testplan_id` (`testplan_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_nodes_hierarchy`
--

DROP TABLE IF EXISTS `tst_nodes_hierarchy`;
CREATE TABLE IF NOT EXISTS `tst_nodes_hierarchy` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `node_type_id` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `node_order` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tst_pid_m_nodeorder` (`parent_id`,`node_order`)
) ENGINE=MyISAM AUTO_INCREMENT=212 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_nodes_hierarchy`
--

INSERT INTO `tst_nodes_hierarchy` (`id`, `name`, `parent_id`, `node_type_id`, `node_order`) VALUES
(1, 'PiBank', NULL, 1, 1),
(148, 'Contratar nueva cuenta', 142, 3, 1),
(149, '', 148, 4, 0),
(150, '', 149, 9, 0),
(151, '', 149, 9, 0),
(152, '', 149, 9, 0),
(153, '', 149, 9, 0),
(129, '', 122, 9, 0),
(120, '', 111, 9, 0),
(121, 'Login sin recordar el usuario', 109, 3, 1),
(128, '', 122, 9, 0),
(122, '', 121, 4, 0),
(193, 'Sprint 2', 1, 6, 0),
(105, 'Iniciar la aplicación', 1, 2, 1),
(106, 'Iniciar la aplicación', 105, 3, 1),
(107, '', 106, 4, 0),
(108, '', 107, 9, 0),
(109, 'Pantalla de login', 1, 2, 2),
(147, '', 144, 9, 0),
(146, '', 144, 9, 0),
(145, '', 144, 9, 0),
(144, '', 143, 4, 0),
(143, 'Basico Cuentas', 142, 3, 1),
(141, '', 135, 9, 0),
(142, 'Cuentas', 1, 2, 4),
(140, '', 135, 9, 0),
(139, '', 135, 9, 0),
(138, '', 135, 9, 0),
(137, '', 135, 9, 0),
(136, '', 135, 9, 0),
(135, '', 134, 4, 0),
(134, 'Acceso', 133, 3, 1),
(133, 'Menú', 1, 2, 3),
(132, '', 122, 9, 0),
(131, '', 122, 9, 0),
(130, '', 122, 9, 0),
(123, '', 122, 9, 0),
(124, '', 122, 9, 0),
(125, '', 122, 9, 0),
(126, '', 122, 9, 0),
(127, '', 122, 9, 0),
(174, 'TestPlan Sprint 2', 1, 5, 0),
(119, '', 111, 9, 0),
(118, '', 111, 9, 0),
(117, '', 111, 9, 0),
(116, '', 111, 9, 0),
(115, '', 111, 9, 0),
(114, '', 111, 9, 0),
(113, '', 111, 9, 0),
(112, '', 111, 9, 0),
(111, '', 110, 4, 0),
(110, 'Login Basico', 109, 3, 1),
(154, '', 149, 9, 0),
(155, '', 149, 9, 0),
(206, '', 205, 8, 0),
(207, 'Web', 193, 6, 0),
(208, 'Web', 207, 11, 0),
(209, 'Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada', 207, 7, 0),
(204, 'Middleware', 203, 11, 0),
(205, 'Yo como Arquitecto quiero disponer de integraciÃ³n con RSI para verificar los servicios', 203, 7, 0),
(201, 'Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada', 199, 7, 0),
(202, '', 201, 8, 0),
(203, 'Middleware', 193, 6, 0),
(194, 'Sprint 2', 193, 11, 0),
(195, 'Android', 193, 6, 0),
(196, 'Android', 195, 11, 0),
(197, 'Yo como usuario necesito un login para poder acceder a mi Ã¡rea privada', 195, 7, 0),
(198, '', 197, 8, 0),
(199, 'Maquetación', 193, 6, 0),
(200, 'MaquetaciÃÂ³n', 199, 11, 0),
(210, '', 209, 8, 0),
(211, 'Maquetación', 199, 11, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_node_types`
--

DROP TABLE IF EXISTS `tst_node_types`;
CREATE TABLE IF NOT EXISTS `tst_node_types` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL DEFAULT 'testproject',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_node_types`
--

INSERT INTO `tst_node_types` (`id`, `description`) VALUES
(1, 'testproject'),
(2, 'testsuite'),
(3, 'testcase'),
(4, 'testcase_version'),
(5, 'testplan'),
(6, 'requirement_spec'),
(7, 'requirement'),
(8, 'requirement_version'),
(9, 'testcase_step'),
(10, 'requirement_revision'),
(11, 'requirement_spec_revision'),
(12, 'build'),
(13, 'platform'),
(14, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_object_keywords`
--

DROP TABLE IF EXISTS `tst_object_keywords`;
CREATE TABLE IF NOT EXISTS `tst_object_keywords` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fk_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `fk_table` varchar(30) DEFAULT '',
  `keyword_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_platforms`
--

DROP TABLE IF EXISTS `tst_platforms`;
CREATE TABLE IF NOT EXISTS `tst_platforms` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `testproject_id` int(10) UNSIGNED NOT NULL,
  `notes` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_idx_platforms` (`testproject_id`,`name`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_platforms`
--

INSERT INTO `tst_platforms` (`id`, `name`, `testproject_id`, `notes`) VALUES
(1, 'WEB', 1, ''),
(2, 'MIDDLEWARE', 1, ''),
(3, 'APK', 1, ''),
(4, 'IPA', 1, ''),
(5, 'MAQUETACIÓN', 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_plugins`
--

DROP TABLE IF EXISTS `tst_plugins`;
CREATE TABLE IF NOT EXISTS `tst_plugins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `basename` varchar(100) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_plugins`
--

INSERT INTO `tst_plugins` (`id`, `basename`, `enabled`, `author_id`, `creation_ts`) VALUES
(1, 'TLTest', 1, NULL, '2017-11-07 21:11:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_plugins_configuration`
--

DROP TABLE IF EXISTS `tst_plugins_configuration`;
CREATE TABLE IF NOT EXISTS `tst_plugins_configuration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `testproject_id` int(11) NOT NULL,
  `config_key` varchar(255) NOT NULL,
  `config_type` int(11) NOT NULL,
  `config_value` varchar(255) NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_reqmgrsystems`
--

DROP TABLE IF EXISTS `tst_reqmgrsystems`;
CREATE TABLE IF NOT EXISTS `tst_reqmgrsystems` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` int(10) DEFAULT '0',
  `cfg` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_reqmgrsystems_uidx1` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_requirements`
--

DROP TABLE IF EXISTS `tst_requirements`;
CREATE TABLE IF NOT EXISTS `tst_requirements` (
  `id` int(10) UNSIGNED NOT NULL,
  `srs_id` int(10) UNSIGNED NOT NULL,
  `req_doc_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_requirements_req_doc_id` (`srs_id`,`req_doc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_requirements`
--

INSERT INTO `tst_requirements` (`id`, `srs_id`, `req_doc_id`) VALUES
(209, 207, 'EDP-48'),
(197, 195, 'EDP-46'),
(201, 199, 'EDP-115'),
(205, 203, 'EDP-112');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_coverage`
--

DROP TABLE IF EXISTS `tst_req_coverage`;
CREATE TABLE IF NOT EXISTS `tst_req_coverage` (
  `req_id` int(10) NOT NULL,
  `testcase_id` int(10) NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `review_requester_id` int(10) UNSIGNED DEFAULT NULL,
  `review_request_ts` timestamp NULL DEFAULT NULL,
  KEY `tst_req_testcase` (`req_id`,`testcase_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='relation test case ** requirements';

--
-- Volcado de datos para la tabla `tst_req_coverage`
--

INSERT INTO `tst_req_coverage` (`req_id`, `testcase_id`, `author_id`, `creation_ts`, `review_requester_id`, `review_request_ts`) VALUES
(209, 121, 1, '2017-11-14 13:11:39', NULL, NULL),
(209, 106, 1, '2017-11-14 13:09:33', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_monitor`
--

DROP TABLE IF EXISTS `tst_req_monitor`;
CREATE TABLE IF NOT EXISTS `tst_req_monitor` (
  `req_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `testproject_id` int(11) NOT NULL,
  PRIMARY KEY (`req_id`,`user_id`,`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_req_monitor`
--

INSERT INTO `tst_req_monitor` (`req_id`, `user_id`, `testproject_id`) VALUES
(28, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_relations`
--

DROP TABLE IF EXISTS `tst_req_relations`;
CREATE TABLE IF NOT EXISTS `tst_req_relations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `source_id` int(10) UNSIGNED NOT NULL,
  `destination_id` int(10) UNSIGNED NOT NULL,
  `relation_type` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_revisions`
--

DROP TABLE IF EXISTS `tst_req_revisions`;
CREATE TABLE IF NOT EXISTS `tst_req_revisions` (
  `parent_id` int(10) UNSIGNED NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `revision` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `req_doc_id` varchar(64) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `scope` text,
  `status` char(1) NOT NULL DEFAULT 'V',
  `type` char(1) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `is_open` tinyint(1) NOT NULL DEFAULT '1',
  `expected_coverage` int(10) NOT NULL DEFAULT '1',
  `log_message` text,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifier_id` int(10) UNSIGNED DEFAULT NULL,
  `modification_ts` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_req_revisions_uidx1` (`parent_id`,`revision`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_specs`
--

DROP TABLE IF EXISTS `tst_req_specs`;
CREATE TABLE IF NOT EXISTS `tst_req_specs` (
  `id` int(10) UNSIGNED NOT NULL,
  `testproject_id` int(10) UNSIGNED NOT NULL,
  `doc_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_req_spec_uk1` (`doc_id`,`testproject_id`),
  KEY `tst_testproject_id` (`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Dev. Documents (e.g. System Requirements Specification)';

--
-- Volcado de datos para la tabla `tst_req_specs`
--

INSERT INTO `tst_req_specs` (`id`, `testproject_id`, `doc_id`) VALUES
(193, 1, 'Sprint_2'),
(195, 1, 'android'),
(199, 1, 'maquetacion'),
(203, 1, 'middleware'),
(207, 1, 'web');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_specs_revisions`
--

DROP TABLE IF EXISTS `tst_req_specs_revisions`;
CREATE TABLE IF NOT EXISTS `tst_req_specs_revisions` (
  `parent_id` int(10) UNSIGNED NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `revision` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `doc_id` varchar(64) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `scope` text,
  `total_req` int(10) NOT NULL DEFAULT '0',
  `status` int(10) UNSIGNED DEFAULT '1',
  `type` char(1) DEFAULT NULL,
  `log_message` text,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifier_id` int(10) UNSIGNED DEFAULT NULL,
  `modification_ts` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_req_specs_revisions_uidx1` (`parent_id`,`revision`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_req_specs_revisions`
--

INSERT INTO `tst_req_specs_revisions` (`parent_id`, `id`, `revision`, `doc_id`, `name`, `scope`, `total_req`, `status`, `type`, `log_message`, `author_id`, `creation_ts`, `modifier_id`, `modification_ts`) VALUES
(193, 194, 1, 'Sprint_2', 'Sprint 2', '', 0, 1, '1', 'Especificación de Requisito Creada', 1, '2017-11-11 12:03:53', 1, '2017-11-11 13:03:53'),
(195, 196, 1, 'android', 'Android', '', 0, 1, '2', 'Especificación de Requisito Creada', 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53'),
(199, 200, 1, 'maquetacion', 'MaquetaciÃÂ³n', '', 0, 1, '2', 'Especificación de Requisito Creada', 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53'),
(203, 204, 1, 'middleware', 'Middleware', '', 0, 1, '2', 'Especificación de Requisito Creada', 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53'),
(207, 208, 1, 'web', 'Web', '', 0, 1, '2', 'Especificación de Requisito Creada', 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53'),
(199, 211, 2, 'maquetacion', 'Maquetación', '', 0, 1, '2', '', 1, '2017-11-11 12:04:18', NULL, '2017-11-11 14:04:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_req_versions`
--

DROP TABLE IF EXISTS `tst_req_versions`;
CREATE TABLE IF NOT EXISTS `tst_req_versions` (
  `id` int(10) UNSIGNED NOT NULL,
  `version` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `revision` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `scope` text,
  `status` char(1) NOT NULL DEFAULT 'V',
  `type` char(1) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `is_open` tinyint(1) NOT NULL DEFAULT '1',
  `expected_coverage` int(10) NOT NULL DEFAULT '1',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifier_id` int(10) UNSIGNED DEFAULT NULL,
  `modification_ts` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `log_message` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_req_versions`
--

INSERT INTO `tst_req_versions` (`id`, `version`, `revision`, `scope`, `status`, `type`, `active`, `is_open`, `expected_coverage`, `author_id`, `creation_ts`, `modifier_id`, `modification_ts`, `log_message`) VALUES
(206, 1, 1, 'Yo como Arquitecto quiero disponer de integraciÃ³n con RSI para verificar los servicios', 'R', '5', 1, 1, 1, 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53', 'Requisito Creado'),
(210, 1, 1, 'Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada', 'R', '2', 1, 1, 1, 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53', 'Requisito Creado'),
(198, 1, 1, 'Yo como usuario necesito un login para poder acceder a mi Ã¡rea privada', 'R', '2', 1, 1, 1, 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53', 'Requisito Creado'),
(202, 1, 1, 'Yo como usuario necesito un login para poder acceder a mi ÃÂ¡rea privada', 'R', '4', 1, 1, 1, 1, '2017-11-11 12:03:53', NULL, '2017-11-11 14:03:53', 'Requisito Creado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_rights`
--

DROP TABLE IF EXISTS `tst_rights`;
CREATE TABLE IF NOT EXISTS `tst_rights` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_rights_descr` (`description`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_rights`
--

INSERT INTO `tst_rights` (`id`, `description`) VALUES
(1, 'testplan_execute'),
(2, 'testplan_create_build'),
(3, 'testplan_metrics'),
(4, 'testplan_planning'),
(5, 'testplan_user_role_assignment'),
(6, 'mgt_view_tc'),
(7, 'mgt_modify_tc'),
(8, 'mgt_view_key'),
(9, 'mgt_modify_key'),
(10, 'mgt_view_req'),
(11, 'mgt_modify_req'),
(12, 'mgt_modify_product'),
(13, 'mgt_users'),
(14, 'role_management'),
(15, 'user_role_assignment'),
(16, 'mgt_testplan_create'),
(17, 'cfield_view'),
(18, 'cfield_management'),
(19, 'system_configuration'),
(20, 'mgt_view_events'),
(21, 'mgt_view_usergroups'),
(22, 'events_mgt'),
(23, 'testproject_user_role_assignment'),
(24, 'platform_management'),
(25, 'platform_view'),
(26, 'project_inventory_management'),
(27, 'project_inventory_view'),
(28, 'req_tcase_link_management'),
(29, 'keyword_assignment'),
(30, 'mgt_unfreeze_req'),
(31, 'issuetracker_management'),
(32, 'issuetracker_view'),
(33, 'reqmgrsystem_management'),
(34, 'reqmgrsystem_view'),
(35, 'exec_edit_notes'),
(36, 'exec_delete'),
(37, 'testplan_unlink_executed_testcases'),
(38, 'testproject_delete_executed_testcases'),
(39, 'testproject_edit_executed_testcases'),
(40, 'testplan_milestone_overview'),
(41, 'exec_testcases_assigned_to_me'),
(42, 'testproject_metrics_dashboard'),
(43, 'testplan_add_remove_platforms'),
(44, 'testplan_update_linked_testcase_versions'),
(45, 'testplan_set_urgent_testcases'),
(46, 'testplan_show_testcases_newest_versions'),
(47, 'testcase_freeze'),
(48, 'mgt_plugins'),
(49, 'exec_ro_access');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_risk_assignments`
--

DROP TABLE IF EXISTS `tst_risk_assignments`;
CREATE TABLE IF NOT EXISTS `tst_risk_assignments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testplan_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `node_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `risk` char(1) NOT NULL DEFAULT '2',
  `importance` char(1) NOT NULL DEFAULT 'M',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_risk_assignments_tplan_node_id` (`testplan_id`,`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_roles`
--

DROP TABLE IF EXISTS `tst_roles`;
CREATE TABLE IF NOT EXISTS `tst_roles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL DEFAULT '',
  `notes` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_role_rights_roles_descr` (`description`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_roles`
--

INSERT INTO `tst_roles` (`id`, `description`, `notes`) VALUES
(1, '<reserved system role 1>', NULL),
(2, '<reserved system role 2>', NULL),
(3, '<no rights>', NULL),
(4, 'test designer', NULL),
(5, 'guest', NULL),
(6, 'senior tester', NULL),
(7, 'tester', NULL),
(8, 'admin', NULL),
(9, 'leader', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_role_rights`
--

DROP TABLE IF EXISTS `tst_role_rights`;
CREATE TABLE IF NOT EXISTS `tst_role_rights` (
  `role_id` int(10) NOT NULL DEFAULT '0',
  `right_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`role_id`,`right_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_role_rights`
--

INSERT INTO `tst_role_rights` (`role_id`, `right_id`) VALUES
(4, 3),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(5, 3),
(5, 6),
(5, 8),
(6, 1),
(6, 2),
(6, 3),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 11),
(6, 25),
(6, 27),
(7, 1),
(7, 3),
(7, 6),
(7, 8),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(8, 11),
(8, 12),
(8, 13),
(8, 14),
(8, 15),
(8, 16),
(8, 17),
(8, 18),
(8, 19),
(8, 20),
(8, 21),
(8, 22),
(8, 23),
(8, 24),
(8, 25),
(8, 26),
(8, 27),
(8, 30),
(8, 31),
(8, 32),
(8, 33),
(8, 34),
(8, 35),
(8, 36),
(8, 37),
(8, 38),
(8, 39),
(8, 40),
(8, 41),
(8, 42),
(8, 43),
(8, 44),
(8, 45),
(8, 46),
(8, 47),
(8, 48),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(9, 15),
(9, 16),
(9, 24),
(9, 25),
(9, 26),
(9, 27),
(9, 47);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_tcsteps`
--

DROP TABLE IF EXISTS `tst_tcsteps`;
CREATE TABLE IF NOT EXISTS `tst_tcsteps` (
  `id` int(10) UNSIGNED NOT NULL,
  `step_number` int(11) NOT NULL DEFAULT '1',
  `actions` text,
  `expected_results` text,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `execution_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 -> manual, 2 -> automated',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_tcsteps`
--

INSERT INTO `tst_tcsteps` (`id`, `step_number`, `actions`, `expected_results`, `active`, `execution_type`) VALUES
(151, 2, 'Verificar que en la pantalla Contratar nueva cuenta en la parte superior aparece el literal Cuentas, aspa X para poder cerrar, y no aparece fecha de retroceso.', '', 1, 1),
(150, 1, 'Comprobar que al pulsar sobre Contratar nueva cuenta se muestra la pantalla de Contratar nueva cuenta.', '', 1, 1),
(146, 2, 'Comprobar que no existe flecha de retroceso y que solo se muestra el icono Menú en la parte superior derecha.', '', 1, 1),
(147, 3, 'Verificar que se muestran todas las opciones : La del día a día, ahorro,  Solicitud del Certificado de mi saldo global en SIBANK, Contratar nueva cuenta\"', '', 1, 1),
(145, 1, 'Comprobar que al pulsar sobre Cuentas se muestra la pantalla de Cuentas.', ' Se muestra pantalla Cuentas.', 1, 1),
(141, 6, 'Comprobar que se muestra en la parte superior derecha un aspa X para cerrar el menú.', 'Se muestra aspa para cerrar menú.', 1, 1),
(140, 5, 'Comprobar que se muestra en la parte superior la barra de búsqueda.', 'Se muestra barra de búsqueda.', 1, 1),
(139, 4, 'Comprobar que aparecen todas las opciones del menú.', 'Se visualizan todas las opciones del menú.', 1, 1),
(138, 3, 'Comprobar que al abrirse se muestra listado de opciones del menú.', 'Se despliega el menú.', 1, 1),
(137, 2, '(WEB) Comprobar que se despliega el menú.', 'No existen comportamientos anomalos', 1, 1),
(136, 1, '(IOS/ANDROID)Comprobar que al pulsar sobre el icono menú se abre lateralmente de derecha a izquierda.', 'El menú se abre lateralmente de derecha a izquierda.', 1, 1),
(132, 10, 'Probar que al hacer login correctamente se accede a la aplicación y se registra el nuevo login desde dispositivo móvil/Web en la tabla de Accesos de BBDD.', '', 1, 1),
(131, 9, '(iOS con \"Touch ID\") Probar que si ingresamos con un usuario que anteriormente había configurado el TouchID(y ha sido dejado de recordarse), se le vuelve a ofrecer configurar el acceso por TouchID.', 'En sprint 2 no implementado aún.', 1, 1),
(130, 8, '(iOS con \"Touch ID\") Probar que tras un primer login correcto, que se ofrece la opción de \"Configurar Touch ID\".', 'En sprint 2 no implementado aún.', 1, 1),
(129, 7, 'Probar tras un login satisfactorio sin marcar la casilla recordar usuario que no muestra el usuario.', 'En sprint 2 no implementado aún.', 1, 1),
(127, 5, 'Probar que la contraseña se muestra con asteriscos.', 'La contraseña aparece con asteriscos.', 1, 1),
(128, 6, 'Probar que al pulsar sobre mostrar contraseña se muestra.', 'Se visualizarse la contraseña al pulsar Mostrar.', 1, 1),
(125, 3, 'Comprobar que la contraseña ha de ser de 6 números y no tiene que admitir letras ni caracteres especiales.', '', 1, 1),
(126, 4, 'Probar que el usuario DNI/NIE y la contraseña introducidos sean los incorrectos, se informe del error y no ingrese en la aplicación.', 'Se muestra aviso de error de usuario o contraseña.', 1, 1),
(124, 2, 'Comprobar el DNI/NIE tiene que ser con formato válido que no debe superar el limite de caracteres y que no acepta caracteres especiales.', '', 1, 1),
(123, 1, 'Probar que el usuario DNI/NIE y la contraseña introducidos sean los correctos y se ingrese correctamente en la aplicación.', 'Acceder correctamente a la aplicación.', 1, 1),
(120, 9, 'Probar que el botón Cajeros abre la pantalla de Buscador de oficinas y cajeros.', 'En sprint 2 no implementado aún.', 1, 1),
(119, 8, 'Probar que el botón Hablamos te lleva a la pantalla..', 'En sprint 2 no implementado aún.', 1, 1),
(118, 7, 'Comprobar que se muestra quiero abrir una cuenta.', 'En sprint 2 no implementado aún.', 1, 1),
(117, 6, 'Comprobar que en contraseña aparece la frase ¿La has olvidado? y te lleva a la pantalla para recuperar contraseña.', 'En sprint 2 no implementado aún.', 1, 1),
(116, 5, 'Comprobar que al escribir una contraseña y pulsar en Mostrar, se visualiza la contraseña.', 'Se visualizarse la contraseña al pulsar Mostrar.', 1, 1),
(115, 4, 'Al introducir  contraseña probar que no se puede copiar la contraseña, solo pegar.', '', 1, 1),
(114, 3, 'Comprobar que los campos DNI/NIE y contraseña son editables.', 'Campos DNI/NIE y contraseña son editabbles.', 1, 1),
(113, 2, 'Verificar que existen los campos de DNI/NIE y contraseña', 'Existe campos DNI/NIE y contraseña.', 1, 1),
(108, 1, 'Probar a iniciar la aplicación, que se muestre el Splash y aparezca la pantalla de login.', '', 1, 1),
(112, 1, 'Comprobar que se muestra el Logotipo correctamente y que esta centrado.', 'Se muestra Logotipo correctamente y esta centrado.', 1, 1),
(152, 3, 'Probar si se pulsa en el aspa X, volvemos a la pantalla anterior.', '', 1, 1),
(153, 4, 'Comprobar que en la pantalla Contratar una nueva cuenta, se muestra el texto correctamente, se informa de las últimas cifras del número de telefono que tenemos  en nuestro perfil, y que se muestran los botones Llámanos y Enviar solicitud.', '', 1, 1),
(154, 5, 'Probar que al pulsar el botón Llámanos realiza la llamada al número de PBANK', 'Llamada realizada correctamente.', 1, 1),
(155, 6, 'Probar que al pulsar el botón Enviar Solicitud, envia la solicitud correctamente y se informa con una cortina informando que se ha realizado correctamente.', 'Solicitud enviada Correctamente', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_tcversions`
--

DROP TABLE IF EXISTS `tst_tcversions`;
CREATE TABLE IF NOT EXISTS `tst_tcversions` (
  `id` int(10) UNSIGNED NOT NULL,
  `tc_external_id` int(10) UNSIGNED DEFAULT NULL,
  `version` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `layout` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `status` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `summary` text,
  `preconditions` text,
  `importance` smallint(5) UNSIGNED NOT NULL DEFAULT '2',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater_id` int(10) UNSIGNED DEFAULT NULL,
  `modification_ts` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `is_open` tinyint(1) NOT NULL DEFAULT '1',
  `execution_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 -> manual, 2 -> automated',
  `estimated_exec_duration` decimal(6,2) DEFAULT NULL COMMENT 'NULL will be considered as NO DATA Provided by user',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_tcversions`
--

INSERT INTO `tst_tcversions` (`id`, `tc_external_id`, `version`, `layout`, `status`, `summary`, `preconditions`, `importance`, `author_id`, `creation_ts`, `updater_id`, `modification_ts`, `active`, `is_open`, `execution_type`, `estimated_exec_duration`) VALUES
(149, 16, 1, 1, 2, 'Flujo de contratación de cuenta nueva', '', 3, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL),
(135, 14, 1, 1, 2, 'Comprobar la integridad tanto funcional como de UX/Diseño del elemento Menu', '', 2, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL),
(144, 15, 1, 1, 2, 'Comprobar la integridad tanto funcional como de UX/Diseño del modulo Cuentas', '', 2, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL),
(122, 13, 1, 1, 2, 'Proceder al ingreso del usuario en el sistema sin recuperar sesiones anteriores', '', 3, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL),
(111, 12, 1, 1, 2, 'Proceder al ingreso del usuario en el sistema', '', 3, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL),
(107, 11, 1, 1, 2, 'Lanzar la ejecución de la aplicación', '', 3, 1, '2017-11-11 10:25:31', NULL, '2017-11-11 12:25:31', 1, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testcase_keywords`
--

DROP TABLE IF EXISTS `tst_testcase_keywords`;
CREATE TABLE IF NOT EXISTS `tst_testcase_keywords` (
  `testcase_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `keyword_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`testcase_id`,`keyword_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testcase_relations`
--

DROP TABLE IF EXISTS `tst_testcase_relations`;
CREATE TABLE IF NOT EXISTS `tst_testcase_relations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `source_id` int(10) UNSIGNED NOT NULL,
  `destination_id` int(10) UNSIGNED NOT NULL,
  `relation_type` smallint(5) UNSIGNED NOT NULL DEFAULT '1',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testplans`
--

DROP TABLE IF EXISTS `tst_testplans`;
CREATE TABLE IF NOT EXISTS `tst_testplans` (
  `id` int(10) UNSIGNED NOT NULL,
  `testproject_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `notes` text,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `is_open` tinyint(1) NOT NULL DEFAULT '1',
  `is_public` tinyint(1) NOT NULL DEFAULT '1',
  `api_key` varchar(64) NOT NULL DEFAULT '829a2ded3ed0829a2dedd8ab81dfa2c77e8235bc3ed0d8ab81dfa2c77e8235bc',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_testplans_api_key` (`api_key`),
  KEY `tst_testplans_testproject_id_active` (`testproject_id`,`active`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_testplans`
--

INSERT INTO `tst_testplans` (`id`, `testproject_id`, `notes`, `active`, `is_open`, `is_public`, `api_key`) VALUES
(174, 1, '', 0, 1, 0, 'ea091ca6d4f474a765f3777597b384f8e6be5b6def555465fea6d6458bd7eba5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testplan_platforms`
--

DROP TABLE IF EXISTS `tst_testplan_platforms`;
CREATE TABLE IF NOT EXISTS `tst_testplan_platforms` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testplan_id` int(10) UNSIGNED NOT NULL,
  `platform_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_idx_testplan_platforms` (`testplan_id`,`platform_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Connects a testplan with platforms';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testplan_tcversions`
--

DROP TABLE IF EXISTS `tst_testplan_tcversions`;
CREATE TABLE IF NOT EXISTS `tst_testplan_tcversions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `testplan_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tcversion_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `node_order` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `urgency` smallint(5) NOT NULL DEFAULT '2',
  `platform_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_testplan_tcversions_tplan_tcversion` (`testplan_id`,`tcversion_id`,`platform_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testprojects`
--

DROP TABLE IF EXISTS `tst_testprojects`;
CREATE TABLE IF NOT EXISTS `tst_testprojects` (
  `id` int(10) UNSIGNED NOT NULL,
  `notes` text,
  `color` varchar(12) NOT NULL DEFAULT '#9BD',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `option_reqs` tinyint(1) NOT NULL DEFAULT '0',
  `option_priority` tinyint(1) NOT NULL DEFAULT '0',
  `option_automation` tinyint(1) NOT NULL DEFAULT '0',
  `options` text,
  `prefix` varchar(16) NOT NULL,
  `tc_counter` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `is_public` tinyint(1) NOT NULL DEFAULT '1',
  `issue_tracker_enabled` tinyint(1) NOT NULL DEFAULT '0',
  `reqmgr_integration_enabled` tinyint(1) NOT NULL DEFAULT '0',
  `api_key` varchar(64) NOT NULL DEFAULT '0d8ab81dfa2c77e8235bc829a2ded3edfa2c78235bc829a27eded3ed0d8ab81d',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_testprojects_prefix` (`prefix`),
  UNIQUE KEY `tst_testprojects_api_key` (`api_key`),
  KEY `tst_testprojects_id_active` (`id`,`active`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_testprojects`
--

INSERT INTO `tst_testprojects` (`id`, `notes`, `color`, `active`, `option_reqs`, `option_priority`, `option_automation`, `options`, `prefix`, `tc_counter`, `is_public`, `issue_tracker_enabled`, `reqmgr_integration_enabled`, `api_key`) VALUES
(1, '<p>Prueba de Concepto de lo que podria ser nuestro sistema de gestion del ciclo de testing sobre el proyecto PiBank</p>', '', 1, 0, 0, 0, 'O:8:\"stdClass\":4:{s:19:\"requirementsEnabled\";i:1;s:19:\"testPriorityEnabled\";i:1;s:17:\"automationEnabled\";i:1;s:16:\"inventoryEnabled\";i:0;}', 'PB_', 16, 1, 0, 0, 'f1ab4591a72bfca2da721ca61a6e9569b635f9e3c038855c68c2704f08caeee1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testproject_issuetracker`
--

DROP TABLE IF EXISTS `tst_testproject_issuetracker`;
CREATE TABLE IF NOT EXISTS `tst_testproject_issuetracker` (
  `testproject_id` int(10) UNSIGNED NOT NULL,
  `issuetracker_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testproject_reqmgrsystem`
--

DROP TABLE IF EXISTS `tst_testproject_reqmgrsystem`;
CREATE TABLE IF NOT EXISTS `tst_testproject_reqmgrsystem` (
  `testproject_id` int(10) UNSIGNED NOT NULL,
  `reqmgrsystem_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_testsuites`
--

DROP TABLE IF EXISTS `tst_testsuites`;
CREATE TABLE IF NOT EXISTS `tst_testsuites` (
  `id` int(10) UNSIGNED NOT NULL,
  `details` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_testsuites`
--

INSERT INTO `tst_testsuites` (`id`, `details`) VALUES
(133, 'TestSuite para las opciones de menu'),
(142, 'TestSuite para el producto Cuentas'),
(109, 'TestSuite para la autenticación de usuarios'),
(105, 'TestSuite para Inicio de aplicación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_text_templates`
--

DROP TABLE IF EXISTS `tst_text_templates`;
CREATE TABLE IF NOT EXISTS `tst_text_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` smallint(5) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `template_data` text,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_public` tinyint(1) NOT NULL DEFAULT '0',
  UNIQUE KEY `idx_text_templates` (`type`,`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Global Project Templates';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_transactions`
--

DROP TABLE IF EXISTS `tst_transactions`;
CREATE TABLE IF NOT EXISTS `tst_transactions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `entry_point` varchar(45) NOT NULL DEFAULT '',
  `start_time` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `end_time` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `session_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_transactions`
--

INSERT INTO `tst_transactions` (`id`, `entry_point`, `start_time`, `end_time`, `user_id`, `session_id`) VALUES
(1, '/testlink/login.php', 1510083134, 1510083134, 1, 'islfa5pi2l5urlpc95ta978dn1'),
(2, '/testlink/login.php', 1510088553, 1510088553, 1, '95am62kivannmjdmgafc861u52'),
(3, '/testlink/lib/usermanagement/userInfo.php', 1510088613, 1510088613, 1, '95am62kivannmjdmgafc861u52'),
(4, '/testlink/lib/general/navBar.php', 1510088614, 1510088614, 1, '95am62kivannmjdmgafc861u52'),
(5, '/testlink/lib/project/projectEdit.php', 1510088861, 1510088862, 1, '95am62kivannmjdmgafc861u52'),
(6, '/testlink/lib/usermanagement/usersView.php', 1510089041, 1510089042, 1, '95am62kivannmjdmgafc861u52'),
(7, '/testlink/lib/plugins/pluginView.php', 1510089063, 1510089063, 1, '95am62kivannmjdmgafc861u52'),
(8, '/testlink/lib/general/mainPage.php', 1510089093, 1510089095, 1, '95am62kivannmjdmgafc861u52'),
(9, '/lib/requirements/reqSpecListTree.php', 1510089107, 1510089108, 1, '95am62kivannmjdmgafc861u52'),
(10, '/testlink/logout.php', 1510089128, 1510089128, 1, '95am62kivannmjdmgafc861u52'),
(11, '/testlink/login.php', 1510089130, 1510089130, 1, '95am62kivannmjdmgafc861u52'),
(12, '/testlink/lib/general/navBar.php', 1510089131, 1510089131, 1, '95am62kivannmjdmgafc861u52'),
(13, '/testlink/lib/general/mainPage.php', 1510089131, 1510089131, 1, '95am62kivannmjdmgafc861u52'),
(14, '/lib/issuetrackers/issueTrackerEdit.php', 1510089147, 1510089148, 1, '95am62kivannmjdmgafc861u52'),
(15, '/testlink/login.php', 1510124635, 1510124635, 1, '95am62kivannmjdmgafc861u52'),
(16, '/testlink/logout.php', 1510124649, 1510124649, 1, '95am62kivannmjdmgafc861u52'),
(17, '/testlink/login.php', 1510124653, 1510124653, 1, '95am62kivannmjdmgafc861u52'),
(18, '/testlink/lib/general/mainPage.php', 1510124653, 1510124654, 1, '95am62kivannmjdmgafc861u52'),
(19, '/testlink/lib/general/navBar.php', 1510124654, 1510124654, 1, '95am62kivannmjdmgafc861u52'),
(20, '/lib/issuetrackers/issueTrackerEdit.php', 1510124671, 1510124671, 1, '95am62kivannmjdmgafc861u52'),
(21, '/testlink/login.php', 1510300890, 1510300890, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(22, '/testlink/lib/general/navBar.php', 1510300891, 1510300891, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(23, '/testlink/lib/general/mainPage.php', 1510300891, 1510300891, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(24, '/testlink/lib/project/projectView.php', 1510300969, 1510300969, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(25, '/testlink/lib/project/projectEdit.php', 1510302249, 1510302249, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(26, '/testlink/lib/testcases/listTestCases.php', 1510302260, 1510302260, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(27, '/testlink/lib/testcases/archiveData.php', 1510302261, 1510302261, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(28, '/testlink/lib/platforms/platformsEdit.php', 1510302331, 1510302331, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(29, '/testlink/lib/requirements/reqSpecView.php', 1510302538, 1510302538, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(30, '/testlink/lib/requirements/reqSpecEdit.php', 1510302567, 1510302567, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(31, '/testlink/lib/requirements/reqSpecView.php', 1510302571, 1510302571, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(32, '/lib/requirements/reqMonitorOverview.php', 1510302658, 1510302658, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(33, '/testlink/lib/usermanagement/usersAssign.php', 1510302666, 1510302666, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(34, '/testlink/lib/requirements/reqTcAssign.php', 1510302688, 1510302688, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(35, '/testlink/lib/requirements/reqExport.php', 1510302931, 1510302931, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(36, '/testlink/logout.php', 1510302954, 1510302954, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(37, '/testlink/login.php', 1510302955, 1510302955, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(38, '/testlink/lib/general/navBar.php', 1510302956, 1510302956, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(39, '/testlink/lib/general/mainPage.php', 1510302956, 1510302956, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(40, '/testlink/lib/testcases/listTestCases.php', 1510302979, 1510302979, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(41, '/testlink/lib/testcases/archiveData.php', 1510302980, 1510302980, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(42, '/testlink/lib/testcases/tcImport.php', 1510302993, 1510302994, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(43, '/testlink/lib/testcases/archiveData.php', 1510303003, 1510303004, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(44, '/testlink/lib/requirements/reqSpecView.php', 1510310213, 1510310213, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(45, '/testlink/lib/requirements/reqImport.php', 1510310227, 1510310227, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(46, '/testlink/lib/requirements/reqView.php', 1510310258, 1510310258, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(47, '/testlink/login.php', 1510310704, 1510310704, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(48, '/testlink/lib/requirements/reqEdit.php', 1510310808, 1510310808, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(49, '/testlink/lib/requirements/reqEdit.php', 1510310851, 1510310851, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(50, '/testlink/lib/requirements/reqEdit.php', 1510310873, 1510310873, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(51, '/lib/requirements/reqMonitorOverview.php', 1510311432, 1510311432, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(52, '/testlink/lib/results/printDocOptions.php', 1510311450, 1510311450, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(53, '/testlink/lib/plan/planEdit.php', 1510311612, 1510311612, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(54, '/testlink/lib/plan/buildEdit.php', 1510311647, 1510311647, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(55, '/testlink/lib/plan/buildEdit.php', 1510311665, 1510311665, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(56, '/testlink/lib/execute/execDashboard.php', 1510311683, 1510311683, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(57, '/testlink/login.php', 1510312328, 1510312328, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(58, '/testlink/lib/plan/planAddTC.php', 1510312378, 1510312379, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(59, '/testlink/lib/plan/planAddTC.php', 1510312397, 1510312397, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(60, '/testlink//lib/plan/tc_exec_assignment.php', 1510312418, 1510312419, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(61, '/testlink/lib/plan/tc_exec_assignment.php', 1510312421, 1510312421, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(62, '/testlink/lib/execute/execSetResults.php', 1510312468, 1510312471, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(63, '/testlink/login.php', 1510397717, 1510397718, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(64, '/testlink/lib/requirements/reqSpecEdit.php', 1510398120, 1510398120, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(65, '/testlink/lib/testcases/tcExport.php', 1510399632, 1510399632, 1, 'dsa9396s3n5fo8tn4cd08blaj2'),
(66, '/testlink/login.php', 1510403032, 1510403032, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(67, '/testlink/lib/general/navBar.php', 1510403033, 1510403033, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(68, '/testlink/lib/general/mainPage.php', 1510403033, 1510403033, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(69, '/testlink/lib/plan/planEdit.php', 1510403046, 1510403046, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(70, '/testlink/lib/platforms/platformsEdit.php', 1510403076, 1510403076, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(71, '/testlink/lib/platforms/platformsEdit.php', 1510403088, 1510403088, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(72, '/testlink/lib/platforms/platformsEdit.php', 1510403095, 1510403095, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(73, '/testlink/lib/platforms/platformsEdit.php', 1510403112, 1510403112, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(74, '/testlink/lib/project/projectView.php', 1510403170, 1510403170, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(75, '/testlink/lib/usermanagement/usersAssign.php', 1510403176, 1510403176, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(76, '/testlink/lib/usermanagement/usersView.php', 1510403185, 1510403185, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(77, '/testlink/lib/usermanagement/usersEdit.php', 1510403189, 1510403189, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(78, '/testlink/lib/usermanagement/usersView.php', 1510403193, 1510403193, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(79, '/testlink/lib/usermanagement/usersEdit.php', 1510403268, 1510403268, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(80, '/testlink/lib/usermanagement/usersView.php', 1510403268, 1510403268, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(81, '/testlink/lib/usermanagement/rolesView.php', 1510403280, 1510403280, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(82, '/testlink/lib/usermanagement/usersView.php', 1510403284, 1510403284, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(83, '/lib/requirements/reqSpecListTree.php', 1510403295, 1510403295, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(84, '/testlink/lib/requirements/reqImport.php', 1510403984, 1510403984, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(85, '/testlink/lib/requirements/reqSpecView.php', 1510404005, 1510404005, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(86, '/testlink/lib/requirements/reqView.php', 1510404012, 1510404012, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(87, '/testlink/lib/requirements/reqExport.php', 1510404040, 1510404040, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(88, '/testlink/lib/requirements/reqSpecEdit.php', 1510404098, 1510404098, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(89, '/testlink/lib/plan/planEdit.php', 1510404132, 1510404132, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(90, '/testlink/lib/requirements/reqTcAssign.php', 1510404173, 1510404174, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(91, '/testlink/lib/requirements/reqTcAssign.php', 1510404177, 1510404177, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(92, '/testlink/lib/testcases/archiveData.php', 1510404205, 1510404205, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(93, '/testlink/lib/testcases/tcEdit.php', 1510404211, 1510404211, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(94, '/testlink/lib/requirements/reqTcAssign.php', 1510404229, 1510404229, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(95, '/testlink/lib/requirements/reqTcAssign.php', 1510404272, 1510404272, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(96, '/testlink/lib/requirements/reqTcAssign.php', 1510404277, 1510404277, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(97, '/testlink/lib/requirements/reqTcAssign.php', 1510404297, 1510404297, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(98, '/testlink/lib/requirements/reqTcAssign.php', 1510404304, 1510404304, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(99, '/testlink/lib/requirements/reqTcAssign.php', 1510404308, 1510404308, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(100, '/testlink/lib/requirements/reqTcAssign.php', 1510404311, 1510404311, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(101, '/testlink/lib/requirements/reqTcAssign.php', 1510404316, 1510404316, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(102, '/testlink/lib/requirements/reqTcAssign.php', 1510404319, 1510404319, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(103, '/testlink/lib/requirements/reqSpecEdit.php', 1510404355, 1510404355, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(104, '/testlink/login.php', 1510405418, 1510405418, 1, '8i7gtg9mrgmhtad01eufl72uu4'),
(105, '/testlink/login.php', 1510667745, 1510667745, 1, '31lifnb5trnna1d2p5u17kvm77'),
(106, '/testlink/lib/general/navBar.php', 1510667746, 1510667746, 1, '31lifnb5trnna1d2p5u17kvm77'),
(107, '/testlink/lib/general/mainPage.php', 1510667746, 1510667747, 1, '31lifnb5trnna1d2p5u17kvm77'),
(108, '/testlink/lib/plan/planEdit.php', 1510667772, 1510667772, 1, '31lifnb5trnna1d2p5u17kvm77'),
(109, '/testlink/lib/general/frmWorkArea.php', 1510667780, 1510667781, 1, '31lifnb5trnna1d2p5u17kvm77'),
(110, '/testlink/lib/testcases/listTestCases.php', 1510668477, 1510668477, 1, '31lifnb5trnna1d2p5u17kvm77'),
(111, '/testlink/lib/testcases/archiveData.php', 1510668505, 1510668505, 1, '31lifnb5trnna1d2p5u17kvm77'),
(112, '/testlink/lib/requirements/reqTcAssign.php', 1510668510, 1510668510, 1, '31lifnb5trnna1d2p5u17kvm77'),
(113, '/testlink/lib/requirements/reqTcAssign.php', 1510668522, 1510668522, 1, '31lifnb5trnna1d2p5u17kvm77'),
(114, '/testlink/lib/requirements/reqTcAssign.php', 1510668526, 1510668526, 1, '31lifnb5trnna1d2p5u17kvm77'),
(115, '/testlink/lib/requirements/reqView.php', 1510668561, 1510668561, 1, '31lifnb5trnna1d2p5u17kvm77'),
(116, '/testlink/lib/requirements/reqTcAssign.php', 1510668568, 1510668568, 1, '31lifnb5trnna1d2p5u17kvm77'),
(117, '/testlink/lib/requirements/reqTcAssign.php', 1510668573, 1510668573, 1, '31lifnb5trnna1d2p5u17kvm77'),
(118, '/testlink/lib/requirements/reqTcAssign.php', 1510668695, 1510668695, 1, '31lifnb5trnna1d2p5u17kvm77'),
(119, '/testlink/lib/requirements/reqTcAssign.php', 1510668699, 1510668699, 1, '31lifnb5trnna1d2p5u17kvm77'),
(120, '/testlink/lib/testcases/tcEdit.php', 1510668791, 1510668791, 1, '31lifnb5trnna1d2p5u17kvm77'),
(121, '/testlink/login.php', 1510827929, 1510827929, 1, 'l024blkrh1hg6je3efjn7dnvn6'),
(122, '/testlink/lib/general/mainPage.php', 1510827930, 1510827930, 1, 'l024blkrh1hg6je3efjn7dnvn6'),
(123, '/testlink/lib/general/navBar.php', 1510827931, 1510827931, 1, 'l024blkrh1hg6je3efjn7dnvn6'),
(124, '/testlink/lib/testcases/listTestCases.php', 1510827935, 1510827935, 1, 'l024blkrh1hg6je3efjn7dnvn6'),
(125, '/testlink/lib/testcases/archiveData.php', 1510827935, 1510827935, 1, 'l024blkrh1hg6je3efjn7dnvn6'),
(126, '/testlink/lib/testcases/archiveData.php', 1510827941, 1510827941, 1, 'l024blkrh1hg6je3efjn7dnvn6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_users`
--

DROP TABLE IF EXISTS `tst_users`;
CREATE TABLE IF NOT EXISTS `tst_users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `role_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT '',
  `first` varchar(50) NOT NULL DEFAULT '',
  `last` varchar(50) NOT NULL DEFAULT '',
  `locale` varchar(10) NOT NULL DEFAULT 'en_GB',
  `default_testproject_id` int(10) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `script_key` varchar(32) DEFAULT NULL,
  `cookie_string` varchar(64) NOT NULL DEFAULT '',
  `auth_method` varchar(10) DEFAULT '',
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expiration_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_users_login` (`login`),
  UNIQUE KEY `tst_users_cookie_string` (`cookie_string`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='User information';

--
-- Volcado de datos para la tabla `tst_users`
--

INSERT INTO `tst_users` (`id`, `login`, `password`, `role_id`, `email`, `first`, `last`, `locale`, `default_testproject_id`, `active`, `script_key`, `cookie_string`, `auth_method`, `creation_ts`, `expiration_date`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 8, 'samuel.beriguete@vass.es', 'Kilo', 'Ren', 'es_ES', NULL, 1, NULL, '052d29590c24e9dbde9bc5c1e3da07f421232f297a57a5a743894a0e4a801fc3', '', '2017-11-07 19:31:31', NULL),
(2, 'sara', '5bd537fc3789b5482e4936968f0fde95', 9, 'sara.sanz@vass.es', 'Sara Esther', 'Sanz Gimeno', 'es_ES', NULL, 1, NULL, '5a2fbab26336b52a865bac4eaa9f2ad19ceb8657f42d8f90fd0cca5e5af50eb4', '', '2017-11-11 12:27:48', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_user_assignments`
--

DROP TABLE IF EXISTS `tst_user_assignments`;
CREATE TABLE IF NOT EXISTS `tst_user_assignments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `feature_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_id` int(10) UNSIGNED DEFAULT '0',
  `build_id` int(10) UNSIGNED DEFAULT '0',
  `deadline_ts` datetime DEFAULT NULL,
  `assigner_id` int(10) UNSIGNED DEFAULT '0',
  `creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(10) UNSIGNED DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `tst_user_assignments_feature_id` (`feature_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_user_group`
--

DROP TABLE IF EXISTS `tst_user_group`;
CREATE TABLE IF NOT EXISTS `tst_user_group` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tst_idx_user_group` (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_user_group_assign`
--

DROP TABLE IF EXISTS `tst_user_group_assign`;
CREATE TABLE IF NOT EXISTS `tst_user_group_assign` (
  `usergroup_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  UNIQUE KEY `tst_idx_user_group_assign` (`usergroup_id`,`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_user_testplan_roles`
--

DROP TABLE IF EXISTS `tst_user_testplan_roles`;
CREATE TABLE IF NOT EXISTS `tst_user_testplan_roles` (
  `user_id` int(10) NOT NULL DEFAULT '0',
  `testplan_id` int(10) NOT NULL DEFAULT '0',
  `role_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`,`testplan_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tst_user_testplan_roles`
--

INSERT INTO `tst_user_testplan_roles` (`user_id`, `testplan_id`, `role_id`) VALUES
(1, 174, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tst_user_testproject_roles`
--

DROP TABLE IF EXISTS `tst_user_testproject_roles`;
CREATE TABLE IF NOT EXISTS `tst_user_testproject_roles` (
  `user_id` int(10) NOT NULL DEFAULT '0',
  `testproject_id` int(10) NOT NULL DEFAULT '0',
  `role_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`,`testproject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura para la vista `tst_latest_req_version`
--
DROP TABLE IF EXISTS `tst_latest_req_version`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `tst_latest_req_version`  AS  select `rq`.`id` AS `req_id`,max(`rqv`.`version`) AS `version` from ((`tst_nodes_hierarchy` `nhrqv` join `tst_requirements` `rq` on((`rq`.`id` = `nhrqv`.`parent_id`))) join `tst_req_versions` `rqv` on((`rqv`.`id` = `nhrqv`.`id`))) group by `rq`.`id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `tst_latest_rspec_revision`
--
DROP TABLE IF EXISTS `tst_latest_rspec_revision`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `tst_latest_rspec_revision`  AS  select `rsr`.`parent_id` AS `req_spec_id`,`rs`.`testproject_id` AS `testproject_id`,max(`rsr`.`revision`) AS `revision` from (`tst_req_specs_revisions` `rsr` join `tst_req_specs` `rs` on((`rs`.`id` = `rsr`.`parent_id`))) group by `rsr`.`parent_id`,`rs`.`testproject_id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `tst_latest_tcase_version_number`
--
DROP TABLE IF EXISTS `tst_latest_tcase_version_number`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `tst_latest_tcase_version_number`  AS  select `nh_tc`.`id` AS `testcase_id`,max(`tcv`.`version`) AS `version` from ((`tst_nodes_hierarchy` `nh_tc` join `tst_nodes_hierarchy` `nh_tcv` on((`nh_tcv`.`parent_id` = `nh_tc`.`id`))) join `tst_tcversions` `tcv` on((`nh_tcv`.`id` = `tcv`.`id`))) group by `testcase_id` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
