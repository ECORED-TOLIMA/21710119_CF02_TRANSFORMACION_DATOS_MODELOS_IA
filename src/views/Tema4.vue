4<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Automatización de modelos de inteligencia artificial
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen')
      .col-lg-12(data-aos="flip-up")
        p La automatización de modelos de inteligencia artificial busca reducir la intervención manual en las tareas de preparación, construcción, validación y despliegue de modelos predictivos. A través del uso de "[i pipelines] de datos y herramientas especializadas, se consigue acelerar el ciclo de vida de los proyectos de IA, mejorar la reproducibilidad de los resultados y facilitar la actualización continua de los modelos frente a nuevos datos. La automatización no solo optimiza los recursos humanos y computacionales, sino que también permite la detección temprana de desviaciones en el comportamiento del modelo, garantizando su vigencia en entornos dinámicos (Almeida, 2013).
        
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Automatización de procesos de preparación y modelado de datos
    .BG_04.p-5
      p.mb-4 Los procesos de preparación y modelado de datos son tradicionalmente intensivos en tiempo y propensos a errores si se realizan manualmente. Para evitar estas limitaciones, se implementan flujos automatizados que permiten:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="flip-up")
          .tarjeta--blanca.p-5
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | La recolección periódica de nuevos datos desde diferentes fuentes (APIs, bases de datos y sistemas LMS).
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | La ejecución sistemática de rutinas de limpieza, imputación de datos faltantes, detección de valores atípicos y normalización de variables.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | La generación automática de variables derivadas y enriquecimiento de los datasets.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | La actualización dinámica de particiones de entrenamiento y prueba conforme llegan nuevos datos.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 El reentrenamiento programado de modelos de #[i machine learning], considerando validaciones cruzadas y evaluaciones de desempeño periódicas.
      p Esta automatización se logra mediante la construcción de #[i pipelines] que conectan las etapas de forma orquestada, utilizando herramientas de orquestación de flujos de trabajo como Apache Airflow, Kubeflow Pipelines o servicios integrados en plataformas en la nube.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Automatización mediante herramientas especializadas
    p La automatización de modelos de inteligencia artificial puede lograrse utilizando herramientas como Python, Scikit-learn, Jupyter Notebooks y Power BI, integradas en un flujo de trabajo secuencial. Cada herramienta cumple una función específica en las etapas de preparación de datos, modelado predictivo y visualización de resultados, permitiendo una orquestación eficiente y escalable mediante programación estructurada y procesos automatizados.
    p A continuación, se describe cómo estas herramientas contribuyen al proceso de automatización:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row(titulo="Preparación y análisis de datos con Python y Jupyter Notebooks")
        .col-md-6.mb-4.mb-md-0
          p Python, junto con bibliotecas como Pandas, se utiliza para automatizar la extracción y carga de datos desde fuentes diversas, como bases de datos, archivos CSV o APIs. Jupyter Notebooks proporciona un entorno interactivo para el análisis exploratorio de datos (EDA), donde se pueden desarrollar scripts reutilizables para tareas de limpieza, imputación de valores faltantes, eliminación de duplicados, transformación y codificación de variables. Esta etapa inicial, aunque puede incluir análisis manual, se automatiza mediante la generación de funciones que estandarizan el procesamiento de nuevos datos (Sahoo, 2019).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img2.png', alt='Texto que describa la imagen')
      .row(titulo="Modelado de inteligencia artificial con Python y Scikit-learn")
        .col-md-6.mb-4.mb-md-0
          p Scikit-learn permite automatizar el entrenamiento de modelos mediante scripts que manejan la selección algorítmica, la división de datos en conjuntos de entrenamiento y prueba, y la capacitación del modelo. Herramientas como GridSearchCV o RandomizedSearchCV facilitan la búsqueda automatizada de los mejores hiperparámetros, optimizando así el rendimiento predictivo. Posteriormente, la evaluación del modelo se realiza de forma sistemática utilizando métricas predefinidas, y el modelo entrenado se guarda utilizando bibliotecas como Joblib o Pickle para su reutilización futura sin necesidad de reentrenamiento.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
      .row(titulo="Visualización y presentación de resultados con Power BI")
        .col-md-6.mb-4.mb-md-0
          p Power BI se integra como herramienta de visualización para automatizar la presentación de resultados. Puede conectarse a las fuentes donde se almacenan los datos procesados o las predicciones del modelo, permitiendo la creación de informes y dashboards que se actualizan automáticamente. Además, Power BI soporta la ejecución de scripts en Python, lo que amplía las capacidades de análisis y visualización avanzadas directamente dentro de los informes, asegurando la actualización continua de los resultados presentados.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
      .row(titulo="Automatización completa del flujo de trabajo")
        .col-md-6.mb-4.mb-md-0
          p La automatización total se logra mediante la escritura de #[i scripts] de Python que orquestan todo el proceso, desde la recolección de datos hasta el despliegue de informes actualizados. Los Jupyter Notebooks actúan como entornos de desarrollo y documentación, mientras que en producción se pueden emplear herramientas de gestión de flujos de trabajo, como Apache Airflow o #[i schedulers] de tareas, para ejecutar los procesos de forma programada, garantizando la actualización periódica de los modelos y reportes.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
    p Esta integración coordinada de herramientas facilita la construcción de #[i pipelines] robustos de inteligencia artificial, mejorando la eficiencia, reduciendo errores y permitiendo una respuesta ágil ante cambios en los datos o en las necesidades del negocio.
</template>

<script>
export default {
  name: 'Tema4',
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
