<template>
<label>
  <input type="checkbox">
  <span class="menu">
    <span class="hamburger"></span>
  </span>
  <ul>
    <h1 class="burger-h1">Where to?</h1>
    <li>
      <a href="#Home">Home</a>
    </li>
    <li>
      <a href="#About">About</a>
    </li>
    <li>
      <a href="#Skills">Skills</a>
    </li>
     <li>
      <a href="#Projects">Projects</a>
    </li>
     <li>
      <a href="#Testimonials">Testimonials</a>
    </li>
     <li>
      <a href="#Contact">Contact</a>
    </li>
  </ul>
</label>

<section id="Home">
  <div class="max-width">
  <div class="home-content">
    <div class="text-1">Hello, my name is</div>
    <div class="text-2">Dalarno Van Roo<span class="letter-i">i</span></div>
    <div class="text-3">And I'm a <span class="line-1 anim-typewriter">Aspiring Dev</span></div>
    <button class="button-24" role="button"><a href="#Contact">Hire me</a></button>

      <div class="social-menu">
                <ul>
                  <li><a href="https://www.facebook.com/dalarno.vanrooi.52" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/ig_f1uffyde5troyer/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                  <!-- <li><a href="https://app.netlify.com/teams/f1uffyde5troyer/overview" target="_blank"><img  class="image12345-icon" src="images/icons/netlify-icon.png"></i></a></li> -->
                  <li><a href="https://github.com/F1uffyDe5troyer" target="_blank"><i class="fa fa-github" target="_blank"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/dalarno-van-rooi-224222219/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                </ul>
    </div>
  </div>     
  </div>
</section>

<section id="About">

</section>

<section id="Skills">

</section>

<section id="Projects">

</section>

<section id="Testimonials">

</section>
<section id="Contact">

</section>
</template>

<script>
export default {
  name: 'HelloWorld',
}
    // var typed = new typed(".typing", {
    //     strings: ["YouTuber", "Developer", "Musician", "Designer", "Freelancer",  "Gamer",  "Memer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
}

label .hamburger {
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background: rgb(255, 29, 29);
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

label .hamburger:after, label .hamburger:before {
  -webkit-transition: .5s ease-in-out;
  transition: .3s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
}

label .hamburger:before { top: -10px; }

label .hamburger:after { bottom: -10px; }

label input { display: none; }

label input:checked + .menu {
  box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
  border-radius: 0;
}

label input:checked + .menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

label input:checked + .menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
}

label input:checked + .menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

label input:checked + .menu + ul { opacity: 1; }

label .menu {
  color: black;
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background: #FFF;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  box-shadow: 0 0 0 0 rgb(0, 0, 0), 0 0 0 0 #FFF;
  cursor: pointer;
}

label ul {
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: .25s 0s ease-in-out;
  transition: .25s 0s ease-in-out;
}

label a {
  margin-bottom: 1em;
  display: block;
  color: #000;
  text-decoration: none;
}

.home-content {
  margin-top: 10rem;
  margin-left: -10rem;
}
.home-content .text-2{
        font-size: 70px;
    }
.home-content .text-3{
        font-size: 35px;
    }
.home-content a{
        font-size: 23px;
        padding: 10px 30px;
    }
.home-content .text-1{
    font-size: 27px;
    margin-left: -300px;
}
.home-content .text-2{
    font-size: 75px;
    font-weight: 600;
    margin-left: -50px;
    font-style: italic;
}
.home-content .text-3{
    font-size: 40px;
    margin-left: -120px;
}
.home-content .text-3 span{
    color: crimson;
    font-weight: 500;
}
.max-width{
        max-width: 930px;
    }

.burger-h1 {
  margin-top: -100rem;
}

/* home icons */ 
.social-menu ul {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    display: flex;
    z-index: 100;
}

.social-menu ul li {
    list-style: none;
    margin: 0 10px;
    z-index: 100;
}
.social-menu ul li .fa {
    color: #000000;
    font-size: 25px;
    line-height: 50px;
    transition: .5s;
}
.social-menu ul li .fa:hover {
    color: #ffffff;
}
.social-menu ul li a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    text-align: center;
    transition: 0.5s;
    transform: translate(0,0px);
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
}
.social-menu ul li a:hover {
    transform: rotate(0deg) skew(0deg) translate(0, -10px);
}
.social-menu ul li:nth-child(1) a:hover {
    background-color: #3b5999;
}
.social-menu ul li:nth-child(2) a:hover {
    background-color: #ff6ff3;
}
.social-menu ul li:nth-child(3) a:hover {
    background-color: #e4405f;
}
.social-menu ul li:nth-child(4) a:hover {
    background-color: #000000;
}
.social-menu ul li:nth-child(5) a:hover {
    background-color: #0077B5;
}

.imgage12345-icon{
    display: inline-block;
    border-radius: 250px;
}

.button-24 {
  margin-top: 10rem;
  margin-left: -10rem;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #FF4742;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #ffffff;
}

.button-24:active {
  opacity: .5;
}


</style>


