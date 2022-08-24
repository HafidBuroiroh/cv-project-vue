<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <header>
    <div class="line"></div>
    <img alt="Vue logo" class="logo" src="@/assets/hafid.jpg" width="200" height="200" />

    <div class="wrapper">
      <HelloWorld msg="Hafid Buroiroh" />

      <nav>
        <RouterLink to="/">Profile</RouterLink>
        <RouterLink to="/skill">Personal Skill</RouterLink>
        <RouterLink to="/pengalaman">Experience</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: white;
  padding: 20px;
  box-shadow: 5px 5px 20px #80808080;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  /* border: 1px solid #80808080; */
}

.logo {
  display: block;
  margin: 20px auto;
  border-radius: 200px;
  
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  
}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 15px;
  font-weight: 500;
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: block;
    text-align: center;

  }

  .logo {
    margin: auto;
  }

  header .wrapper {
    display: block;
    text-align: center;
  }

  nav {
    text-align: left;
    /* margin-left: 1rem; */
    /* font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem; */
  /* }
} */ 
</style>
