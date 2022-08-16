<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <img alt="Logo" src="@/assets/logo.png" />
    </div>

    <nav class="menu">
      <RouterLink to="/">Atualizações</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
  </header>

  <section class="content">
    <RouterView />
  </section>
</template>

<style scoped>
  header {
    background: var(--primary-color);
    color: white;
    border-radius: 20px;
    padding: 2em;
    display: flex;
  }

  header .logo {
    width: 250px;
    margin-right: 50px;
  }

  header .logo img {
    width: 100%;
  }

  header .menu a {
    margin-inline: 15px;
  }

  section.content {
    padding-inline: 125px;
  }
</style>