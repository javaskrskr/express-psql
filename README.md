# express-psql
express and psql with k8s

## test
- using test.rest with rest client on extension to test req

## ENV
```yml
POSTGRES_USER=<POSTGRES_USER>
POSTGRES_DB=<POSTGRES_DB>
POSTGRES_PASSWORD=<POSTGRES_PASSWORD>
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
NODE_PORT=3000
```

## PACKAGE
- npm install

## START LOCALLY
- nvm use 20
- npm install
- docker-compose up -d
- access http://localhost:3000/
