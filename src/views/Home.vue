<template>
  <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id" class="container">
          <FirstProject :project="project"/>
      </div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import FirstProject from '../components/FirstProject.vue'

export default {
    components: {
        FirstProject
    },
    data(){
        return {
            toggle: false,
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
  }


}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid black;
  }
  h3 {
    cursor: pointer;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }

  .project.complete {
      border-left: 4px solid yell;
  }

  .project.complete .tick{
      color: #00ce89
  }
</style>