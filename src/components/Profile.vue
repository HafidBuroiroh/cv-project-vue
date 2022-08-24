<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
<div class="text">
  <div class="h-text">
<h2>Tentang Saya</h2>
  <p>Saya adalah seorang siswa SMK Taruna Bhakti di jurusan Rekayasa Perangkat Lunak. Saya memiliki pengalaman dengan Backend Development dan juga kerja team. Beberapa tools yang saya bisa mencangkup MySql, CSS, Laravel Framework dan lainnya.</p>
  <div class="line-x"></div>
  </div>
  <div class="l-text">
    <h2>Keahlian Saya</h2>
    <div class="isi">
      <div class="block">
      <h3>Web Development</h3>
      <p>Saya sudah mengerjakan cukup banyak projek saat disekolah, dengan team ataupun perorangan</p>
      </div>
      <div class="line-y"></div>
      <div class="block">
      <h3>Problem Resolving</h3>
      <p>Saya bisa memecahkan masalah dengan cepat dengan pertimbangan yang matang</p>
      </div>
    </div>
  </div>
  </div>
</template>

<style>

.text{
  
  background-color: white;
  padding: 30px;
  margin: 4rem 5rem;
  border-radius: 10px;
  margin-left: -10px;
  height: 60vh;
}

.text>h3{
  font-size: 15px;
  font-weight: 600;
}

.block>h3{
  font-size: 18px;
  font-weight: 600;
  color: rgb(1, 137, 1);
}

.block{
  display: block;
  text-align: center;
}

.block>p{
  font-size: 13px;
  margin-top: 10px;
  font-weight: 500;
}

.isi{
  display: flex;
  gap: 2.5rem;
  margin-top: 20px;
}

.line-y{
  display: block;
  width: 2px;
  height: 20vh;
  background-color: #808080;
}

.line-x{
  display: block;
  width: 100%;
  height: 2px;
  background-color: #808080;
  margin-top: 10px;

}


.h-text{
  margin-bottom: 20px;
}

.h-text>p{
  font-weight: 500;
}

h2{
  font-size: 20px;
  font-weight: 500;
  color: green;
}

/* .text>p{
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
} */

/* .flex{
  display: flex;
} */

.basis{
  display: block;
}

.contact1{
  display: flex;
}
.contact2{
  display: flex;
}

.icon{
  width: 20px;
  height: 20px;
}


</style>