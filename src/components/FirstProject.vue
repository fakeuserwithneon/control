<template>
  <div class="project">
      <div class="actions">
          <h3 @click="this.toggle = !this.toggle">{{ project.title }}</h3>
          <div class="icons">
              <a :href="project.link" target="_blank"><span class="material-icons">download</span></a>
          </div>
      </div>
      <div class="details" v-if="toggle">
          <p>{{ project.details }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data(){
        return {
            toggle: false
        }
    }

}
</script>

<style scoped>
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
      border-left: 4px solid black;
  }

  .project.complete .tick{
      color: #00ce89
  }
</style>