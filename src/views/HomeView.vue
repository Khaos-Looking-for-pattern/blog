<script setup>
import PostManager from '@/content/PostManager'
import tags from '@/content/tags'
import Post from '@/components/Post.vue'

const posts = PostManager.getRegisteredPost()
</script>

<template>
  <main>
    <header>
      <h1>Atualizações</h1>

      <div>
        <p>asdsada</p>
        <p>asdsada</p>
        <p>asdsada</p>
        <p>asdsada</p>
      </div>
    </header>

    <section>
      <Post v-for="post in posts" :post="post" :key="post.link" />
    </section>
  </main>
</template>

<style scoped>
    main {
      color: var(--primary-color);
    }

    header {
      border-bottom: 1px solid var(--secondary-color);
      margin-bottom: 25px;
    }

    h1 {
      font-size: 2em;
    }
</style>