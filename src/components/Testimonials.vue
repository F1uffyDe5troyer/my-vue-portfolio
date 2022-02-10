<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>Responsive testimonials section using only HTML & CSS</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
</head>
<body>
<section id="testimonials">
    <div v-if="testimonials.length">
    <div  v-for="testimonial of testimonials" :key="testimonial.id">
  <div class="testimonials">
    <div class="testimonial-inner">
      <div class="row">
        <div class="col">
          <div class="testimonial">
            <img :href="testimonials.img" alt="...">
            <div class="name">{{testimonial.full_name}}</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>{{testimonial.comment}}</p>
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
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
}

.testimonials
{
  padding: 40px 0;
  background: #000000;
  color: #ffffff;
  text-align: center;
}

.testimonial-inner
{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.border
{
  width: 160px;
  height: 5px;
  background: #6ab04c;
  margin: 26px auto;
}

.row
{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.col
{
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing:  border-box;
  padding: 15px;
}

.testimonial
{
  background: rgb(0, 0, 0);
  padding: 30px;
}

.testimonial img
{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.name
{
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}

.stars
{
  color: #f0932b;
  margin-bottom: 20px;
}

@media screen and (max-width: 960px)
{
  .col
  {
    flex: 100%;
    max-width: 80%;
  }
}
</style>