import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // ref: 'User' means that the order is associated with a user
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          // product is associated with a product
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      // shippingAddress is an object
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      // paymentMethod is a string
      type: String,
      required: true,
    },
    paymentResult: {
      // paymentResult is an object
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      // taxPrice is a number
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      // shippingPrice is a number
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      // totalPrice is a number
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      // isPaid is a boolean
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      // paidAt is a date
      type: Date,
    },
    isDelivered: {
      // isDelivered is a boolean
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      // deliveredAt is a date
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
