import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Since registerRoutes is synchronous in its execution (despite being marked async),
// we can call it without awaiting to register routes immediately for serverless execution.
registerRoutes(null as any, app);

export default app;
