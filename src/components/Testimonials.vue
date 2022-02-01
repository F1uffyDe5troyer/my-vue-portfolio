<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>Responsive testimonials section using only HTML & CSS</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
</head>
<body>
<section id="testimonials">
  <div class="testimonials">
    <h2 class="title">About me</h2>
    <div class="testimonial-inner">
      <div class="border"></div>
      
      <div class="row">
        <div class="col">
          <div class="testimonial">
            <img src="https://i.postimg.cc/5ybsZzqs/Dale.jpg" alt="">
            <div class="name">John Waddrob</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
          </div>
        </div>
        
        <div class="col">
          <div class="testimonial">
            <img src="https://i.postimg.cc/4xPsMv6S/Alex-Sexwale.jpg" alt="">
            <div class="name">John Waddrob</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
          </div>
        </div>
        
        <div class="col">
          <div class="testimonial">
            <img src="https://i.postimg.cc/3w0fpYxF/Cameron.jpg" alt="">
            <div class="name">John Waddrob</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
          </div>
        </div>

        <div class="col">
          <div class="testimonial">
            <img src="https://i.postimg.cc/FzVBRpHt/Amaarah.jpg" alt="">
            <div class="name">John Waddrob</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
          </div>
        </div>
        
        <div class="col">
          <div class="testimonial">
            <img src="https://i.postimg.cc/kMv1Wjqz/Sergio.jpg" alt="">
            <div class="name">John Waddrob</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</template>

<script>
export default {

}
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
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