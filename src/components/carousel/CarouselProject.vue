<template>
    <Carousel class="my-carousel" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <img :src="`src/assets/images/sliders/${slide}`" alt="Discover Nuxt 3" />
        </div>
        
      </Slide>
      <template #addons>
      <Navigation />
    </template>
    </Carousel>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Navigation,
      Pagination
    },
    props: ['slides'],
  })
  </script>
  
  <style scoped>

  .my-carousel .carousel__item {
    height:80vh;
  }
  .my-carousel .carousel__item img {
      object-fit: cover;
      object-position: center;
      overflow: hidden;
      height:100%;
      width: 100%;
  }
  .carousel__item {
    min-height: 200px;
    width: 100%;
    display: flex;
    /*background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 0px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 2px solid white;
  }

  /*
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}*/
  </style>
  