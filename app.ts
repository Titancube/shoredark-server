import app from "./plugins/express";

// Test connection
app.get("/api", (req, res) => {
  res.status(200).send("done man");
});

// Listen on port 5000
app.listen(5000, () => {
  console.log(`[${new Date()}] Shoredark API server is up`);
});
