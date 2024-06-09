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

## Project Structure
```
Titanic Survival Calculator/
├── __pycache__/
│   ├── backend.cpython-310.pyc
│   ├── main.cpython-310.pyc
│   ├── main.cpython-311.pyc
├── backend/
│   ├── __pycache__/
│   │   ├── main.cpython-311.pyc
│   │   ├── main.cpython-39.pyc
│   ├── dist/
│   │   ├── css/
│   │   │   ├── app.a2f58a13.css
│   │   ├── img/
│   │   │   ├── ship.e4049565.png
│   │   ├── js/
│   │   │   ├── app.930f6ec9.js
│   │   │   ├── app.930f6ec9.js.map
│   │   │   ├── chunk-vendors.ee17c5bb.js
│   │   │   ├── chunk-vendors.ee17c5bb.js.map
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── models/
│   │   ├── Decision Tree.pkl
│   │   ├── Gaussian Naive Bayes.pkl
│   │   ├── K-Nearest Neighbors.pkl
│   │   ├── Logistic Regression.pkl
│   │   ├── Perceptron.pkl
│   │   ├── Random Forest.pkl
│   │   ├── Stochastic Gradient Descent.pkl
│   │   ├── Support Vector Machine.pkl
│   ├── tests/
│   │   ├── integration/
│   │   │   ├── test_prediction_api.py
│   │   ├── unit/
│   │   │   ├── test_passenger_data_validation.py
│   ├── .DS_Store
│   ├── dockerfile
│   ├── main.py
│   ├── package-lock.json
│   ├── requirements.txt
├── vue-frontend/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── titanic/
│   │   │   │   ├── landing_page.spec.cy.js
│   │   │   │   ├── sample_test.cy.js
│   │   │   │   ├── survival_calculator.spec.cy.js
│   │   ├── fixtures/
│   │   │   ├── example.json
│   │   ├── screenshots/
│   │   │   ├── landing_page.spec.cy.js/
│   │   │   │   ├── Landing Page -- should display the landing page with correct elements (failed).png
│   │   │   ├── sample_test.cy.js/
│   │   │   │   ├── Sample Test -- should visit the app (failed).png
│   │   │   ├── survival_calculator.spec.cy.js/
│   │   │   │   ├── Survival Calculator -- should display prediction results (failed).png
│   │   │   │   ├── Survival Calculator -- should have all the necessary input fields (failed).png
│   │   ├── support/
│   │   │   ├── commands.js
│   │   │   ├── e2e.js
│   │   ├── cypress.config.js
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── aadi.png
│   │   │   ├── aryan.png
│   │   │   ├── avanish.png
│   │   │   ├── bhanu.png
│   │   │   ├── dataset.png
│   │   │   ├── dataset.webp
│   │   │   ├── gitlab-logo.png
│   │   │   ├── header.png
│   │   │   ├── nemish.png
│   │   │   ├── pp.webp
│   │   │   ├── rohit.png
│   │   │   ├── ship.png
│   │   ├── components/
│   │   │   ├── HelloWorld.vue
│   │   │   ├── PredictPage.vue
│   │   │   ├── landing_page.vue
│   │   ├── App.vue
│   │   ├── main.js
│   ├── .gitignore
│   ├── README.md
│   ├── babel.config.js
│   ├── dockerfile
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── vue.config.js
├── .DS_Store
├── .gitlab-ci.yml
├── LICENSE
├── README.md
├── docker-compose.yml
```
## Requirements and Setup

### Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine. [Docker Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Compose**: Ensure Docker Compose is installed. [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Cloning Repositories

The project is divided into two repositories within the team's Gitlab group:

1. **Web Application Service Repository**: [Link to the repository]
2. **Prediction Model Service Repository**: [Link to the repository]

Clone both repositories to your local machine.

```sh
git clone <web_application_service_repo>
git clone <prediction_model_service_repo>
```

### Building and Running the Application

Navigate to the directory containing the Docker Compose file and run the following command to build and start the services:

```sh
docker-compose up --build
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

### Submissions

- **Source Code and Documentation**: Includes all source code, configuration files, and documentation.
- **Git Repositories**: Both Git repositories as downloaded from Gitlab.
- **README File**: Instructions for building, running, and accessing the web application.
- **Team Presentation**: A PDF of the team presentation.
- **JIRA Sprint Planning**: A PDF export of the JIRA sprint planning at the beginning of each sprint (total of 3 PDFs).

### Final Submission

Submit the solution in a ZIP archive via iLearn.

## Contact Information

For any queries, contact Prof. Dr. Christoph Schober at christoph.schober@th-deg.de.

## Additional Notes

- Ensure to attend project meetings and the final presentation in Deggendorf.
- Follow the functional and non-functional requirements outlined in the project document.
- Check iLearn for any updates or corrections to the project requirements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
