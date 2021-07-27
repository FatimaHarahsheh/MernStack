const express = require("express");
const faker = require("faker");
const app = express();




class User {
  constructor() {
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    // this.address = faker.address.address();
    this.street = faker.address.streetAddress();
    this.city = faker.address.cityName();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();


  }
}


// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  let user = new User();
  res.json({ user })
});

app.get("/api/companies/new", (req, res) => {
  let company = new Company();
  res.json({ company })
});


app.get("/api/user/company", (req, res) => {
  let company = new Company();
  let user = new User();

  res.json({ company, user })
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

