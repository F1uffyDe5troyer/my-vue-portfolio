<template>
      <!-- Projects Section -->

    <section class="projects" id="projects">
        <div class="max-width">
            <h2 class="title">My Projects</h2>
            <div class="projects-content">
                    <div class="button-container">
                      <button onclick="filterCards('All')">All</button>
                      <button onclick="filterCards('HTML/CSS')">HTML/CSS</button>
                      <button onclick="filterCards('Python')">Python</button>
                      <button onclick="filterCards('JavaScript')">JavaScript</button>
                    </div>
                    
            </div>
            <div class="project-container"></div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>