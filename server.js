const express = require("express");
const app = express();
app.use(express.json());

let students = [];

// POST: Add student
app.post("/students", (req, res) => {
  const { name, age, course, year, status = "active" } = req.body;
  if (!name || !age || !course || !year) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const newStudent = { id: Date.now(), name, age, course, year, status };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// GET: All students
app.get("/students", (req, res) => res.json(students));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
