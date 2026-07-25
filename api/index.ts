import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Vercel serverless functions strip the /api prefix from req.url
// We restore it here so our Express routes (which expect /api/...) match correctly
app.use((req, res, next) => {
  if (req.url && !req.url.startsWith("/api")) {
    req.url = "/api" + (req.url === "/" ? "" : req.url);
  }
  next();
});

// Since registerRoutes is synchronous in its execution (despite being marked async),
// we can call it without awaiting to register routes immediately for serverless execution.
registerRoutes(null as any, app);

export default app;
