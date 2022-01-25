<template>
<nav>
    <div class="navbar">
      <div class="logo"><a href="#">DVR</a></div>
      <ul class="menu">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
      </ul>
    </div>
  </nav>
<section id="Home">
    <h1>Home Section</h1> 

  </section>
<section id="About">
    <h1>About Section</h1> 

  </section>
<section id="Skills">
    <h1>Skills Section</h1> 

  </section>
  <section id="Projects">
    <h1>Projects Section</h1> 

  </section>
<section id="Testimonials">
    <h1>Testimonial Section</h1> 

  </section>
<section id="Contact">
    <h1>Contact Section</h1> 

  </section>
<section id="Footer">
    <h1>Footer Section</h1> 

  </section>
  <div class="button">
    <a href="#Home"><i class="fas fa-arrow-up"></i></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
nav{
 position: fixed;
 left: 0;
 top: 0;
 width: 100%;
 height: 75px;
 background: #2980b9;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
nav .navbar{
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 100%;
 max-width: 90%;
 background: #2980b9;
 margin: auto;
}
nav .navbar .logo a{
  color: #fff;
  font-size: 27px;
  font-weight: 600;
  text-decoration: none;
}
nav .navbar .menu{
  display: flex;
}
.navbar .menu li{
  list-style: none;
  margin: 0 15px;
}
.navbar .menu li a{
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
section{
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #96c7e8;
  font-size: 70px;
}
#Home{
  background-color: #fff;
}
#About{
  background-color: #000000;
}
#Skills{
  background-color: #e6e6e6;
}
#Projects{
  background-color: rgb(0, 0, 0);
}
#Testimonials{
    background-color: #e6e6e6;
}
#Contact{
  background-color: #000000;
}
.button a{
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background: #2980b9;
  padding: 7px 12px;;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: black;
}

</style>
