app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(Friends);
});