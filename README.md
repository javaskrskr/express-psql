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
NODE_PORT=5000
```

## PACKAGE
- npm install

## START LOCALLY
- nvm use 20
- npm install
- docker-compose up -d
- access http://localhost:5000/

## ADD INGRESS CONTROLLER
- k apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml
