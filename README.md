# LAB - Class 04

## Project: API-SERVER

### Hunter Fehr

### Problem Domain

built a REST API using Express, by creating a proper serries of endpoints that perform CRUD operations on a database. then

### Links and Resources

- [basic-api-server](https://github.com/hmfehr/basic-api-server) (GitHub Actions)
<!-- - [prod deployment](https://four01d49-server-deploy-prod.onrender.com/) -->
<!-- - [dev deployment](https://four01d49-server-deploy-dev.onrender.com/) -->
need help understanding the new deployment website and will note and ask ryan or a ta tomorrow 12-1

### Setup

#### `.env` requirements

see `.env.sample`

- PORT: 3001

#### How to initialize/run your application

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `/` - specific route to hit
- GET : `bad` - specific route to hit

- Feature Two: deploy to prod
- GET : `/hello` - specific route to hit
- GET : `bad` - specific route to hit

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles invalid requests
  - handles errors
  - handles CRUD

#### UML

![UML](/screenshot/lab04.jpg)
