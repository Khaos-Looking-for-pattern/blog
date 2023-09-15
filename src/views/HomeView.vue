<script setup>
import PostManager from '@/content/PostManager'
import Post from '@/components/Post.vue'
import Bagde from '@/components/Bagde.vue'
import { reactive } from 'vue'

const state = reactive({ posts: PostManager.getRegisteredPost() })
const allPosts = state.posts

const selectTag = (tag) => {
  state.posts = !tag ? allPosts : allPosts.filter((post) => post.tags.includes(tag))
}
</script>

<template>
  <main>
    <header>
      <h1>Atualizações</h1>

      <Bagde :selectTag="selectTag" />
    </header>

    <section>
      <Post v-for="post in state.posts" :post="post" :key="post.link" />
      <div v-if="state.posts.length === 0">
        <p>Não posts disponíveis</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    color: var(--primary-color);
  }

  header {
    border-bottom: 1px solid var(--secondary-color);
    padding-bottom: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h1 {
    font-size: 2.5em;
  }

  @media (min-width: 850px) {
    header {
      flex-direction: row;
      align-items: center;
      gap: 45px;
    }

    h1 {
      font-size: 2em;
    }
  }
</style>