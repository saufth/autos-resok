-- Autos Resok MySQL database
-- Model: Autos Resok
-- Version: 1.0
-- Wed Jul 5 02:07:40 2023
-- Author: https://github.com/saufth

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `resok` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE `resok`;

CREATE TABLE IF NOT EXISTS `countries` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `state` (
  `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  `countries_id` MEDIUMINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`),
  INDEX `fk_state_countries_idx` (`countries_id`),
  CONSTRAINT `fk_state_countries`
    FOREIGN KEY (`countries_id`) REFERENCES `countries` (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `cities` (
  `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  `state_id` MEDIUMINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  INDEX `fk_cities_state_idx` (`state_id`),
  CONSTRAINT `fk_cities_state`
    FOREIGN KEY (`state_id`) REFERENCES `state` (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `stores` (
  `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `gmaps` VARCHAR(17) NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  `cities_id` MEDIUMINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`),
  UNIQUE INDEX `description_UNIQUE` (`description`),
  UNIQUE INDEX `gmaps_slug_UNIQUE` (`gmaps_slug`),
  INDEX `fk_stores_cities_idx` (`cities_id`),
  CONSTRAINT `fk_cities_cities`
    FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `brand` (
  `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `subtypes` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `traction` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `models` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `year` YEAR NOT NULL,
  `electric_windows` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `speeds` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  `brand_id` MEDIUMINT UNSIGNED NOT NULL,
  `subtypes_id` TINYINT UNSIGNED NOT NULL,
  `traction_id` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  INDEX `fk_models_brand_idx` (`brand_id`),
  INDEX `fk_models_subtypes_idx` (`subtypes_id`),
  INDEX `fk_models_traction_idx` (`traction_id`),
  CONSTRAINT `fk_models_brand`
    FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `fk_models_subtypes`
    FOREIGN KEY (`subtypes_id`) REFERENCES `subtypes` (`id`)
  CONSTRAINT `fk_models_traction`
    FOREIGN KEY (`traction_id`) REFERENCES `traction` (`id`),
  CONSTRAINT `chk_models_speeds` CHECK (`speeds` > 0 AND `speeds` < 11)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `product_status` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `product_colors` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(640) NOT NULL,
  `price` FLOAT NOT NULL,
  `mileage` INT UNSIGNED NOT NULL,
  `images` JSON NULL,
  `leather` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `gps` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `touch_screen` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `apple` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `android` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `android` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  `stores_id` MEDIUMINT UNSIGNED NOT NULL,
  `models_id` INT UNSIGNED NOT NULL,
  `product_status_id` TINYINT UNSIGNED NOT NULL,
  `product_colors_id` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `description_UNIQUE` (`description`),
  UNIQUE INDEX `code_UNIQUE` (`code`),
  INDEX `fk_products_stores_idx` (`stores_id`),
  INDEX `fk_products_models_idx` (`models_id`),
  INDEX `fk_products_product_colors_idx` (`product_colors_id`),
  INDEX `fk_products_product_status_idx` (`product_status_id`),
  CONSTRAINT `fk_products_stores`
    FOREIGN KEY (`stores_id`) REFERENCES `stores` (`id`),
  CONSTRAINT `fk_products_models`
    FOREIGN KEY (`models_id`) REFERENCES `models` (`id`),
  CONSTRAINT `fk_products_product_colors`
    FOREIGN KEY (`product_colors_id`) REFERENCES `product_colors` (`id`),
  CONSTRAINT `fk_products_product_status`
    FOREIGN KEY (`product_status_id`) REFERENCES `product_status` (`id`),
  CONSTRAINT `chk_products_price` CHECK (`price` > 0)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tags` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `products_tags` (
  `products_id` INT UNSIGNED NOT NULL,
  `tags_id` INT UNSIGNED NOT NULL,
  `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`products_id`, `tags_id`),
  INDEX `fk_products_tags-products_idx` (`products_id`),
  INDEX `fk_products_tags-tags_idx` (`tags_id`),
  CONSTRAINT `fk_products_tags-products`
    FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_products_tags-tags`
    FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`)
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
