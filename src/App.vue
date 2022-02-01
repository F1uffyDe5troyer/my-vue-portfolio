<template>
  <Navbar />
  <Landing />
  <About />
  <WE />
  <Services />
  <Skills />
  <Projects />
  <Testimonials />
  <Contact />
  <Footer />
  <router-view/>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Landing from "@/components/Landing.vue";
  import About from "@/components/About.vue";
  import WE from "@/components/WE.vue";
  import Services from "@/components/Services.vue";
  import Skills from "@/components/Skills.vue";
  import Testimonials from "@/components/Testimonials.vue";
  import Projects from "@/components/Projects.vue";
  import Contact from "@/components/Contact.vue";
  import Footer from "@/components/Footer.vue";



  export default {
    name: "App",
    components: {
      Navbar,
      Landing,
      About,
      WE,
      Services,
      Skills,
      Testimonials,
      Projects,
      Contact,
      Footer,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
