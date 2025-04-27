# SIT323-2025- 6.1P: Kubernetes Deployment of a Calculator Microservice

This project involves containerising a Node.js Calculator microservice and deploying it to a Kubernetes cluster as part of SIT323 6.1P Task. The application allows basic arithmetic operations through RESTful API endpoints.

## Technologies Used
- Node.js
- Express.js
- Docker
- Kubernetes
- kubectl CLI
- DockerHub

## Prerequisites
- Node.js and npm installed
- Docker installed
- Kubernetes cluster running (Docker Desktop Kubernetes or Minikube)
- Access to a DockerHub account



### Step 1: Build Docker Image
```
docker build -t calculator-app .
```

### Step 2: Push Image to DockerHub
```
docker tag calculator-app rukii/calculator-app:latest
docker push rukii/calculator-app:latest
```

### Step 3: Create Kubernetes Deployment and Service
- `deployment.yml`: Describes how to deploy the calculator application.
- `service.yml`: Exposes the application using NodePort.

### Step 4: Apply Deployment and Service
```
kubectl apply -f deployment.yml
kubectl apply -f service.yml
```

### Step 5: Check Kubernetes Resources
```
kubectl get pods
kubectl get services
```

### Step 6: Access the Application
Open the browser and visit:

```
http://localhost:30080/add?num1=5&num2=3
```

You should see:
```
{
  "result": 8
}
```

## Kubernetes Files Overview

- **deployment.yml**: Deploys 1 replica of the containerized calculator app using the pushed DockerHub image.
- **service.yml**: Exposes the app on NodePort 30080 to allow external access.

## Repository
GitHub Repository:  
[https://github.com/Sanindu-Rukshan/sit323-2025-prac6p](https://github.com/Sanindu-Rukshan/sit323-2025-prac6p)


