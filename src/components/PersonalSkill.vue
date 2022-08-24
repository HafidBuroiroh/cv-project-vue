<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="card">
    <h2>Personal Skill</h2>
    <h3>Dengan beberapa projek yang telah saya buat saya meiliki skill di beberapa tools diantaranya</h3>
    <div class="line-u"></div>
    <div class="logo">
      <img src="@/assets/html.png" alt="">
      <img src="@/assets/css.jpg" alt="">
      <img src="@/assets/figma.jpg" alt="">
      <img src="@/assets/laravel.png" alt="">
      <img src="@/assets/bootsrap.svg" alt="">
      <img src="@/assets/mysql.jpg" alt="">
    </div>
  </div>
</template>

<style>

.card{
  
  background-color: white;
  padding: 30px;
  margin: 4rem 5rem;
  border-radius: 10px;
  margin-left: -10px;
  box-sizing: border-box;
   height: 60vh;
}

.line-u{
  display: block;
  width: 100%;
  height: 2px;
  background-color: #808080;
  margin-top: 20px;
}

.logo{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.logo>img{
  width: 100px;
  height: 100px;
}




</style>