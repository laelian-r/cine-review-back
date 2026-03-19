CREATE TABLE IF NOT EXISTS users (
	id          INTEGER PRIMARY KEY,
	email     	VARCHAR(300) NOT NULL,
	password    VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
    id        		INTEGER PRIMARY KEY,
    title     		VARCHAR(255) NOT NULL,
    image     		TEXT,
    category  		VARCHAR(100),
    description 	TEXT
);

INSERT INTO users (email, password) VALUES
('test@email.com', 'azerty');

INSERT INTO movies (title, image, category, description) VALUES
('Dragon', 'https://cinedweller.com/wp-content/uploads/2024/12/DRAGONS_120_DECLI3.jpg', 'Tous publics', 'Un film sur des dragons.'),
('Le Parc', 'https://fr.web.img6.acsta.net/c_310_420/img/fa/90/fa90ab7c0b300af60d9cc5dc36deef3f.jpg', 'Comédie musicale', 'Une comédie musicale dans un parc.');