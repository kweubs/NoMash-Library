<template>
    <div id="app">
      <h1>Book Counter</h1>
      <button @click="getBookCount">Get Book Count</button>
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            count: null,
            error: null,
        }
    },
    methods:  {
        async getBookCount() {
            try {
                const response = await axios.get("https://us-central1-week7-kt.cloudfunctions.net/countBooks");
                this.count = response.data.count;
                this.error = null;

            } catch (error){
                console.error('Error fetching book count: ', error);
                this.error = error;
                this.count = null;
            }
        },

        async getBookCountAPI() {
            try {
                const response = await axios.get("https://us-central1-week7-kt.cloudfunctions.net/countBooks");
                this.jsondata = response.data
                this.error = null;

            } catch (error){
                console.error('Error fetching book count: ', error);
                this.error = error;
                this.count = null;
            }
        }
    }
};

// export default: exports vue component 
// data(){} function that returns an object representing the component's reactive data
// return{} sets initiate state for variables 
// methods: functions related to component are defined 
// async get book count: defines asynchronous method which will be triggered to fetch book count from API when user clicks button
// try: attempt the API request 
// this.count = response from the API stored in the response data
// AXIOS: popular JS library used to make http requests from the browser or node.js. allows user to perform asynchronous requests,
//GET, POST, PUT, DELETE

//
</script> 

  