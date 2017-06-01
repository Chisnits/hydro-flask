DROP TABLE IF EXISTS bottles;

CREATE TABLE bottles (
    bottleSize INTEGER(255),
    mouthSize VARCHAR(255),
    color VARCHAR(255),
    image VARCHAR(255),
    price INTEGER(255)
);

INSERT INTO bottles (bottleSize, mouthSize, color, image, price) VALUES
(12, 'Standard Mouth', 'Cobalt', '../src/assets/12oz-standard-mouth/cobalt.jpg', 24.95),
(12, 'Standard Mouth', 'Graphite', '../src/assets/12oz-standard-mouth/graphite.jpg', 24.95),
(12, 'Standard Mouth', 'Lava', '../src/assets/12oz-standard-mouth/lava.jpg', 24.95),
(12, 'Standard Mouth', 'Plum', '../src/assets/12oz-standard-mouth/plum.jpg', 24.95),
(12, 'Standard Mouth', 'Raspberry', '../src/assets/12oz-standard-mouth/raspberry.jpg', 24.95),
(12, 'Standard Mouth', 'Sage', '../src/assets/12oz-standard-mouth/sage.jpg', 24.95),
(12, 'Standard Mouth', 'Stainless', '../src/assets/12oz-standard-mouth/stainless.jpg', 24.95),
(12, 'Standard Mouth', 'White', '../src/assets/12oz-standard-mouth/white.jpg', 24.95);