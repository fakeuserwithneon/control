<template>
  <Navbar />
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import { projectFirestore } from '../firebase/config'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    SingleProject,
    Navbar
  },
  data(){
    return{ 
      projects: []
    }
  },

  mounted(){
    const load = async () => {
      try {
        const res = await projectFirestore.collection('control')
        .orderBy('createdAt', 'desc')
        .get()
        
        this.projects = res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
      }
      catch(err){
        console.log(err)
      }
    }

    load()
  },

  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }
  }
}
</script>
