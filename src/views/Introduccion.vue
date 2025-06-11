<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
  
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.col-md-6.col-sm-8.mb-4
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='Imagen decorativa')
        .col-lg-7(data-aos="flip-up")
          p En un entorno donde la inteligencia artificial y el análisis de datos son protagonistas, la calidad y preparación de los datos adquiere una importancia equivalente a la de los algoritmos utilizados. Los datos bien gestionados permiten construir modelos capaces de predecir, clasificar o generar información relevante para múltiples sectores productivos y sociales.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Este componente formativo desarrolla la comprensión y aplicación de técnicas esenciales para la limpieza, transformación, integración y reducción de datos. Se promueve el desarrollo de habilidades para gestionar valores ausentes, normalizar variables, codificar categorías, consolidar información procedente de distintas fuentes y aplicar técnicas como el análisis de componentes principales (PCA) con el fin de optimizar conjuntos de datos.
          
      p.mb-5(data-aos="flip-up") A lo largo del proceso de formación, se fortalecen competencias orientadas a asegurar la calidad, consistencia y utilidad de los datos, preparándolos adecuadamente para su uso en modelos de ciencia de datos, análisis predictivo o inteligencia artificial. Además, se emplean herramientas tecnológicas y casos prácticos que permiten una apropiación significativa de los contenidos. Para profundizar en la importancia de estos temas, se recomienda acceder al siguiente video:
      .row.justify-content-center.align-items-center           
        .col-lg-12(data-aos="zoom-in")
        .col-12
          figure
            .video
              iframe(width="1493" height="840" src="https://www.youtube.com/embed/1OiA42edbqA" title="Limpieza, transformación e integración de datos para modelos predictivos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
