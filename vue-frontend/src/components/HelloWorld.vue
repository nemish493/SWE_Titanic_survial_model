<template>
  <div id="app">
    <header>
      <h1>Titanic Survivor Prediction App</h1>
      <nav>
        <router-link to="/"><button class="btn">Home</button></router-link>

        <ul>
          <li class="link"><a href="#introduction">Introduction</a></li>
          <li class="link"><a href="#technical-explanation">Technical Explanation</a></li>
          <li class="link"><a href="#user-guide">User Guide</a></li>
        </ul>
        <router-link to="/predict"><button class="btn">Prediction Calculator</button></router-link>
      </nav>
    </header>

    <main>
      <section id="introduction">
        <h2>Project Overview</h2>
        <p>
          Welcome to our Titanic Survivor Prediction project! This web application predicts the survival chances of
          passengers
          from the Titanic disaster. The project aims to provide an intuitive interface where users can input passenger
          details
          and see survival predictions based on various machine learning models.
        </p>
      </section>

      <section id="technical-explanation">
        <h2>How the Code Works</h2>
        <p>
          The application is built using a combination of modern web technologies:
        <ul>
          <li><strong>Frontend:</strong> Developed with Vue.js, utilizing components for a modular structure. Key
            components include `HelloWorld.vue`, `landing_page.vue`, and `PredictPage.vue`.</li>
          <li><strong>Backend:</strong> Implemented with FastAPI, a modern Python web framework. This handles the model
            predictions and serves the RESTful API.</li>
          <li><strong>Machine Learning Models:</strong> Includes Random Forest, Decision Tree, KNN, SVM, and Logistic
            Regression. These models are trained using historical Titanic data and are stored as Pickle files for
            inference.</li>
          <li><strong>Docker:</strong> The entire application, including the web interface and prediction service, is
            containerized using Docker and managed with Docker Compose.</li>
        </ul>
        </p>
      </section>

      <section id="user-guide">
        <h2>User Guide</h2>
        <p>
          New to our website? Here’s a quick guide to get you started:
        <ul>
          <li><strong>Landing Page:</strong> Start here to understand the basics of our application. You'll find an
            introduction and a link to the Survival Calculator.</li>
          <li><strong>Survival Calculator:</strong> Navigate to this page to input passenger details (class, sex, age,
            fare, traveling alone, and embarked location) and choose from various prediction models. The calculator will
            show predictions for survival based on the input data.</li>
          <li><strong>Predictions:</strong> View real-time predictions for the selected models as you input data. The
            page also maintains a history of the last 5 predictions made during your session.</li>
          <li><strong>Contact Us:</strong> For any questions or feedback, use the contact information provided on the
            site.</li>
        </ul>
        </p>
      </section>

    </main>

    <footer>

    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: #fff;
}

#app {
  font-family: 'Poppins', sans-serif;
  background-color: #18181B;
  padding-top: 2vh;
  color: #fff;

}

header {
  background-color: #1f2937;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav ul {
  height: 3.5rem;
  width: 50%;
  border-radius: 10rem;
  background: rgba(0, 0, 255, 0.128);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.link a {
  position: relative;
  padding-bottom: 0.75rem;
  color: #fff;
  font-size: 1rem;
}

.link a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 0;
  bottom: 0;
  left: 0;
  background-color: #1d4ed8;
  transition: all 0.3s ease;
}

.link a:hover::after {
  width: 70%;
}

nav ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

.btn {
  width: 15rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1d4ed8;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #1e40af;
}

main {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
}

section {
  margin-bottom: 2rem;
  width: 80%;
}

h2 {
  background-color: rgba(0, 0, 255, 0.128);
  height: 3.5rem;
  width: auto;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  padding-top: 0.6rem;
  border-radius: 10rem;
}

p {
  line-height: 1.7;
}

.technical-details,
.guide-details {
  background-color: #18181B;
  padding: 1rem;
  border-radius: 8px;
}

/* #team{
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.team-section {
  display: flex;
  justify-content: center;
  width: 100%;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  column-gap: 100px;
  width: 80%;
  max-width: 600px;
}

.team-member {
  background-color: #18181B;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.team-member img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

footer {
  background-color: #18181B;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
