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
    <h2>Pengalaman</h2>
    <p>Berikut beberapa project yang pernah saya buat</p>
    <div class="garis"></div>
    <div class="porto">
        <div class="isi-porto">
            <img src="@/assets/Porto 1.jpg" alt="">
            <div class="code">
            <h3>Bootstrap Web Layout</h3>
            <button><a href="https://github.com/HafidBuroiroh/Bootstrap-web">Get Code</a></button>
            </div>
        </div>
        <div class="isi-porto">
            <img src="@/assets/Porto 2.jpg" alt="">
            <div class="code">
            <h3>Sarpras TB Project</h3>
            <button><a href="https://github.com/HafidBuroiroh/Sarpras_TB">Get Code</a></button>
            </div>
        </div>
        <div class="isi-porto">
            <img src="@/assets/Porto 3.jpg" alt="">
            <div class="code">
            <h3>Duplicate Web Valorant</h3>
            <button><a href="https://github.com/HafidBuroiroh/Layout-web/tree/main/game%20landing%20page">Get Code</a></button>
            </div>
        </div>
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

.porto{
    display: block;
    margin-top: 10px;
}

.card>h2{
    font-size: 2rem;
    font-weight: 700;
}

.card>p{
    font-weight: 500;
}

.isi-porto{
    display: flex;
    font-size: 20px;
    width: 478px;
}

.isi-porto img{
    width: 200px;
    height: 100px;
}

.isi-porto h3{
    margin: auto 2rem;
    font-size: 1.2rem;
    font-weight: 500;
}

.isi-porto button{
     margin: auto 2rem;
     border-radius: 20px;
     border: 0;
     padding: 5px 10px;
     background-color: green;
}

.isi-porto button a{
    color: white;
    font-size: 10px;
}

.garis{
    width: 100%;
    display: block;
    height: 2px;
    background-color: #808080;
}



</style>