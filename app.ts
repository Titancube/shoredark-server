import app from "./plugins/express";
import db from "./plugins/firebase";
import fn from "./plugins/functions";

// Admin check
app.get("/auth", async (req, res) => {
  try {
    const uid = req.query.uid + "";
    const dbReq = await db.collection("Admins").doc(uid).get();
    if (dbReq.exists) {
      res.status(200).json({
        isAdmin: true,
      });
    } else {
      res.status(404).json({
        isAdmin: false,
      });
    }
  } catch (error) {
    fn.logger(`Server error`);
    console.error(error);
  }
});

// Listen on port 8000
app.listen(8000, () => {
  console.log(`[${new Date()}] Shoredark API server is up`);
});
