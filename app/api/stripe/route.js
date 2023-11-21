import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
  const { data } = await req.json();
  const { amount } = data;
  console.log(amount)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });

    //console.log(paymentIntent)

    return NextResponse.json({intent:paymentIntent?.client_secret, status: 200 });
  } catch (error) {
    return NextResponse.json({status: 400});
  }
}