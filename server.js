const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { generateLPJ } = require("./services/lpjGenerator");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("lpj-form");
});

app.post("/generate", async (req, res) => {
  const buffer = await generateLPJ(req.body);

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=LPJ-Kegiatan.docx"
  );
  res.send(buffer);
});

app.listen(3000, () => {
  console.log("✅ Desa Santuy running at http://localhost:3000");
});
