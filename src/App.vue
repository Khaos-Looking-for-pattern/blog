<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import PostManager from '@/content/PostManager'

  const post = PostManager.getRegisteredPost()[0]
  const number = PostManager.getRegisteredPost().length
</script>

<template>
  <main class="app">
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

    <footer>
      <div class="logo">
        <img alt="Logo" src="@/assets/logo-menu.png" />
      </div>

      <h3>Dúvidas ou sugestões?</h3>
      <p>Para saber mais, dar sugustões ou doações, entre em contato conosco</p>

      <a href="https://wa.me/5567993369450">
        <button class="contact-button">CONTATAR</button>
      </a>
    </footer>
  </main>
</template>

<style scoped>
  header, footer {
    background: var(--primary-color);
    color: white;
    padding: 0.5em;
  }

  header {
    margin-bottom: 50px;
  }

  section.header {
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    align-items: center;
  }

  :is(section.header, footer) .logo {
    display: block;
    width: 250px;
    margin: 10px auto ;
  }

  :is(section.header, footer) .logo img {
    width: 100%;
  }

  section.header .menu {
    flex: 0 1 80%;
  }

  section.header .menu :is(a, span) {
    margin-inline: 15px;
  }

  section.last-news {
    padding: 0px 2em;
    width: 80%;
    margin: 20px auto;
  }

  section.last-news h1 {
    font-size: 26px;
  }

  section.content {
    margin-inline: 40px;
  }

  footer {
    text-align: center;
    margin-top: 75px;
    padding-bottom: 4em;
  }

  .contact-button {
    background-color: var(--tertiary-color);
    padding: 15px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    margin-top: 25px;
    font-size: 10px;
    border: 0px;
    cursor: pointer;
  }

  @media (min-width: 850px) {
    header, footer {
      border-radius: 20px;
      padding: 2em;
    }

    header {
      margin-bottom: 75px;
    }

    section.header {
      flex-direction: row;
      padding-bottom: 0rem;
    }

    section.last-news {
      padding: 70px 2em;
    }

    section.last-news h1 {
      font-size: 38px;
    }

    main.app {
      padding: 2rem 2rem 5rem;
    }

    section.content, footer {
      margin-inline: 105px;
    }

    footer {
      margin-top: 175px;
    }
  }
</style>