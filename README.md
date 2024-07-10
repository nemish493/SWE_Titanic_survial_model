# Titanic Survival Calculator

## Project Overview

This project is part of the Summerterm 2024 AIN-B Software Engineering course led by Prof. Dr. Christoph Schober. The project consists of two main tasks:

1. **Titanic Survivor App**: A web application to predict the survival of passengers in the Titanic accident.
2. **Presentation**: A demonstration of the developed software, insights on the system architecture, and individual contributions.



## Team Information

- **Team Members**: 
  - Aadi Alhuwalia : 22202107
  - Aryan Jain : 22107593
  - Avanish Kumar Singh : 22200727
  - Bhanu Pratap Rana : 22201990
  - Harsh Gurawaliya : 22109730
  - Jijainth Dhinakaran : 22100952
  - Nemish Kyada : 22212034
  - Rohit Galani : 22209032

## Requirements and Setup

### Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine. [Docker Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Compose**: Ensure Docker Compose is installed. [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Repository Links

1. **Web Application Service Repository**: https://mygit.th-deg.de/ainb_24_sancus/titanic_web_service
2. **Prediction Model Service Repository**: https://mygit.th-deg.de/ainb_24_sancus/titanic_model_service


### Repository Structure

1. The web service is the parent repository, whereas the model service is the secondary repository. To run the project:

2. Inside the titanic_web_service directory, clone the model service repository in empty directory of titanic_model service.

```sh
git clone https://mygit.th-deg.de/ainb_24_sancus/titanic_web_service.git
```
```sh
cd titanic_web_service
```
```sh
rm -rf titanic_model_service
```
```sh
git clone https://mygit.th-deg.de/ainb_24_sancus/titanic_model_service.git
```
3. Open terminal, navigate to titanic_web_service, and run:

```sh
docker-compose up -d --build
```

This command will:
- Build Docker images for both the web application service and the prediction model service.
- Start the services and make the web interface accessible at \`https://localhost:8080\`.

### Accessing the Web Application

Once the services are up and running, open your web browser and navigate to:

```
https://localhost:8080
```

## Application Structure

### Web Application

The web application consists of two main pages:

1. **Landing Page**: Provides a short explanation of the app's functionality and a link to the Survival Calculator.
2. **Survival Calculator**: Allows users to input passenger details and view survival predictions based on selected models.
3. **Learn Basic**: It contain all additional data above the project, usses and techinal framework

#### Passenger Details Input

- **PClass**: First, Second, Third
- **Sex**: Male, Female
- **Age**: 0-100
- **Fare**: 0-500 $
- **Traveled Alone**: Yes, No
- **Embarked**: Cherbourg, Queenstown, Southampton

Users can view explanations for each input property and select prediction models from Random Forest, Decision Tree, KNN, Support Vector Machines, or Logistic Regression.

### Prediction Model Service

The prediction model service:
- Is written in Python using FastAPI.
- Uses models implemented as per the proof-of-concept notebook.
- Stores trained models as Pickle files.
- Exposes a RESTful API for prediction model inference.

## Testing and CI/CD

### Testing

- **Unit and Integration Tests**: Written using the pytest framework with a coverage requirement above 75%.
- **End2End Tests**: Written using Cypress or Playwright and automatically run in a nightly pipeline.

### Continuous Integration

- **Gitlab CI**: Docker images are built and pushed to the registry with each commit.
- **Pipeline Execution**: Unit and integration tests run on every commit, while End2End tests run nightly.

## Project Management

The project follows the Scrum framework with 3 sprints, each lasting 3 weeks. All non-code resources are managed in Jira.


## License

This project is licensed under the MIT License. See the LICENSE file for more details.
