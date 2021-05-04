const mongoose = require("mongoose");

// map global promise - get rid of warning
mongoose.Promise = global.Promise;
// connect to db
const db = mongoose.connect(
  "mongodb+srv://aditya:sahilkumar@cluster0.hbvhp.mongodb.net/customercli?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// import model
const Customer = require("./models/customer");

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    // db.close();
  });
};

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstName: search }, { lastName: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      //   db.close();
    }
  );
};
// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer Updated");
    // db.close();
  });
};

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("Customer Removed");
    // db.close();
  });
};

// List Customers
const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    // db.close();
  });
};

// export all methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
};
