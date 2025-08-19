import type { Address } from "gill";
import { address } from "gill";
import { Hono } from "hono";

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono",
];

app.get("/", (c) => {
  const wallet = address(
    "GQuioVe2yA6KZfstgmirAvugfUZBcdxSi7sHK7JGk3gk"
  ) as Address;
  console.log(wallet);

  welcomeStrings.push(wallet);

  return c.text(welcomeStrings.join("\n\n"));
});

export default app;
