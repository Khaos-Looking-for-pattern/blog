import {DESENVOLVIMENTO, ESPAÇO, PROJETO} from './tags'

// this is a stack of news, the first here it'll be the first in the page
export default [
    {
        title: "Teste 12% do Test 0",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque orci eu felis viverra malesuada. Nulla semper finibus lorem rutrum sagittis. Maecenas sollicitudin, arcu ac tristique molestie, augue sem hendrerit enim, id tristique nulla nisi non enim. Nulla interdum, lorem a rutrum placerat, purus enim lacinia turpis, ut commodo justo quam placerat tellus.",
        date: new Date('2022-08-15'),
        tags: [DESENVOLVIMENTO],
        image: "teste.jpeg",
        link: "teste",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test 1",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque orci eu felis viverra malesuada. Nulla semper finibus lorem rutrum sagittis. Maecenas sollicitudin, arcu ac tristique molestie, augue sem hendrerit enim, id tristique nulla nisi non enim. Nulla interdum, lorem a rutrum placerat, purus enim lacinia turpis, ut commodo justo quam placerat tellus.",
        date: new Date('2022-08-15'),
        tags: [DESENVOLVIMENTO],
        image: "teste.jpeg",
        link: "teste1",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test 2",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque orci eu felis viverra malesuada. Nulla semper finibus lorem rutrum sagittis. Maecenas sollicitudin, arcu ac tristique molestie, augue sem hendrerit enim, id tristique nulla nisi non enim. Nulla interdum, lorem a rutrum placerat, purus enim lacinia turpis, ut commodo justo quam placerat tellus.",
        date: new Date('2022-08-15'),
        tags: [ESPAÇO],
        image: "teste.jpeg",
        link: "teste2",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test 3",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque orci eu felis viverra malesuada. Nulla semper finibus lorem rutrum sagittis. Maecenas sollicitudin, arcu ac tristique molestie, augue sem hendrerit enim, id tristique nulla nisi non enim. Nulla interdum, lorem a rutrum placerat, purus enim lacinia turpis, ut commodo justo quam placerat tellus.",
        date: new Date('2022-08-15'),
        tags: [PROJETO],
        image: "teste.jpeg",
        link: "teste3",
        component: () => import('./components/PostTest.vue'),
    }
]