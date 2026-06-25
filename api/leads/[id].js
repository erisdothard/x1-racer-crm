import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);
const KEY = "x1crm:leads";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    const patch = req.body;
    const raw = await redis.get(KEY);
    const leads = raw ? JSON.parse(raw) : [];
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) return res.status(404).json({ error: "Not found" });
    leads[index] = { ...leads[index], ...patch };
    await redis.set(KEY, JSON.stringify(leads));
    return res.json(leads[index]);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
