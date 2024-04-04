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

## K8S IMPLEMENTATION LOCALLY
- Download kind: `brew install kind`
- Downlaod kubectl: 
- Download docker and ensure it is running on the background

- Build the docker image:  `docker build . -t <YOUR_USER_NAME>/express-psql-api -f ./Dockerfile.dev`
- Push the image to docker hub: `docker push <YOUR_USER_NAME>/express-psql-api`    
- On cli, `docker login`
- Build the container from the ./root directory: `docker-compose up -d`

- Create kind cluster: `kind create cluster`
- Assign docker config credentials for k8s: `kubectl create secret generic regcred --from-file=.dockerconfigjson=~/.docker/config.json --type=kubernetes.io/dockerconfigjson`
- If assignment of docker config json is not working, use it instead: `kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=<YOUR_USER_NAME> --docker-password=<YOUR_USER_PASSWORD> --docker-email=<YOUR_EMAIL_ON_DOCKER_HUB>`
- Confirm the secret is ready: `kubectl get secrets`
- Add ingress controller on the cluster: `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml`
- Apply the deployment yml file: `kubect apply -f ./k8s`
- Access `http://localhost:3050/` can show the base route on the backend side, response as `ok`

- Clean up the k8s: `kubectl delete all --all`
- Clean up docker container: `docker-compose down`
