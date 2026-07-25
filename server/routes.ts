import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { serviceCatalog, serviceCategories } from "../shared/services";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/services", (_req, res) => {
    res.json({
      services: serviceCatalog,
      categories: serviceCategories,
    });
  });

  return httpServer;
}
