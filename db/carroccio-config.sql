
-- -----------------------------------------------------
-- `stores`
-- -----------------------------------------------------
INSERT INTO `stores`
    (
        `name`,
        `description`,
        `gmaps`
    )
VALUES
    (
        'Carroccio',
        'Sucursal principal ubicada en calle Pasteur #1234-B. Entre calles Corregidora de Artega y Venustiano Carranza. col. centro. C.P. 760760. Quéretaro, MX (Dirección random)',
        'nqTKiv7hrqNiWGyL9'
    );

SELECT * FROM `stores`;

-- -----------------------------------------------------
-- `categories`
-- -----------------------------------------------------
INSERT INTO `categories`
    (
        `name`,
        `description`,
        `image`,
        `slug`
    )
VALUES
    (
        'Seminuevos',
        'Hecha un vistazo a nuestras increíbles motos eléctricas.',
        '/images/category-motos.webp',
        'motos-electricas'
    ),
    (
        'Camionetas',
        'Gran variedad de ropa, calzado y equipo de seguridad.',
        '/images/category-clothing.webp',
        'ropa-y-equipo'
    );

SELECT * FROM `categories`;

-- getNavigation
SELECT `c`.`name` AS `title`, (
	SELECT JSON_ARRAYAGG(JSON_OBJECT(
        'title', `sc`.`name`,
        'description', `sc`.`description`,
        'href', CONCAT('/', `c`.`slug`, '/', `sc`.`slug`)
	)) FROM `subcategories` AS `sc` WHERE `sc`.`categories_id` = `c`.`id`) AS `items`
FROM `categories` AS `c` WHERE `c`.`status` > 0;

-- -----------------------------------------------------
-- `subcategories`
-- -----------------------------------------------------
INSERT INTO `subcategories`
    (
        `name`,
        `description`,
        `image`,
        `slug`,
        `categories_id`
    )
VALUES
    (
        'Scooters',
        'Encuentra los mejores scooters eléctricos con baterías recargables.',
        '/images/category-motos.webp',
        'scooters',
        1
    ),
    (
        'Motocicletas',
        'Nuestro legado cobra vida en motocicletas eléctricas que redefinen el concepto de conducción.',
        '/images/category-motos.webp',
        'motocicletas',
        1
    ),
    (
        'Quads',
        'Conoce la amplia gama de cuatrimotos que tenemos para ti, con diferentes características y cilindrajes para las diferentes necesidades.',
        '/images/category-motos.webp',
        'cuatrimotos',
        1
    ),
    (
        'Cascos',
        'Conoce la amplia gama de cascos que tenemos para ti, con diferentes características para las diferentes necesidades.',
        '/images/category-accesories.webp',
        'cascos',
        2
    );

SELECT * FROM `subcategories`;

-- -----------------------------------------------------
-- `products`
-- -----------------------------------------------------
INSERT INTO `products`
    (
        `name`,
        `description`,
        `price`,
        `inventory`,
        `features`,
        `images`,
        `subcategories_id`
    )
VALUES
    (
        'Phantom 150 S',
        'Esta legendaria motocicleta poseedora de un look dinámico inspirado en diseños futuristas de vehículos con turbina, es una de las favoritas de la familia de Vento gracias a la eficiencia, estilo y confort que es capaz de entregar.',
        50125.58,
        100,
        '["Color: Rojo","Marca: Vento","Freno Trasero: Disco hidráulico","Tipo de Motor: 4 Tiempos, enfriado por aceite","Suspensión Frontal: Horquilla hidráulica invertida","Sistema de Arranque: Eléctrico y patada","Rendimiento de Combustible Aproximado: 30 km/l","Transmisión: Manual","Torque Máximo: 16/6500 N/RPM","Potencia Máxima: 18 HP","Velocidades Motos: 6","Velocidad Máxima: 130km/h","Suspensión Trasera: Monoshock","Freno Frontal: Disco hidráulico"]',
        '["phantom-150-s-2023-1.webp"]',
        1

    ),
    (
        'Hotrod 150 2023',
        'De personalidad retro y deportiva, este scooter es capaz de alcanzar los 8.8 HP con su motor de 4 tiempos, y de deslumbrar a cualquiera con el reflejo de su parrilla y faros cromados que le añaden un toque de nostalgia a su diseño.',
        50125.58,
        100,
        '["Color: Negro","Marca: Vento","Freno Trasero: Disco hidráulico","Tipo de Motor: 4 Tiempos, enfriado por aceite","Suspensión Frontal: Horquilla hidráulica invertida","Sistema de Arranque: Eléctrico y patada","Rendimiento de Combustible Aproximado: 30 km/l","Transmisión: Manual","Torque Máximo: 16/6500 N/RPM","Potencia Máxima: 18 HP","Velocidades Motos: 6","Velocidad Máxima: 130km/h","Suspensión Trasera: Monoshock","Freno Frontal: Disco hidráulico"]',
        '["hotrod-150-2023-1.webp"]',
        1

    ),
    (
        'Terra 150 S 2023',
        'Sé espontáneo y deja atrás la rutina. La nueva Vento Terra 150 S transformará tu día a día en una aventura gracias a su ágil motor de 8.8 HP y sus llantas todoterreno que te permitirán tener todo bajo control tanto en la jungla de concreto como en sus alrededores. ¡Las grandes aventuras no tienen que estar lejos para ser memorables, lo que realmente importa es vivirlas con frecuencia!',
        31999.00,
        100,
        '["Color: Negro","Marca: Vento","Freno Trasero: Disco hidráulico","Tipo de Motor: 4 Tiempos, enfriado por aceite","Suspensión Frontal: Horquilla hidráulica invertida","Sistema de Arranque: Eléctrico y patada","Rendimiento de Combustible Aproximado: 30 km/l","Transmisión: Manual","Torque Máximo: 16/6500 N/RPM","Potencia Máxima: 18 HP","Velocidades Motos: 6","Velocidad Máxima: 130km/h","Suspensión Trasera: Monoshock","Freno Frontal: Disco hidráulico"]',
        '["terra-150-s-2023-1.webp"]',
        1

    ),
    (
        'Screamer Sportivo 250 2023',
        'La Screamer Sportivo 250 posee una apariencia completamente renovada que logra maximizar su robusta y elegante personalidad. Sus incorporaciones estéticas, así como su par de cauchos deportivos con rines de aluminio, escape más corto y ancho, rejilla cubre faro, y funda cubre asiento la contagian de un estilo más callejero y desobediente. La tecnología VenTec que te permite enlazar la moto con tu smartphone para subir o bajar el volumen de tus canciones favoritas, adelantar o regresar canciones y contestar o declinar llamadas.',
        50125.58,
        100,
        '["Color: Rojo","Marca: Vento","Freno Trasero: Disco hidráulico","Tipo de Motor: 4 Tiempos, enfriado por aceite","Suspensión Frontal: Horquilla hidráulica invertida","Sistema de Arranque: Eléctrico y patada","Rendimiento de Combustible Aproximado: 30 km/l","Transmisión: Manual","Torque Máximo: 16/6500 N/RPM","Potencia Máxima: 18 HP","Velocidades Motos: 6","Velocidad Máxima: 130km/h","Suspensión Trasera: Monoshock","Freno Frontal: Disco hidráulico"]',
        '["rebels-screamer-sportivo-250-2023-1.webp"]',
        2

    ),
    (
        'Rebels Rocketman Racing 250 2023',
        'Con su relajado diseño inspirado en la cultura rocker de los años 50 en Londres, la Rocketman Racing 250 te invita a ignorar las reglas, a olvidarte de los límites y comenzar a vivir bajo el único código que vale la pena: el tuyo. Toma el control y comienza a perseguir el horizonte sobre este bólido tan rebelde como tus metas, impulsado por su motor de 18 HP y velocidad máxima de 130 km/h.',
        44999.00,
        100,
        '["Año: 2023","Color: Gris","Motor: Monocilíndrico de 4 tiempos","Capacidad De Combustible: 20 L","Velocidad Máxima: 130 km/h","Sistema De Encendido: Electrónico y de patada","Frenos Delanteros: Disco hidráulico","Frenos Traseros: Disco hidráulico","Peso Máximo Que Soporta: 150 Kg","País De Origen: México"]',
        '["rebels-rocketman-racing-250-2023-1.webp"]',
        2

    ),
    (
        'Rebels Thriller 200 2023',
        'Contando sólo con lo esencial y con mucha presencia para cualquier camino, la nueva Thriller 200 es la evolución de las motos Cafe Racer. Un ícono en el mundo del motociclismo contemporáneo que nos recuerda a las viejas carreras de café a café, en Londres de los años 50´s. Diseñada para el movimiento urbano, el espíritu de la Thriller 200 combina versatilidad y estilo, rompiendo con la rutina de cualquier camino.',
        35999.00,
        100,
        '["Año: 2023","Motor: Monocilíndrico de 4 tiempos","Capacidad De Combustible: 10 L","Velocidad Máxima: 115 km/h","Sistema De Encendido: Electrónico y de patada","Frenos Delanteros: Disco hidráulico","Frenos Traseros: Tambor","Peso Máximo Que Soporta: 150 Kg","País De Origen: México"]',
        '["rebels-thriller-200-2023-1.webp"]',
        2

    ),
    (
        'Reptile Trek 200 2024',
        'Escoge el camino sin preocupaciones como superficies arenosas, irregulares o inclinadas. Llega a donde otros vehículos no pueden y conquista todos los terrenos. Gracias a su motor y su caja de cambios la hacen irresistible para las aventuras. Supera, atraviesa y circula con potencia al extremo de Glock 200 cc.',
        58999.00,
        100,
        '["Año: 2024","Motor: Monocilíndrico de 4 tiempos","Capacidad De Combustible: 10 L","Velocidad Máxima: 115 km/h","Sistema De Encendido: Electrónico y de patada","Frenos Delanteros: Disco hidráulico","Frenos Traseros: Tambor","Peso Máximo Que Soporta: 150 Kg","País De Origen: México"]',
        '["reptile-trek-200-2024-1.webp"]',
        3
    ),
    (
        'Gladiator 200 2024',
        'La Vento Gladiator Reptile 200 es la hermana mayor de la Reptile Trek 150. Cuenta con dotes de grandeza como luces sobre las parrillas tipo exploradoras, protectores de manos, respaldo para el pasajero y rines con bastante estilo. Lleva un motor monocilindrico de 4 tiempos enfriado por aire de 200 cc y 12.8 hp de potencia, la transmisión es automática CVT con reversa.',
        58999.00,
        100,
        '["Año: 2024","Motor: Monocilíndrico de 4 tiempos","Capacidad De Combustible: 10 L","Velocidad Máxima: 115 km/h","Sistema De Encendido: Electrónico y de patada","Frenos Delanteros: Disco hidráulico","Frenos Traseros: Tambor","Peso Máximo Que Soporta: 150 Kg","País De Origen: México"]',
        '["reptile-trek-200-2024-1.webp"]',
        3
    ),
    (
        'Casco Veno CRV1',
        'Los Cascos VenTec CRV1 convierten un viaje ordinario en una experiencia totalmente interactiva. Al pulsar los sensores touch al exterior del casco o el botón en el Centro de Comando, habilitas un mundo de comandos de voz compatibles con tu Asistente de Google o Siri.',
        1999.00,
        100,
        '["Tipo Cross","Bluetooth","Certificación DOT","Micrófono integrado","Bocinas integradas","Comando por voz","Luces de seguridad","Frente 27cm","Fondo 6.5cm","Alto 26.5cm","Peso 2kg"]',
        '["ventec-crv1-1.webp"]',
        3
    ),
    (
        'Casco Veno CRV2',
        'Los Cascos VenTec CRV2 convierten un viaje ordinario en una experiencia totalmente interactiva. Al pulsar los sensores touch al exterior del casco o el botón en el Centro de Comando, habilitas un mundo de comandos de voz compatibles con tu Asistente de Google o Siri.',
        1999.00,
        100,
        '["Tipo Cross","Bluetooth","Certificación DOT","Micrófono integrado","Bocinas integradas","Comando por voz","Luces de seguridad","Frente 27cm","Fondo 6.5cm","Alto 26.5cm","Peso 2kg"]',
        '["ventec-crv1-1.webp"]',
        3
    );

SELECT * FROM `products`;

-- -----------------------------------------------------
-- `stores_products`
-- -----------------------------------------------------

INSERT INTO `stores_products`
    (
        `stores_id`,
        `products_id`,
        `inventory`
    )
VALUES
    (1, 1, 100),
    (1, 2, 100),
    (1, 3, 100),
    (1, 4, 100),
    (1, 5, 100),
    (1, 6, 100),
    (1, 7, 100),
    (1, 8, 100);

SELECT * FROM `stores_products`;

-- -----------------------------------------------------
-- `tags`
-- -----------------------------------------------------

INSERT INTO `tags` (`name`)
VALUES
    ('Nuevo'),
    ('Promoción'),
    ('Más vendido'),
    ('Presentado'),
    ('Popular'),
    ('Tendencia'),
    ('Limitado'),
    ('Exclusivo');

SELECT * FROM `tags`;

-- -----------------------------------------------------
-- `products_tags`
-- -----------------------------------------------------

INSERT INTO `products_tags`
    (
        `products_id`,
        `tags_id`
    )
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (6, 1),
    (7, 1),
    (8, 1);
