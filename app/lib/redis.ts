import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL || "redis://redis:6379/0";

let connection = new Redis({
  port: 6379,
  host: "redis",
  maxRetriesPerRequest: null,
});

export { connection };
