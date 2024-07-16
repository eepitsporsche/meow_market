const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
