<template>
<Navbar />
  <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" v-model="title" required>
      <label>Link:</label>
      <input type="text" v-model="link" required>
      <label>Details:</label>
      <textarea v-model="details" required></textarea>
      <button>Add project</button>
      <div id="editor"></div>
  </form>
</template>

<script>
import { projectFirestore, timestamp } from '../firebase/config'
import Navbar from '../components/Navbar.vue'

export default {
    data(){
        return {
            title: '',
            link: '',
            details: ''
        }
    },
    components: {
      Navbar
    },
    methods: {
        async handleSubmit() {
            let project = {
                title: this.title,
                link: this.link,
                details: this.details,
                createdAt: timestamp()
            }

            const res = await projectFirestore.collection('control').add(project)
            .then(() => this.$router.push('/admin'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
 form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: black;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  }
</style>