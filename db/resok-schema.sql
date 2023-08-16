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
    `countries_id` TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    INDEX `fk_state_countries_idx` (`countries_id`),
    CONSTRAINT `fk_state_countries`
      FOREIGN KEY (`countries_id`) REFERENCES `countries` (`id`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `stores` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `address` VARCHAR(200) NOT NULL,
    `gmaps` VARCHAR(17) NULL,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    `state_id` MEDIUMINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    UNIQUE INDEX `address_UNIQUE` (`address`),
    UNIQUE INDEX `gmaps_UNIQUE` (`gmaps`),
    INDEX `fk_stores_state_idx` (`state_id`),
    CONSTRAINT `fk_state_state`
      FOREIGN KEY (`state_id`) REFERENCES `state` (`id`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `brands` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `models` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    `brands_id` MEDIUMINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    INDEX `fk_models_brands_idx` (`brands_id`),
    CONSTRAINT `fk_models_brands`
      FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `cars` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `year` YEAR NOT NULL,
    `transmission` ENUM('Automático', 'Manual'),
    `type` ENUM('Convertible', 'Coupe', 'Hatchback', 'Minivan', 'Pickup', 'Sedan', 'Suv', 'Targa', 'Van', 'Wagon'),
    `fuel` ENUM('Diesel', 'Eléctrico', 'Estándar', 'Gasolina', 'Híbrido'),
    `passengers` TINYINT NOT NULL,
    `features` JSON NULL,
    `stock` MEDIUMINT UNSIGNED NOT NULL DEFAULT 0,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    `models_id` MEDIUMINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    INDEX `fk_cars_models_idx` (`models_id`),
    CONSTRAINT `fk_cars_models`
      FOREIGN KEY (`models_id`) REFERENCES `models` (`id`),
    CONSTRAINT `chk_cars_passengers` CHECK (`passengers` > 1 AND `passengers` < 9)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `colors` (
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `products` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(300) NOT NULL,
    `price` FLOAT NOT NULL,
    `images` JSON NULL,
    `mileage` MEDIUMINT UNSIGNED NOT NULL,
    `status` ENUM('Disponible', 'Apartado', 'Vendido'),
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    `cars_id` INT UNSIGNED NOT NULL,
    `stores_id` MEDIUMINT UNSIGNED NOT NULL,
    `product_status_id` TINYINT UNSIGNED NOT NULL,
    `colors_id` TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    INDEX `fk_products_cars_idx` (`cars_id`),
    INDEX `fk_products_stores_idx` (`stores_id`),
    INDEX `fk_products_product_status_idx` (`product_status_id`),
    INDEX `fk_products_colors_idx` (`colors_id`),
    CONSTRAINT `fk_products_cars`
      FOREIGN KEY (`cars_id`) REFERENCES `cars` (`id`),
    CONSTRAINT `fk_products_stores`
      FOREIGN KEY (`stores_id`) REFERENCES `stores` (`id`),
    CONSTRAINT `fk_products_product_status`
      FOREIGN KEY (`product_status_id`) REFERENCES `product_status` (`id`),
    CONSTRAINT `fk_products_colors`
      FOREIGN KEY (`colors_id`) REFERENCES `colors` (`id`),
    CONSTRAINT `chk_products_price` CHECK (`price` > 0),
    CONSTRAINT `chk_products_mileage` CHECK (`mileage` > 1705 AND `mileage` < 177938)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `tags` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    `status` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NULL ON UPDATE NOW(),
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`)
  ) ENGINE = InnoDB;

  CREATE TABLE IF NOT EXISTS `products_tags` (
    `products_id` INT UNSIGNED NOT NULL,
    `tags_id` INT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
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
