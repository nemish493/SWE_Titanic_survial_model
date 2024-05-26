<template>
  <div class="predict-page">
    <h1>Enter value to get your Prediction</h1>

    <form @submit.prevent="submitForm" class="predict-form">
      <div class="form-group">
        <label for="pclass">Passenger Class:</label>
        <select id="pclass" v-model="pclass">
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
        </select>
      </div>

      <div class="form-group">
        <label for="sex">Sex:</label>
        <select id="sex" v-model="sex">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="age" min="0" max="100">
      </div>

      <div class="form-group">
        <label for="fare">Fare ($):</label>
        <input type="number" id="fare" v-model.number="fare" min="0" max="500">
      </div>

      <div class="form-group">
        <label for="traveledAlone">Traveled Alone:</label>
        <select id="traveledAlone" v-model="traveledAlone">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div class="form-group">
        <label for="embarked">Embarked:</label>
        <select id="embarked" v-model="embarked">
          <option>Cherbourg</option>
          <option>Queenstown</option>
          <option>Southampton</option>
        </select>
      </div>
      
      <button type="submit" class="cta-button">Submit</button>
    </form>

    <router-link to="/"><button class="cta-button">Back</button></router-link>

    
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Prediction Result</h2>
        <p v-if="loading">Loading...</p>
        <p v-else>{{ resultMessage }}</p>
        <button @click="closeModal" class="cta-button">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pclass: 'Third',
      sex: 'Male',
      age: 25,
      fare: 50,
      traveledAlone: 'Yes',
      embarked: 'Southampton',
      showModal: false,
      resultMessage: '',
      loading: false
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.showModal = true;
      try {
        // Simulate response for now
        // const response = await axios.post('http://127.0.0.1:8000/submit-form', {
        await axios.post('http://127.0.0.1:8000/submit-form', {
          pclass: this.pclass,
          sex: this.sex,
          age: this.age,
          fare: this.fare,
          traveledAlone: this.traveledAlone,
          embarked: this.embarked
        });
        
        // Simulated response
        this.resultMessage = 'Based on the input data, you would survive the Titanic crash!';
      } catch (error) {
        console.error('Error submitting form:', error);
        this.resultMessage = 'There was an error processing your request. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style>
.predict-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.predict-page h1 {
  text-align: center;
  margin-bottom: 20px;
}

.predict-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.cta-button {
  padding: 15px 40px;
  font-size: 18px;
  background-color: #38a169; /* Green button color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: center;
}

.cta-button:hover {
  background-color: #1f9d55; /* Darker green on hover */
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 30px 40px; /* Increased padding for better spacing */
  border-radius: 10px;
  max-width: 500px;
  text-align: center;
}

.modal h2 {
  margin-bottom: 20px; /* Added margin for spacing */
}

.modal p {
  margin-bottom: 20px; /* Added margin for spacing */
}

.modal .cta-button {
  margin-top: 20px; /* Added margin for spacing */
}
</style>
