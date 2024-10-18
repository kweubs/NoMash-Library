<template>
    <pre>{{ jsondata }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const jsondata = ref(null);
const error = ref(null);

const getBookCountAPI = async () => {
    try {
        const response = await axios.get('https://us-central1-week7-kt.cloudfunctions.net/countBooks');
        jsondata.value = response.data;
        error.value = null;
    } catch (err) {
        console.error('Error fetching book count:', err);
        error.value = err;
        jsondata.value = null; 
    }
};

onMounted(getBookCountAPI);
</script>
