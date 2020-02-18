CREATE TABLE enemies (
    enemy VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    damage VARCHAR(255),
    health DECIMAL,
    nothing DECIMAL,
    small_energy DECIMAL,
    big_energy DECIMAL,
    missile DECIMAL,
    super DECIMAL,
    power_bomb DECIMAL,
    notes VARCHAR(255),
    location VARCHAR(255)
);

ALTER TABLE enemies ADD COLUMN id SERIAL PRIMARY KEY;

CREATE TABLE bosses (
    enemy VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    health DECIMAL,
    nothing DECIMAL,
    small_energy DECIMAL,
    big_energy DECIMAL,
    missile DECIMAL,
    super DECIMAL,
    power_bomb DECIMAL,
    notes VARCHAR(255),
    location VARCHAR(255)
);

ALTER TABLE bosses ADD COLUMN id SERIAL PRIMARY KEY;

-- \copy enemies FROM './data/Brinstar.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Crateria.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Brinstar.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Wrecked Ship.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Maridia.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Norfair.csv' DELIMITER ',' CSV HEADER;
COPY enemies FROM './data/Tourian.csv' DELIMITER ',' CSV HEADER;
-- COPY bosses FROM './data/Bosses.csv' DELIMITER ',' CSV HEADER;
-- COPY bosses_projectiles FROM './data/Bosses (Projectiles).csv' DELIMITER ',' CSV HEADER;
