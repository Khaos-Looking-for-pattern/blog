<script setup>
const {post} = defineProps(['post'])

</script>

<template>
    <article class="post">
        <div class="content-container">
            <header>
                <p><span class="tag">{{post.tags.join(', ')}}</span> {{post.date.toLocaleDateString()}}</p>
            </header>
            <section>
                <a :href="post.link">
                    <h1><b>{{post.title}}</b></h1>
                    <p>{{post.subtitle}}</p>
                </a>
            </section>
        </div>
        <div class="img-container">
            <a :href="post.link">
                <img :src="post.image" />
            </a>
        </div>
    </article>
</template>

<style scoped>
    article.post {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--secondary-color);
        margin-bottom: 100px;
        padding-bottom: 25px;
    }

    .content-container {
        width: 70%;
        margin-right: 25px;
    }

    .content-container header {
        margin-bottom: 10px;
    }

    .img-container {
        width: 30%;
    }

    .img-container img {
        width: 100%;
        border-radius: 10px;
    }

    h1 {
        font-size: 2em;
        line-height: 32px;
    }

    span.tag {
        background-color: var(--secondary-color);
        padding: 6px;
    }
</style>