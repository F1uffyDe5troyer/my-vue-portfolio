<template>
<section id="projects">
  <h1>Projects</h1>
  <div class="projects" v-if="projects.length">
    <div
      v-for="project of projects"
      :key="project.id"
      class="projects"
    >
        <div class="container">
    <div class="cards grid-row">
      <div class="card">
        <div class="card-top">
          <img src="img1.jpg" alt="Blog Name">
        </div>
        <div class="card-info">
          <h2>JavaScript Quote Generator</h2>
          <span class="date">Monday, Jan 20, 2021</span>
          <p class="excerpt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div class="card-bottom flex-row">
          <a href="#" class="read-more">Read Full Blog</a>
          <a href="#" class="button btn-yellow">Blog</a>
        </div>
      </div>
    </div>   
      </div>
    </div>
  </div>
<div v-else>
    <p>Loading...</p>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("https://node-projects-and-testimonial.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	background: #457fb4;
	font-family: "Roboto", sans-serif;
	display: flex;
	height: 100vh;
}

</style>
