DROP TABLE IF EXISTS bottles, bottletype;

CREATE TABLE bottletype (
    id SERIAL PRIMARY KEY,
    type VARCHAR(225)
);

INSERT INTO bottletype (type) VALUES
('Hydration'),
('Tumblers'),
('Coffee'),
('Beer & Spirits'),
('Food');

CREATE TABLE bottles (
    id SERIAL PRIMARY KEY,
    bottleSize INTEGER(255),
    mouthSize VARCHAR(255),
    color VARCHAR(255),
    image VARCHAR(255),
    price INTEGER(255),
    bottletypeid INTEGER REFERENCES bottletype(id)
);

INSERT INTO bottles (bottleSize, mouthSize, color, image, price, bottletypeid) VALUES
(12, 'Standard Mouth', 'Cobalt', '../src/assets/12oz-standard-mouth/cobalt.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Graphite', '../src/assets/12oz-standard-mouth/graphite.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Lava', '../src/assets/12oz-standard-mouth/lava.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Plum', '../src/assets/12oz-standard-mouth/plum.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Raspberry', '../src/assets/12oz-standard-mouth/raspberry.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Sage', '../src/assets/12oz-standard-mouth/sage.jpg', 24.95, 1),
(12, 'Standard Mouth', 'Stainless', '../src/assets/12oz-standard-mouth/stainless.jpg', 24.95, 1),
(12, 'Standard Mouth', 'White', '../src/assets/12oz-standard-mouth/white.jpg', 24.95, 1),
(18, 'Standard Mouth', 'Cobalt', '../src/assets/18oz-standard-mouth/cobalt.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Graphite', '../src/assets/18oz-standard-mouth/graphite.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Kiwi', '../src/assets/18oz-standard-mouth/kiwi.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Lava', '../src/assets/18oz-standard-mouth/lava.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Mango', '../src/assets/18oz-standard-mouth/mango.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Pacific', '../src/assets/18oz-standard-mouth/pacific.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Plum', '../src/assets/18oz-standard-mouth/plum.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Sage', '../src/assets/18oz-standard-mouth/sage.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Black', '../src/assets/18oz-standard-mouth/black.jpg', 29.95, 1),
(18, 'Standard Mouth', 'Stainless', '../src/assets/18oz-standard-mouth/stainless.jpg', 29.95, 1),
(18, 'Standard Mouth', 'White', '../src/assets/18oz-standard-mouth/white.jpg', 29.95, 1),
(21, 'Standard Mouth', 'Cobalt', '../src/assets/21oz-standard-mouth/cobalt.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Graphite', '../src/assets/21oz-standard-mouth/graphite.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Kiwi', '../src/assets/21oz-standard-mouth/kiwi.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Lava', '../src/assets/21oz-standard-mouth/lava.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Lemon', '../src/assets/21oz-standard-mouth/lemon.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Mango', '../src/assets/21oz-standard-mouth/mango.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Mint', '../src/assets/21oz-standard-mouth/mint.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Pacific', '../src/assets/21oz-standard-mouth/pacific.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Plum', '../src/assets/21oz-standard-mouth/plum.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Raspberry', '../src/assets/21oz-standard-mouth/raspberry.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Sage', '../src/assets/21oz-standard-mouth/sage.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Black', '../src/assets/21oz-standard-mouth/black.jpg', 32.95, 1),
(21, 'Standard Mouth', 'Stainless', '../src/assets/21oz-standard-mouth/stainless.jpg', 32.95, 1),
(21, 'Standard Mouth', 'White', '../src/assets/21oz-standard-mouth/white.jpg', 32.95, 1);