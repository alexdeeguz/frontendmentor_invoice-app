const express = require("express");
const router = express.Router();
const Invoice = require("../../models/Invoice");

router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findOne({ id: req.params.id });
    res.json(invoice);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.body._id)
    res.send(true)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/edit", async (req, res) => {
  try {
    let invoice = await Invoice.findByIdAndUpdate(req.body._id, {...req.body});
    invoice.items = req.body.items
    let total = 0
    invoice.items.forEach(item => {
      let itemTotal = item.quantity * item.price
      item.total = itemTotal
      total += itemTotal
    })
    invoice.total = total
    await invoice.save()
    res.json(req.body)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const makeId = () => {
    let res = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    for (let i = 0; i < 2; i++) {
      res += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (i = 0; i < 4; i++) {
      res += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return res;
  };

  let id = makeId();

  try {
    const invoice = new Invoice({
      id,
      ...req.body,
    });
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
