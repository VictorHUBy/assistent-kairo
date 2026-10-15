import type { NextFunction, Request, Response } from "express";

export type ApiErrorBody = {
  error: {
    code: string;
    message: string;
  };
};

export class AppError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
  }
}

export function notFoundHandler(_req: Request, res: Response): void {
  const body: ApiErrorBody = {
    error: {
      code: "NOT_FOUND",
      message: "Route not found",
    },
  };
  res.status(404).json(body);
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  void _next;

  if (err instanceof AppError) {
    const body: ApiErrorBody = {
      error: {
        code: err.code,
        message: err.message,
      },
    };
    res.status(err.status).json(body);
    return;
  }

  const body: ApiErrorBody = {
    error: {
      code: "INTERNAL_ERROR",
      message: "Internal server error",
    },
  };
  res.status(500).json(body);
}