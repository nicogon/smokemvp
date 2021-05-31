# INSTALL
npm ci

# RUN LOCALLY

One tab 
```
node fakeServer.js
```
This will run the fake server

On another

npm run test

# TDD

npm run tdd

# BUILD
docker build . -t smoketests

# RUN DOCKER
docker run --env ACCESS_TOKEN=accesstoken smoketests

# RUN ONLY ONE TEST

```  
describe.only('create a new card', () => {
    (...)
```