import express from 'express';
import cors from 'cors';
const app = express(); //setting app to the invocation of express function

app.use(express.json()); // allows us to use JSON
app.use(cors()); // enables us to make calls to ourselfs




import { faker } from '@faker-js/faker';
//import { Company } from '@faker-js/faker/modules/company';

class User{
    constructor() {
        this.userId = faker.datatype.uuid() 
        this.userName = faker.internet.userName()
    }
}
// import { faker } from '@faker-js/faker/locale/de';



app.get('/api/users/new', (req, res) => {
    res.status(200).send(new User())
})

app.get('/api/companies/new', (req, res) => {
    res.status(200).send()
})

app.get("/api/user/company", (req, res) => {
    res.status(200).send()
})


// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company

app.listen(4000, () => {
    console.log("we are live....");
})// puts our server live