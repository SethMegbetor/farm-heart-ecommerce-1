// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     console.log(req.body);

//     try {
//       // console.log(params);
//       const params = {
//         submit_type: "pay",
//         mode: "payment",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [
//           { shipping_rate: "shr_1M3MlYEJyPfrXqGJAIJvn9r7" },
//           // { shipping_rate: "shr_1M33pHEJyPfrXqGJglPrBJFK" },
//           // { shipping_rate: "shr_1M33rUEJyPfrXqGJIk4BDjDc" },
//         ],
//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img
//             .replace(
//               "image-",
//               "https://cdn.sanity.io/images/vq02iuqo/production/"
//             )
//             .replace("-jpg", ".jpg");
//           console.log("IMAGE", newImage);
//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//               // unit_amount: item.price_data * 100,
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity,
//           };
//         }),
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//         // success_url: `${req.headers.origin}/success`,
//         // cancel_url: `${req.headers.origin}/canceled`,
//       };

//       console.log("params is: " + params);
//       console.log(params);
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       console.log(session);
//       // res.redirect(303, session.url);
//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//       // console.log(params);
//       // console.log(session);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1M3MlYEJyPfrXqGJAIJvn9r7" },
          { shipping_rate: "shr_1M33pHEJyPfrXqGJglPrBJFK" },
          { shipping_rate: "shr_1M33rUEJyPfrXqGJIk4BDjDc" },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/vfxfwnaw/production/"
            )
            .replace("-jpg", ".jpg");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),

        // success_url: `${req.headers.origin}/?success=true`,
        // cancel_url: `${req.headers.origin}/?canceled=true`,

        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
