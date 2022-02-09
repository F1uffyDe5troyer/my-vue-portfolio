<template>
      <!-- contact section start -->
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Like what you've seen so far? Get in Touch!</div>
                    <div class="icons">
                        <div class="row">
                            <i class="fa fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Dalarno Van Rooi</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">12 Fortress street, Cape Town</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">Dalarnoricardomilago@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form @submit.prevent="handleSubmit" autocomplete="on" target="_blank" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" id="name" name="name" placeholder="Name" required v-model="name">
                            </div>
                            <div class="field email">
                                <input type="email" id="email" name="email" placeholder="Email" required v-model="email">
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required v-model="subject">
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Enter your message here..." required v-model="message"></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
    data() {
        return{
            name: "",
            email: "",
            subject: "",
            message: "",
    }
},
methods: {
    handleSubmit() {
        console.log(`form submitted`)
        console.log(this.name)
        console.log(this.email)
        console.log(this.subject)
        console.log(this.message)
    }
}
}
</script>

<style>

</style>