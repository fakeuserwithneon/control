<template>
  <form @submit.prevent="handleSubmit" class="top">
      <label>Title:</label>
      <input type="text" v-model="title" required>
      <label>Link:</label>
      <input type="text" v-model="link" required>
      <label>Details:</label>
      <textarea v-model="details" required></textarea>
      <button>Edit project</button>
  </form>
</template>

<script>
import { projectFirestore } from '../firebase/config'


export default {
    props: ['id'],
    data(){
        return {
            title: '',
            link: '',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id,
            project: null
        }
    },
    mounted(){
        const load = async (id) => {
      try {
        const res = await projectFirestore.collection('control').doc(id).get()
        
        this.project = { ...res.data() }
        this.title = this.project.title
        this.link = this.project.link
        this.details = this.project.details
      }
      catch(err){
        console.log(err)
      }

    }

    load(this.id)
    },

    methods: {
        async handleSubmit() {
            let project = {
                title: this.title,
                link: this.link,
                details: this.details
            }

            const res = await projectFirestore.collection('control').doc(this.id).update(project)
            .then(() => this.$router.push('/admin'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
  .top{
    margin-top: 100px;
  }
</style>