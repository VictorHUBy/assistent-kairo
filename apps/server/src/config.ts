const portEnv = process.env.KAIRO_PORT;
const parsed = portEnv !== undefined ? Number(portEnv) : 3001;

export const config = {
  host: "127.0.0.1" as const,
  port: Number.isFinite(parsed) && parsed > 0 ? parsed : 3001,
};