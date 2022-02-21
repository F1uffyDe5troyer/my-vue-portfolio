<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>Responsive testimonials section using only HTML & CSS</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Serif:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<section id="Testimonials">
  <div class="testimonial_bg">
  <h2 class="title">References</h2>
    <div v-if="testimonials.length">
    <div  v-for="testimonial of testimonials" :key="testimonial.id">
  <div class="teamWrapper">
    <div class="container">
      <!-- <p align="center">Something about our team</p> -->
      <div class="teamGrid">
        <div class="colmun">
          <div class="teamcol">
            <div class="teamcolinner">
              <div class="avatar"><img :src="testimonial.img"></div>
              <div class="member-name"> <h2 align="center">{{testimonial.full_name}}</h2> </div>
              <div class="member-info"><p align="center">{{testimonial.comment}}</p></div>
              <!-- <div class="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div> -->
              <div class="member-social"> 
                <ul class="social-listing">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  </div>
</section>
</body>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  mounted() {
    fetch("https://node-projects-and-testimonial.herokuapp.com/testimonials")
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.title {
  color: white;
  margin-top: 20px;
}
.testimonial_bg{
  background-color: rgb(0, 0, 0);
  align-items: center;
}

.teamGrid {
  display:flex;
  gap: 30px;
  justify-content: center;
  flex-wrap:wrap;
}

p {
    margin: 0;
    font-size: 18px;
    line-height: 24px;
    color: black;
}
a {
    color: crimson;
}
a:hover {
  color: black;
}
.teamWrapper {
  margin-top: 50px;
  display:flex;
  gap: 30px;
  justify-content: center;
  flex-wrap:wrap;
}
.container {
  --container: 1160px;
  max-width: var(--container);
  margin: auto;
}
.teamGrid {
    display: grid;
    grid-template-columns: 32.33% 32.33% 32.33%;
    column-gap: 1.5%;
    margin-top: 100px;
}
.avatar {
    position: absolute;
    left: 0;
    right: 0;
    top: -80px;
    text-align: center;
}
.teamcolinner {
    position: relative;
}
.avatar > img {
    width: 150px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid rgb(170 170 173/ 1);
    box-shadow: 0px 3px 10px 3px rgb(170 170 173 / 0.5);
}
.teamcolinner {
    position: relative;
    border: 1px dashed #ddd;
    min-height: 100px;
    background: #fff;
    z-index: 9;
}
.teamcol {
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    transition: transform 1s ease-in-out;
}
.teamcol:hover {
    transform: translateY(-30px);
    box-shadow: 0px 3px 10px 3px rgb(170 170 173 / 0.5);
    transition: transform 1s ease-in-out;
}
.teamcol:before {
    content: "";
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 0;
    background: -webkit-linear-gradient( crimson, crimson);
    border-top-right-radius: 10px;
    transition: width 1s ease-in-out;
}
.teamcol:after {
    content: "";
    width: 50%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: -webkit-linear-gradient( black, black);
    border-bottom-left-radius: 10px;
    transition: width 1s ease-in-out;
}
.teamcol:hover::before, .teamcol:hover::after {
    width: 100%;
    transition: width 1s ease-in-out;
}
.member-name {
    margin-top: 80px;
}
.member-info {
    padding: 10px 20px;
}
.social-listing {
    align-items: center;
    justify-content: center;
    display: flex;
    list-style: none;
    padding: 0;
}
.social-listing >li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #f4f5f7;
    border-radius: 50%;
    margin: 5px;
}
</style>