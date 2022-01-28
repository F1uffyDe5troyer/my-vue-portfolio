<template>
<head>
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
</head>

<body>
    <section class="home" id="Home">
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

    <!-- about section start -->
<section class="about" id="About">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/About/Dalarno.jpg" alt="">
                </div>
                <div class="column right">
                    <div class="text">I'm Dalarno and I'm a <span class="typing-2"></span></div>
                    <p class="about-p">HI! As you might have noticed my name is Dalarno Van Rooi, I am an Aspiring Developer who resides in the city of Cape Town. I've always been facinated with Developement whether in Application or Web. I am as of September 2021 learning to code and hope to make something out of it, if not.. I will continue and make it a hobby.</p>
                    <a href="Dalarno CV.pdf" target="_blank" download="Dalarno CV.pdf">Download CV</a>
                </div>
            </div>
        </div>
</section>

    <!-- skills section start -->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My skills & experiences.</div>
                    <p>Here you can view a summary of my proficiency in the various Programs languages.</p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>35%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>20%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>1%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>0%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>20%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- skills section start -->
    <section class="skills" id="Testimonial">
        
            <!-- start testimonials -->
<div class="testim">
  <div class="container">
    <h2>Testimonials</h2>
      <div class="testim-content">
        
      <div class="testim-box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
        <div class="testim-box-content">
         <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="">
          <h3>Mahmoud Mohamed</h3>
          <p>FrontEnd Developer</p>
        </div>
      </div>
        <div class="testim-box">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
          <div class="testim-box-content">
            <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="">
            <h3>Mahmoud Mohamed</h3>
            <p>FrontEnd Developer</p>
          </div>
        </div>
          <div class="testim-box">
  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
            <div class="testim-box-content">
              <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="">
              <h3>Mahmoud Mohamed</h3>
              <p>FrontEnd Developer</p>
            </div>
          </div>

        </div>
  
</div>
<!-- end testimonils -->
        </div>
    </section>

<section id="Testimonials">

</section>
<section id="Contact">

</section>
</body>
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
  user-select: none;
}


label a {
  margin-bottom: 1em;
  display: block;
  color: rgb(236, 0, 0);
  text-decoration: none;
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
  box-shadow: 0 0 0 100vw rgb(255, 255, 255), 0 0 0 100vh #FFF;
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
  right: -160px;
  top: 170px;
  z-index: 200;
  width: 280px;
  height: 260px;
  background: crim;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  box-shadow: 0 0 0 0 crimson, 0 0 0 0 #FFF;
  cursor: pointer;
}

label ul {
  color: black;
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

section{
    padding: 100px 0;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
.about, .services, .skills, .teams, .contact,footer, .WorkEducation{
    font-family: 'Poppins', sans-serif;
}
.about .about-content,
.services .serv-content,
.skills .skills-content,
.contact .contact-content,
.WorkEducation
{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.home-content {
  margin-top: 7rem;
  margin-left: -70rem;
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

.letter-i {
  color: crimson;
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

.scroll-up-btn{
    position: fixed;
    height: 45px;
    width: 42px;
    background: crimson;
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}
.scroll-up-btn.show{
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
}
.scroll-up-btn:hover{
    filter: brightness(90%);
}

/* about section styling */
.about{
    color:rgb(0, 0, 0);
    background: rgb(255, 255, 255);
}
.about-p{
    color: rgb(0, 0, 0);
}
.about .title::before{
    background: rgb(0, 0, 0);
}

.about .title::after{
    content: "who i am";
    background-color: rgb(255, 255, 255); 
}
.about .about-content .left{
    width: 45%;
}
.about .about-content .left img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 100px;
}
.about .about-content .right{
    width: 55%;
}
.about .about-content .right .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
    color: crimson;
}
.about .about-content .right p{
    text-align: justify;
}
.about .about-content .right a{
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;
}
.about .about-content .right a:hover{
    color: crimson;
    background: none;
}

/* skills section styling */
.skills{
    color:rgb(255, 255, 255);
    background: #111;
}

.skills .title::after{
    content: "my journey";
    background-color: #111;
}

.skills .title::before{
    background: rgb(255, 255, 255);
}

.skills .skills-content .column{
    width: calc(50% - 30px);
}
.skills .skills-content .left .text{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.skills .skills-content .left p{
    text-align: justify;
}
.skills .skills-content .left a{
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;
}
.skills .skills-content .left a:hover{
    color: crimson;
    background: none;
}
.skills .skills-content .right .bars{
    margin-bottom: 15px;
}
.skills .skills-content .right .info{
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
}
.skills .skills-content .right span{
    font-weight: 500;
    font-size: 18px;
}
.skills .skills-content .right .line{
    height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
}
.skills .skills-content .right .line::before{
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: crimson;
}
.skills-content .right .html::before{
    width: 40%;
}
.skills-content .right .css::before{
    width: 20%;
}
.skills-content .right .js::before{
    width: 1%;
}
.skills-content .right .php::before{
    width: 0%;
}
.skills-content .right .mysql::before{
    width: 20%;
}

:root{
    --main-color:#6ee9f5;
    --secound-color:#1b2b41;
}
body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.container{
    width: 80%;
    margin: auto;
}

/* start testimonails */
.testim{
  position: relative;
  padding: 80px 60px;
  display: inline-block;
}
.testim h2{
  color: var(--secound-color);
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
}
.testim::before{
  position: absolute;
  content: "";
  width: 50%;
  top: 0;
  left: 0;
  background-color: crimson;
  height: 100%;
  z-index: -1;
    }

.testim::after{
  position: absolute;
  content: "";
  width: 50%;
  top: 0;
  right:  0;
  background-color: crimson;
  height: 100%;
    }
    
.testim-content{
position: relative;
display: flex;
justify-content: space-around;
gap: 30px;

}

.testim-box{
z-index: 2;
background-color: var(--secound-color);
padding: 20px 30px;

}



.testim-box-content img{
  top: -10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-right: 30px;
  position: relative;

}

.testim-content h3{
  color: #fff;
  font-size: 1.3rem;
  }
  .testim-box > p{
    color: rgb(209, 194, 194);
    font-style: italic;
    padding-bottom: 20px;
  }
.testim-box-content p{
color: var(--main-color);
}
/* endtestimonails */



</style>


