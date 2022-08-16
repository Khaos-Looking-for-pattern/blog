<script setup>
import { reactive } from 'vue'
import tags from '@/content/tags'
const {selectTag} = defineProps(['selectTag'])

const state = reactive({ tag: -1 })

const select = (index) => {
    state.tag = index
    selectTag(tags[index] || null)
}

</script>

<template>
    <div class="tag-container">
        <div :class="{ active: state.tag == -1 }" class="tag" @click="() => select(-1)">TODAS</div>
        <div :class="{ active: state.tag == index }" class="tag" v-for="(tag, index) in tags" :key="tag" @click="() => select(index)">
            {{tag.toUpperCase()}}
        </div>
    </div>
</template>

<style scoped>

.tag-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.tag-container .tag:first-child {
    border-radius: 5px 0px 0px 5px;
}

.tag-container .tag:last-child {
    border-radius: 0px 5px 5px 0px;
}

.tag-container .tag {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 6px;
    border: 1px solid #c7d4ff;
    cursor: pointer;
}

.tag-container .tag.active {
    border-color: var(--primary-color);
}

.tag-container .tag:hover {
    opacity: 0.9;
}

</style>