app.get("/sitemap.xml", (req, res) => res.sendFile(__dirname + "/sitemap.xml"));
app.get("/robots.txt", (req, res) => res.sendFile(__dirname + "/robots.txt"));