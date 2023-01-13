const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
  id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paymentDue: {
    type: Date,
  },
  description: {
    type: String,
  },
  paymentTerms: {
    type: Number,
  },
  clientName: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
  status: {
    type: String,
  },
  senderAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    zip: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  clientAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    zip: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  items: [
    {
      name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
      total: { type: Number },
    },
  ],
  total: { type: Number },
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
