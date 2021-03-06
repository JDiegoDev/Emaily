const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey); //we pass secret keys as a second parameter. check stripe API

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5$ for 5 credits",
      source: req.body.id,
    });

    console.log("charge: ", charge);
  });
};
