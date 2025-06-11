<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La preparación de datos para modelos de inteligencia artificial involucra diversas técnicas de limpieza, transformación e integración. La limpieza de datos abarca la identificación de dimensiones de calidad, la detección de errores comunes y la aplicación de métodos como la imputación, eliminación y corrección. La transformación de datos incluye procesos de codificación, normalización, gestión de inconsistencias y duplicados, así como su adecuación para algoritmos de inteligencia artificial. En cuanto a la integración y almacenamiento, se aborda el uso de procesos ETL, la preparación de datos para el aprendizaje automático, el diseño de modelos de datos y la construcción de pipelines de procesamiento. Finalmente, se contempla la automatización de todo el flujo mediante herramientas especializadas que permiten optimizar las etapas de preparación, modelado y actualización de los datos de manera eficiente .
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo se presentan las técnicas de limpieza, transformación, integración y automatización de datos para modelos de inteligencia artificial, resaltando la importancia de garantizar la calidad de los datos, optimizar su procesamiento y automatizar las etapas clave mediante herramientas especializadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
