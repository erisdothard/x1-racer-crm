import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);
const KEY = "x1crm:leads";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const raw = await redis.get(KEY);
    const leads = raw ? JSON.parse(raw) : [];
    return res.json(leads);
  }

  if (req.method === "POST") {
    const lead = req.body;
    const raw = await redis.get(KEY);
    const leads = raw ? JSON.parse(raw) : [];
    leads.push(lead);
    await redis.set(KEY, JSON.stringify(leads));
    return res.status(201).json(lead);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
