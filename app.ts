import express, { Response, Request, NextFunction } from "express";
// import db from "./plugins/firebase";
import fn from "./plugins/functions";

const app = express();

app.get("/api", (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({
		yo: 'hi'
	})
});

// Listen on port 5000
app.listen(5000, () => {
  console.log(`[${new Date()}] Shoredark API server is up`);
});
