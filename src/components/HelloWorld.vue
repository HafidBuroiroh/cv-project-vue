<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="black">{{ msg }}</h1>
    <h3>
      Web Developer
    </h3>
    <div class="contact">
    <a href="https://wa.me/6282111560284"><img class="icon" src="@/assets/telepon.png" alt=""></a>
    <a href="https://github.com/HafidBuroiroh"><img class="icon" src="@/assets/github.png" alt=""></a>
    <a href="https://www.instagram.com/fidverse/"><img class="icon" src="@/assets/instagram.jpg" alt=""></a>
    <a href="https://hafidburoiroh09@gmail.com"><img class="icon" src="@/assets/email.jpg" alt=""></a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.contact{
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.greetings h1,
.greetings h3 {
  display: block;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
