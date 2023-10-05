import {
    FERRAMENTA, ARTIGO, ASTRONOMIA, PROJETO
} from './tags'

export default [
    {
        title: "Simulador de cor estelar",
        subtitle: "O Simulador Solar de cores estelar é uma ferramenta que utiliza dados relacionados à temperatura e luminosidade de estrelas para determinar sua cor.",
        date: new Date('2023-09-24'),
        tags: [FERRAMENTA, ASTRONOMIA],
        image: "sun-nasa.jpg",
        link: "simulador-solar",
        component: () => import('./components/SimuladorSolar.vue'),
    },
]
