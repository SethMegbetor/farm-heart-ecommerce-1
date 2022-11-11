import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  }
}
