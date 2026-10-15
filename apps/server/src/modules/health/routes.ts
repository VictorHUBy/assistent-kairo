import { healthResponseSchema } from "@kairo/shared";
import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
  const body = healthResponseSchema.parse({ ok: true });
  res.status(200).json(body);
});