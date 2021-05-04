const mongoose = require("mongoose");

// customer schema

const customerSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

// define export

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
