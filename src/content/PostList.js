import {DESENVOLVIMENTO, ESPAÇO, PROJETO} from './tags'

export default [
    {
        title: "Teste 12% do Test",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque orci eu felis viverra malesuada. Nulla semper finibus lorem rutrum sagittis. Maecenas sollicitudin, arcu ac tristique molestie, augue sem hendrerit enim, id tristique nulla nisi non enim. Nulla interdum, lorem a rutrum placerat, purus enim lacinia turpis, ut commodo justo quam placerat tellus. Mauris sagittis lacus eget ante tincidunt sollicitudin. Sed eget dolor sodales, lobortis erat non, pellentesque velit. Nunc ac ipsum ipsum. Integer sodales euismod tortor. Vivamus rhoncus, elit vitae commodo efficitur, orci elit condimentum odio, eget iaculis diam ex eu lorem. Duis scelerisque, ligula non dictum vulputate, turpis tortor viverra odio, viverra faucibus nisi nunc in diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel egestas odio, et eleifend ligula. Donec a neque viverra, eleifend dui non, congue eros. Aenean non nunc velit.",
        date: new Date('2022-08-15'),
        tags: [DESENVOLVIMENTO],
        image: "teste.jpeg",
        link: "teste",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test",
        subtitle: "PostTest1",
        date: new Date('2022-08-15'),
        tags: [DESENVOLVIMENTO],
        image: "teste.jpeg",
        link: "teste1",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test",
        subtitle: "PostTest2",
        date: new Date('2022-08-15'),
        tags: [ESPAÇO],
        image: "teste.jpeg",
        link: "teste2",
        component: () => import('./components/PostTest.vue'),
    },
    {
        title: "Teste 12% do Test",
        subtitle: "PostTest3",
        date: new Date('2022-08-15'),
        tags: [PROJETO],
        image: "teste.jpeg",
        link: "teste3",
        component: () => import('./components/PostTest.vue'),
    }
]
