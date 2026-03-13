import { stripe } from "@/src/lib/stripe";
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string,
        );
    } catch (err) {
        console.error("Webhook signature verification failed.", err);
        return NextResponse.json(
            { error: "Webhook inválido" },
            { status: 400 },
        );
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("Pagamento confirmado:", session.id);
            break;
        }

        case "invoice.payment_failed": {
            console.log("Pagamento falhou");
            break;
        }
    }

    return NextResponse.json({ received: true });
}
