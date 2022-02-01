<template>
  <body>
    <!-- Home scrohttps://i.postimg.cc/HLmdvZ85/Dalarno.jpgll button -->
 

   <!-- home section start -->
<div class="landing">
    <section class="home" id="home">
        <div class="max-width">
        <!-- socials icons -->
            <div class="social-menu">
                <ul>
                  <li><a href="https://www.facebook.com/dalarno.vanrooi.52" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/ig_f1uffyde5troyer/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                  <!-- <li><a href="https://app.netlify.com/teams/f1uffyde5troyer/overview" target="_blank"><img  class="image12345-icon" src="images/icons/netlify-icon.png"></i></a></li> -->
                  <li><a href="https://github.com/F1uffyDe5troyer" target="_blank"><i class="fa fa-github" target="_blank"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/dalarno-van-rooi-224222219/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Dalarno Van Roo<span class="letter-i">i</span></div>
                <div class="text-3">And I'm an
                     <span class="typing-demo">
                      Aspiring Developer.
                     </span>
                </div>
                <a href="#contact">Hire me?</a>
             </div>     
          </div>
    </section>
</div>
  </body>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 45px;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>