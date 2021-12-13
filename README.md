# Database-prisma
Project for a Postgres Database using Prisma and Node.js

## Setup

### Add .env file
Add a .env file in the root of the project with the following variables:
```
DATABASE_URL=Your_Database_URL
SHADOW_DATABASE_URL=Your_Shadow_Database_URL
```
In the case of the owner setup, the DATABASE_URL is a Postgres Database Deployed to heroku
and the SHADOW_DATABASE_URL is running locally with Postgres
### Add makeQuery.js file
The makeQuery.js is a file in which you can write your queries to the database
#### Example of an query
```
const queries = require('./queries')
const loadData = require('./loadData')

const makeQuery = async (prisma) => {
    const data = loadData.paymentsData()
    const splitData = loadData.splitData(data)
    
    for(const dataSample of splitData){
        await queries.createManyOrderPayments(prisma, dataSample)    
    }
}
module.exports = makeQuery
```
