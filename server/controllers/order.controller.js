import Order from "../models/order.modal.js";
import errorHandler from "./../helpers/dbErrorHandler.js";
const create = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).json({ message: "Your purchase has been successful." });
  } catch (error) {
    console.log("err", error);
    res.status(400).json({
      error: errorHandler.getErrorMessage(error),
    });
  }
};

const list = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  list,
};
