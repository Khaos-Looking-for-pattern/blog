<script setup>

import { ref, onMounted  } from 'vue'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const temperature = ref(7000)

onMounted(() => {
  let width, height

  if (window.innerWidth < 900) {
    width = window.innerWidth / 2.65
    height = window.innerWidth / 2.65
  } else {
    width = 600;
    height = 600;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById('simulator').appendChild(renderer.domElement);

  let sun

  var loader = new GLTFLoader();
  loader.load('sun.glb', function (gltf) {
    sun = gltf.scene.children[0];
    sun.scale.set(15, 15, 15);
    sun.position.y = 0;
    sun.position.x = 0;
    sun.position.z = 0;

    scene.add(sun);
  });

  camera.position.z = 15;

  let currentTemperature = temperature.value

  function animate() {
    requestAnimationFrame(animate);

    if (currentTemperature != temperature.value && sun) {
      if (temperature.value > 3e4) {
        sun.material.emissive.r = 0
        sun.material.emissive.g = 0.125
        sun.material.emissive.b = 1000
      } else if (temperature.value > 1e4) {
        sun.material.emissive.r = 400
        sun.material.emissive.g = 400
        sun.material.emissive.b = 400
      } else if (temperature.value > 5e3) {
        sun.material.emissive.r = 1
        sun.material.emissive.g = 1
        sun.material.emissive.b = 1
      } else if (temperature.value > 2.5e3) {
        sun.material.emissive.r = 1
        sun.material.emissive.g = 0.5
        sun.material.emissive.b = 0
      } else {
        sun.material.emissive.r = 100000
        sun.material.emissive.g = 0.15
        sun.material.emissive.b = 0
      }

      currentTemperature = temperature.value
    }

    if (sun) {
      sun.rotation.x += 0.0005;
      sun.rotation.y += 0.0005;
    }

    renderer.render(scene, camera);
  }

  animate();
})

</script>

<template>
  <main class="post-container">
    <h1 class="title">Simulador solar de Hertzsprung-Russell</h1>
    <p>
      O Simulador Solar de cores estelar é uma ferramenta que utiliza dados relacionados à temperatura e luminosidade de estrelas para determinar sua cor.
    </p>

    <section class="simulator-container">
      <h2 class="text-center">Simulador</h2>

      <div class="options">
        <label for="points">Temperatura superficial:</label>
        <input type="range" min="2000" max="32000" :value="temperature" @input="event => temperature = parseInt(event.target.value)" >

        <p>Temperatura: {{ temperature.toLocaleString() }} (K)</p>
      </div>

      <div id="simulator"></div>
    </section>

    <h3 class="subitle">Princípio fundamental do simulador ⚙️</h3>
    <p>
      O simulador é baseado no Diagrama de Hertzsprung-Russell que é uma ferramenta fundamental na astronomia que relaciona a luminosidade de uma estrela
      com a sua temperatura superficial (a temperatura da superfície da estrela).
    </p>
    <p>
      <b>Eixo Horizontal (Temperatura Efetiva):</b> O eixo horizontal do diagrama de H-R representa a temperatura efetiva das estrelas. Isso não é exatamente a temperatura real da estrela, mas sim a temperatura de sua superfície. As estrelas mais quentes estão no lado esquerdo do gráfico, enquanto as estrelas mais frias estão no lado direito.
    </p>
    <p>
      <b>Eixo Vertical (Luminosidade):</b> O eixo vertical representa a luminosidade das estrelas. Luminosidade se refere à quantidade total de energia irradiada por uma estrela em um determinado período de tempo. As estrelas mais brilhantes (ou seja, as que emitem mais energia) estão na parte superior do gráfico, enquanto as menos luminosas estão na parte inferior.
    </p>
    <p>
      Ao estudar a evolução estelar, os astrônomos notaram que as estrelas não se distribuíam aleatoriamente no diagrama, mas sim seguiam sequências claramente definidas.
      A que abrigava a maioria das estrelas era denominada Sequência Principal (pode ser notada na imagem abaixo).
      Podemos observar que existem "vazios" em determinadas áreas do gráfico devido à luminosidade estar relacionada com o seu tamanho e a sua temperatura.
    </p>

    <p class="text-center">Resumo do Diagrama de Hertzsprung-Russell</p>
    <table>
      <tr>
        <th>Cor da Estrela</th>
        <th>Temperatura Aproximada (Kelvin)</th>
        <th>Características</th>
      </tr>
      <tr>
        <td>Azul</td>
        <td>Acima de 30.000</td>
        <td>Estrelas muito quentes e luminosas, como algumas estrelas gigantes azuis.</td>
      </tr>
      <tr>
        <td>Branco</td>
        <td>10.000 - 30.000</td>
        <td>Estrelas quentes, como nosso Sol, que é branco-amarelado.</td>
      </tr>
      <tr>
        <td>Amarelo</td>
        <td>5.000 - 10.000</td>
        <td>Estrelas de temperatura média, como o nosso Sol.</td>
      </tr>
      <tr>
        <td>Laranja</td>
        <td>2.500 - 5.000</td>
        <td>Estrelas mais frias que nosso Sol, como algumas gigantes laranjas e anãs laranjas.</td>
      </tr>
      <tr>
        <td>Vermelho</td>
        <td>Abaixo de 2.500</td>
        <td>Estrelas muito frias, como as anãs vermelhas, as estrelas mais frias conhecidas.</td>
      </tr>
    </table>

    <div class="centered-container">
      <img id="diagramH-R" src="/330px-H-R_diagram.svg.png" alt="diagrama H-R">
      <p class="description">
        Diagrama de Hertzsprung-Russell: As estrelas mais quentes estão no lado esquerdo do gráfico, enquanto as estrelas mais frias estão no lado direito.
        As estrelas mais brilhantes estão na parte superior do gráfico, enquanto as menos luminosas estão na parte inferior.
      </p>
    </div>

    <h3 class="subitle">Por que não existem estrelas verdes? 💚🟢</h3>
    <p>
      Não temos estrelas verdes visíveis a olho nu no céu noturno porque a luz das estrelas não atinge com força suficiente a região do espectro visível correspondente
      ao verde para que nossos olhos a percebam predominantemente como verde.
      No entanto, algumas estrelas podem emitir alguma luz verde, mas geralmente é misturada com outras cores, e o resultado é que a estrela parece branca ou
      ligeiramente azulada.
    </p>
    <p>
      Inicialmente, seria esperado que houvesse estrelas representando todas as cores do espectro. No entanto, quando observamos essa sequência de cores em objetos
      incandescentes, a intensidade da luz branca tende a dominar sobre a cor verde devido à sua energia superior.
    </p>

    <h4>Fontes</h4>
    <ul>
      <li>
        <a href="https://www.zenite.nu/as-cores-das-estrelas" target="_blank" class="link">https://www.zenite.nu/as-cores-das-estrelas</a>
      </li>
      <li>
        <a href="http://www.inpe.br/ciaa2018/arquivos/oficinas_pdfs/As_Cores_das_Estrelas.pdf" target="_blank" class="link">http://www.inpe.br/ciaa2018/arquivos/oficinas_pdfs/As_Cores_das_Estrelas.pdf</a>
      </li>
      <li>
        <a href="https://www.ufrgs.br/astronomia/wp-content/uploads/2016/07/Nascimento-e-evolu%C3%A7%C3%A3o-das-Estrelas.pdf" target="_blank" class="link">https://www.ufrgs.br/astronomia/wp-content/uploads/2016/07/Nascimento-e-evolu%C3%A7%C3%A3o-das-Estrelas.pdf</a>
      </li>
      <li>
        <a href="https://solarsystem.nasa.gov/resources/2352/sun-3d-model" target="_blank" class="link">https://solarsystem.nasa.gov/resources/2352/sun-3d-model</a>
      </li>
    </ul>
  </main>
</template>


<style>

.simulator-container {
  border-radius: 2rem;
  background: linear-gradient(to bottom, #eee, #fcfcfc);
  padding: 1.5rem;
  margin-block: 2rem;
}

.simulator-container .options {
  text-align: center;
  margin-block: 1rem;
}

.simulator-container .options input {
  margin-inline: 1rem;
  width: 100%;
  max-width: 300px;
}

canvas {
  display: block;
  margin: 3rem auto;
}

canvas#canvas-settings {
  border: 1px solid;
  width: 100%;
}

</style>