<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import PostManager from '@/content/PostManager'

  const post = PostManager.getRegisteredPost()[0]
  const number = PostManager.getRegisteredPost().length
</script>

<template>
  <header>
    <section class="header">
      <div class="logo">
        <img alt="Logo" src="@/assets/logo-menu.png" />
      </div>

      <nav class="menu">
        <RouterLink to="/">Atualizações</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </nav>
    </section>

    <section v-if="post" class="last-news">
      <p><small>ÚLTIMA ATUALIZAÇÃO</small></p>
      <h1>
        <a :href="post.link">
          <b>#{{number}}. {{post.title}}</b>
        </a>
      </h1>
    </section>
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
    margin-bottom: 75px;
  }

  section.header {
    display: flex;
    align-items: center;
  }

  section.header .logo {
    width: 250px;
    margin-right: 50px;
  }

  section.header .logo img {
    width: 100%;
  }

  section.header .menu a {
    margin-inline: 15px;
  }

  section.last-news {
    padding: 70px 2em;
    width: 80%;
    margin: 20px auto;
  }

  section.last-news h1 {
    font-size: 38px;
  }

  section.content {
    padding-inline: 125px;
  }
</style>