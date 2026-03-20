import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const PORT = process.env.PORT ?? "3001";

const app = express();
const db = new Database("./db.sqlite");

app.use(cors());
app.use(express.json());

app.use(express.json());

app.get("/movies", (req, res) => {
	const rows = db.prepare("SELECT * FROM movies").all();
	res.json(rows);
});

app.post("/movies", (req, res) => {
	const { title, image, category, description } = req.body;
	const stmt = db.prepare(
		"INSERT INTO movies (title, image, category, description) VALUES (?, ?, ?, ?)",
	);
	const result = stmt.run(title, image, category, description);
	res.json({ id: result.lastInsertRowid });
});

app.get("/movies/:id", (req, res) => {
	const row = db
		.prepare("SELECT * FROM movies WHERE id = ?")
		.get(req.params.id);
	if (!row) return res.status(404).json({ error: "Film introuvable" });
	res.json(row);
});

app.listen(PORT, () => console.log("Serveur démarré sur le port " + PORT));
