<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de transformación de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-sm-3.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')
      .col-lg-12(data-aos="flip-up")
        p La transformación de datos es una fase esencial dentro del proceso de preparación para el análisis, ya que convierte los datos en formatos adecuados para su posterior procesamiento o minería. Según Rahm y Hai Do (2000), esta fase incluye varias tareas como el análisis de datos, la definición del flujo de trabajo de transformación, la creación de reglas de mapeo, la verificación de los resultados transformados y, finalmente, el retroflujo de los datos limpios a los sistemas originales (citado por Almeida, 2013).
        P Entre las técnicas más comunes de transformación se encuentran:
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          LineaTiempoD.color-acento-botones
            .row(numero="A" titulo="Codificación de variables categóricas").p-3
              .col-md-12.mb-4.mb-md-0
                p En muchos casos, las herramientas analíticas requieren que todos los datos estén en formato numérico. Por esta razón, es necesario transformar los valores alfabéticos (por ejemplo, categorías como “bajo”, “medio”, “alto”) en representaciones numéricas. Esta técnica puede implementarse utilizando conocimientos del dominio o mediante el análisis de las frecuencias observadas en tablas de distribución conjunta (Pyle, 1999).
                figure
                  img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
            .row(numero="B" titulo="Normalización").p-3
              .col-md-12.mb-4.mb-md-0
                p Esta técnica busca ajustar la escala de los valores de las variables numéricas para que puedan ser comparadas de forma justa y eficiente dentro de los algoritmos. Existen dos tipos principales:
              .col-md-12.bgblanco.p-3
                ul.lista-ul
                  li
                    i.fas.fa-circle
                    | Normalización del rango: establece un rango fijo (como 0 a 1) para los valores, lo que facilita el análisis cuando las variables tienen diferentes escalas o unidades.
                  li
                    i.fas.fa-circle
                    | Normalización de la distribución: su objetivo es que los datos de una variable se ajusten a una distribución específica (por ejemplo, normal o gaussiana), lo que resulta útil para algoritmos sensibles a la forma de la distribución.
              p.mt-4 Es importante diferenciar estas normalizaciones del proceso de normalización en bases de datos, el cual se enfoca en la estructuración eficiente de las tablas y relaciones.
                figure
                  img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
            .row(numero="C" titulo="Transformación de formatos y estructuras")
              .col-md-12.mb-4.mb-md-0
                p Incluye tareas como convertir fechas en formatos estándar, fusionar columnas, dividir campos compuestos, convertir texto a minúsculas, eliminar espacios, entre otros.
                figure
                  img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
            .row(numero="D" titulo="Derivación de variables")
              .col-md-12.mb-4.mb-md-0
                p Consiste en crear nuevas variables a partir de las existentes, como calcular el índice de masa corporal a partir del peso y la estatura, o el rango etario a partir de la fecha de nacimiento.
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="flip-up")
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-4.col-sm-3.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p Estas transformaciones no solo aumentan la eficiencia de los algoritmos, sino que también mejoran la calidad del análisis al facilitar comparaciones y descubrimientos de patrones ocultos.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Codificación y normalización de datos
    p.mb-4 En el contexto de proyectos de aprendizaje automático, las tareas de codificación y normalización constituyen pasos fundamentales en la etapa de preparación y transformación de los datos, ya que impactan directamente en el rendimiento y la eficacia de los algoritmos.
    p.mb-4 La codificación consiste en transformar datos no numéricos en representaciones numéricas comprensibles para los modelos. Dado que muchos algoritmos solo pueden operar con entradas numéricas, es indispensable convertir atributos categóricos (como etiquetas o colores) en valores numéricos. Una técnica ampliamente utilizada es el #[i one-hot encoding], que genera una columna binaria por cada categoría posible, permitiendo representar la información sin introducir un orden artificial entre categorías. A modo de ejemplo, en la figura 1 se presenta cómo se transforma una variable categórica mediante la técnica de #[i one-hot encoding].
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Representación de una variable categórica aplicando one-hot encoding ]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img7_1.svg', alt='En la figura 1 se presenta la conversión de una variable categórica llamada “Color”, con valores “Amarillo”, “Verde” y “Rojo”, a un formato numérico binario utilizando la técnica de one-hot encoding.')
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='En la figura 1 se presenta la conversión de una variable categórica llamada “Color”, con valores “Amarillo”, “Verde” y “Rojo”, a un formato numérico binario utilizando la técnica de one-hot encoding.')
    
    .row.justify-content-center.align-items-center
      .col-lg-2.col-md-6.col-sm-4.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen')
      .col-lg-8
        p Por su parte, la normalización busca ajustar la escala de las variables numéricas para evitar que aquellas con rangos más amplios dominen el comportamiento del modelo. Esta técnica es especialmente útil para algoritmos sensibles a la magnitud de los datos. Existen dos enfoques comunes: la normalización de rango, que transforma los valores para ubicarlos dentro de un intervalo específico (usualmente entre 0 y 1), y la estandarización, que convierte los datos para que tengan una media de 0 y una desviación estándar de 1.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Gestión de inconsistencias y duplicados
    p.mb-4 La gestión de inconsistencias y duplicados es una etapa crítica en el proceso de transformación de datos para modelos de inteligencia artificial. Estos problemas, si no se abordan adecuadamente, pueden llevar a modelos de baja calidad y conclusiones erróneas, siguiendo el principio de “basura entra, basura sale” (Rahm, 2000).

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por tal razón, es importante identificar todo tipo de inconsistencias o duplicados. Las inconsistencias pueden manifestarse a nivel de esquema, como cuando el mismo nombre se asigna a diferentes objetos o se utilizan nombres distintos para un mismo objeto, o a nivel estructural, donde un objeto se representa de manera diferente en varias fuentes. También pueden presentarse a nivel de datos, donde los errores en el contenido real no son evidentes en el esquema, como errores tipográficos (Almeida, 2013).
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-sm-6.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')

      .col-lg-7
        p A continuación, se presentan dos ejemplos de inconsistencias:
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Ejemplo 1.
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Contexto: base de datos de ventas en una cadena de supermercados.
          li
            i.fas.fa-check
            | Inconsistencia: “Coca-Cola 500ml”, “CocaCola 0.5L”, “Coke 500” y “Coca cola 500 ml”.
          li
            i.fas.fa-check
            | El problema se presenta porque todos estos registros se refieren al mismo producto, pero están escritos de manera diferente, dificultando el análisis de ventas por producto.

        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Ejemplo 2.
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Contexto: base de datos de registro de clientes.
          li
            i.fas.fa-check
            | Inconsistencia: “12/03/2024”, “2024-03-12”, “03-12-2024” y “12 Mar 2024”.
          li
            i.fas.fa-check
            | El problema se presenta porque las fechas están registradas en distintos formatos (europeo, ISO, estadounidense y textual), lo que puede causar errores en la interpretación y procesamiento de datos cronológicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-sm-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Las discrepancias también pueden originarse por razones arquitectónicas al combinar datos de distintos sistemas de bases de datos no compatibles o por problemas de sincronización entre flujos de datos.
    p Los duplicados, por su parte, se refieren a registros que representan la misma entidad del mundo real. Esto puede ocurrir por errores en la entrada de datos o durante la integración de múltiples fuentes. Una auditoría de datos reveló que casi el 90 % del volumen de datos era duplicado, aunque altamente inconsistente (Pyle, 1999).

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Detección de inconsistencias y duplicados
    p.mb-4 Terminados los procesos de codificación y normalización de los datos, se debe verificar que todos tengan el formato correcto y sean del tipo adecuado para el entrenamiento del modelo. Para ello, se deben realizar diversas tareas:

    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img12.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Análisis de datos
            p.mt-3 Se requiere un análisis detallado para detectar errores e inconsistencias. Esto puede incluir inspección manual, uso de programas de análisis o generación de metadatos que revelen propiedades problemáticas.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Análisis de metadatos
            p.mt-3 Permite evaluar características auténticas de los datos y detectar valores atípicos o patrones inusuales comparando atributos entre diferentes tablas o conjuntos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img14.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Minería de datos
            p.mt-3 Las técnicas de minería permiten identificar patrones y reglas. Las desviaciones de estas reglas podrían señalar errores potenciales, como en reglas de asociación ("total = cantidad * precio_unitario").

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img15.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Algoritmos de emparejamiento
            p.mt-3 Se emplean para identificar registros similares que puedan ser duplicados, calculando puntuaciones de coincidencia automatizadas.

    p.mb-4 Una vez detectadas las inconsistencias y duplicados, se deben aplicar técnicas como:
    
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario.tarjeta.color5.w-100
            .text-black.p-4
              h4.text-center Limpieza de datos (<em>data cleaning</em>)
              p.text-center Consiste en corregir errores e inconsistencias antes de cargar los datos en un <em>Data Warehouse</em>. Esto incluye reestructurar esquemas, reformatear atributos, definir valores por defecto y unificar formatos de datos.
      .col-lg-4.mb-4.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
          .tarjeta.color-primario.tarjeta.color5.w-100
            .text-black.p-4
              h4.text-center Eliminación de duplicados (<em>duplicate elimination-merge-purge</em>)
              p.text-center Consiste en identificar registros similares (<em>matching</em>), fusionarlos (<em>merge</em>) en un solo registro sin redundancias, y luego eliminar los registros redundantes (<em>purge</em>).
      .col-lg-4.mb-4.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img18.svg' alt='AvatarTop')
          .tarjeta.color-primario.tarjeta.color5.w-100
            .text-black.p-4
              h4.text-center Integración de datos (<em>data integration</em>) 
              p.text-center Al combinar fuentes diversas, se emplean procesos ETL (extracción, transformación y carga) o virtualización de datos, resolviendo inconsistencias y asegurando uniformidad entre esquemas y datos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Finalmente, se destaca que la gestión de inconsistencias y duplicados requiere un balance entre la automatización y la intervención manual, dependiendo de la complejidad de los datos y de la criticidad del proyecto. Idealmente, los datos corregidos también deberían reemplazar los datos sucios en las fuentes originales para evitar trabajos repetidos en el futuro.
    
    
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Transformación de datos para modelos de inteligencia artificial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-4.col-sm-6.mb-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img19.svg", alt="alt")

      .col-lg-10
        p La transformación de datos para modelos de IA es un proceso fundamental que consiste en convertir los datos brutos en un formato adecuado y efectivo para el entrenamiento y la aplicación de estos modelos (Pyle, 1999). Considerando que los modelos de inteligencia artificial, especialmente aquellos basados en el aprendizaje automático, son esencialmente matemáticos y trabajan con cifras, la conversión de datos a menudo requiere transformar información no numérica en formas numéricas (Pyle, 1999).
        p La transformación de datos para modelos de IA abarca varias técnicas y propósitos:



    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row(titulo="Preparación para el modelado")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p El objetivo principal es transformar los datos brutos en una forma que el modelo pueda entender y utilizar para aprender patrones y realizar predicciones. Esto incluye la transformación de variables categóricas en numéricas (codificación), la normalización o escalado de variables numéricas para garantizar que tengan rangos y distribuciones comparables, así como la imputación o sustitución de valores faltantes.
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen')
      .row(titulo="Adaptación a los requisitos del modelo")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p Los distintos tipos de modelos de inteligencia artificial presentan requisitos específicos en cuanto al formato y la representación de los datos. Por ejemplo, las redes neuronales suelen requerir entradas estrictamente numéricas, mientras que ciertos algoritmos estadísticos pueden funcionar de manera óptima con datos que sigan una distribución particular. La transformación asegura que los datos cumplan con estos requisitos.
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img21.png', alt='Texto que describa la imagen')
      .row(titulo="Mejora del rendimiento del modelo")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p la transformación de datos puede mejorar la precisión, la eficiencia y la estabilidad del entrenamiento del modelo. Por ejemplo, la normalización ayuda a evitar que variables con rangos mayores dominen el proceso de aprendizaje (Wang, 2017). Técnicas como la reducción de dimensionalidad pueden simplificar los datos, disminuir el riesgo de sobreajuste y acelerar el entrenamiento.
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img22.png', alt='Texto que describa la imagen')
      .row(titulo="Extracción de características relevantes")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p La transformación puede incluir la creación de nuevas variables (ingeniería de características) a partir de las existentes para resaltar información más relevante para la tarea de predicción (Tsai, 2015). Normalmente, la extracción de características viene acompañada de un análisis de componentes principales (PCA), una forma de reducción de la dimensionalidad que simplifica conjuntos de datos con muchas variables. Su objetivo es convertir un espacio de características de alta dimensión en uno de menor dimensión, manteniendo la información esencial. Esto se refleja en una mayor eficiencia del modelo al minimizar el riesgo de sobreajuste. La efectividad de la reducción de dimensionalidad puede compararse evaluando el rendimiento del modelo antes y después de aplicarla.
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img23.png', alt='Texto que describa la imagen')
      .row(titulo="Manejo de datos de ejecución (<em>live data</em>)")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p Una vez entrenado el modelo, cualquier dato nuevo que se utilice para realizar predicciones debe ser transformado exactamente de la misma forma que los datos de entrenamiento y prueba. El PIE-I (Prepared Information Environment Input) es el encargado de esta transformación (Pyle, 1999).
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img24.png', alt='Texto que describa la imagen')
      .row(titulo="Inversión de la transformación para la salida")
        .col-lg-6.mb-4.mb-md-0.order-2.lg-order-1
          p Para que las predicciones del modelo, que a menudo están en un formato transformado (por ejemplo, valores numéricos escalados), sean comprensibles y útiles en el mundo real, es necesario revertir la transformación. Esta tarea la lleva a cabo el PIE-O (Prepared Information Environment Output) (Pyle, 1999).
        .col-lg-6.col-md-12.mb-md-4.order-1.lg-order-2
          figure
            img(src='@/assets/curso/temas/tema2/img25.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p En esencia, la transformación de datos para modelos de IA constituye un proceso fundamental que acondiciona los datos para el aprendizaje y la predicción, garantizando su compatibilidad con el modelo, optimizando su rendimiento y facilitando la interpretación de los resultados. Este proceso no es automático y, a menudo, requiere conocimiento del dominio y experimentación para determinar las transformaciones más efectivas.

</template>

<script>
export default {
  name: 'Tema2',
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
