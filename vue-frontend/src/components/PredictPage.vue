<template>
  <div>
    <h1>Predict Page</h1>
    

    <!-- Combined form with dropdowns and sliders -->
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="dropdown1">Passenger Class</label>
        <select id="dropdown1" v-model="dropdown1" required>
          <option disabled value="">Please select one</option>
          <option value="Option 1A">First</option>
          <option value="Option 1B">Second</option>
          <option value="Option 1C">Third</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dropdown2">Sex</label>
        <select id="dropdown2" v-model="dropdown2" required>
          <option disabled value="">Please select one</option>
          <option value="Option 2A">Male</option>
          <option value="Option 2B">Female</option>
          <option value="Option 2C">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dropdown3">Embarked</label>
        <select id="dropdown3" v-model="dropdown3" required>
          <option disabled value="">Please select one</option>
          <option value="Option 3A">Cherbourg</option>
          <option value="Option 3B">Queenstown</option>
          <option value="Option 3C">Southampton</option>
        </select>
      </div>

      <div class="form-group">
        <label for="slider1">Age (1-100):</label>
        <input type="range" id="slider1" v-model.number="slider1" min="1" max="50" required>
        <span>{{ slider1 }}</span>
      </div>

      <div class="form-group">
        <label for="slider2">Fare $ (1-1000):</label>
        <input type="range" id="slider2" v-model.number="slider2" min="1" max="50" required>
        <span>{{ slider2 }}</span>
      </div>

      <button type="submit" class="cta-button">Submit</button>
    </form>
    <router-link to="/"><button class="cta-button">Back 🤛🏼</button></router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dropdown1: '',
      dropdown2: '',
      dropdown3: '',
      slider1: 1,
      slider2: 1
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/submit-form', {
          dropdown1: this.dropdown1,
          dropdown2: this.dropdown2,
          dropdown3: this.dropdown3,
          slider1: this.slider1,
          slider2: this.slider2
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
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
}

.cta-button:hover {
  background-color: #1f9d55; /* Darker green on hover */
}
</style>
