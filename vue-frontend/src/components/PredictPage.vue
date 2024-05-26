<template>
  <div>
    <h1>Predict Page</h1>
    <router-link to="/"><button class="cta-button">Back 🤛🏼</button></router-link>

    <!-- Combined form for the survival calculator input -->
    <form @submit.prevent="submitForm">
      <label for="pclass">Passenger Class:</label>
      <select id="pclass" v-model="pclass">
        <option>First</option>
        <option>Second</option>
        <option>Third</option>
      </select>

      <label for="sex">Sex:</label>
      <select id="sex" v-model="sex">
        <option>Male</option>
        <option>Female</option>
      </select>

      <label for="age">Age:</label>
      <input type="number" id="age" v-model.number="age" min="0" max="100">

      <label for="fare">Fare ($):</label>
      <input type="number" id="fare" v-model.number="fare" min="0" max="500">

      <label for="traveledAlone">Traveled Alone:</label>
      <select id="traveledAlone" v-model="traveledAlone">
        <option>Yes</option>
        <option>No</option>
      </select>

      <label for="embarked">Embarked:</label>
      <select id="embarked" v-model="embarked">
        <option>Cherbourg</option>
        <option>Queenstown</option>
        <option>Southampton</option>
      </select>
      
      <button type="submit" class="cta-button">Submit</button>
    </form>
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
      embarked: 'Southampton'
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/submit-form', {
          pclass: this.pclass,
          sex: this.sex,
          age: this.age,
          fare: this.fare,
          traveledAlone: this.traveledAlone,
          embarked: this.embarked
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
}
</script>

<style>
.cta-button {
  padding: 15px 40px;
  font-size: 18px;
  background-color: #38a169; /* Green button color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1f9d55; /* Darker green on hover */
}
</style>
