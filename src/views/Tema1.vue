<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Técnicas de limpieza de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-md-12.col-sm-3.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
        .col-lg-12(data-aos="flip-up")
          p La limpieza de datos es un proceso fundamental que consiste en identificar, corregir o eliminar datos incompletos, inexactos o irrazonables, con el objetivo de mejorar la calidad del conjunto de datos (Chen, 2014). Este proceso es determinante, ya que la calidad de los datos incide directamente en la calidad de la información generada, lo cual repercute en la precisión y efectividad de la toma de decisiones.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-md-4.col-sm-3.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
        .col-lg-7
          .cajon.color-secundario.p-4.mb-4
            p En el contexto del Big Data, donde el volumen y la variedad de los datos representan grandes desafíos, resulta esencial contar con métodos eficientes de limpieza. Un conjunto de datos bien depurado permite reducir el margen de error en los análisis y facilita la construcción de modelos predictivos más precisos.

          p Las técnicas de limpieza y preparación de datos permiten transformar los datos en bruto en formatos adecuados para su análisis, modelado y descubrimiento de conocimiento (Pyle, 1999; Wang, 2017). Estas técnicas son clave para garantizar la calidad del proceso analítico, ya que ayudan a detectar y corregir errores estructurales, inconsistencias y redundancias.

          p Una técnica ampliamente utilizada es la limpieza de datos o Data Cleaning, que abarca desde la identificación de valores faltantes o erróneos hasta la corrección o eliminación de registros redundantes, especialmente al integrar datos provenientes de múltiples fuentes. La supresión de datos duplicados y la estandarización de formatos, como la unificación de mayúsculas y minúsculas, son pasos comunes que contribuyen a la integridad del conjunto de datos.

      p La correcta aplicación de estas técnicas no solo mejora la calidad de los datos, sino que también reduce sesgos potenciales, aumentando la precisión de los análisis posteriores y fortaleciendo la toma de decisiones basada en evidencia.


      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1	Definición y dimensiones de la calidad de los datos
      p.mb-4 La calidad de los datos se refiere al grado en que un conjunto de datos resulta adecuado para su propósito, especialmente en contextos analíticos. Según Mesa Guerrero y Caicedo Zambrano (2020), esta calidad es una característica multidimensional que determina su utilidad y valor. Implica evaluar aspectos como la adecuación al propósito, precisión, confiabilidad, validez y ausencia de errores significativos. Garantizar datos de calidad es esencial para obtener información valiosa y tomar decisiones bien fundamentadas.
      p.mb-4 Las principales dimensiones para evaluar la calidad de los datos incluyen:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-sm-8.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img3_1.svg', alt='Texto que describa la imagen')
        .col-lg-10.desktop(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones.mb-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')
            .tarjeta.color-primario.tarjeta--BG02.p-3(x="38%" y="25%" numero="+")
              p Verifica que no existan contradicciones en los datos, ya sea dentro del mismo conjunto o entre diferentes fuentes. Asegura que los datos mantengan relaciones lógicas entre sí.

            .tarjeta.color-primario.tarjeta--BG02.p-3(x="62.5%" y="25%" numero="+")
              p Determina si los datos cumplen con los formatos, tipos y reglas de negocio esperadas. Por ejemplo, que una fecha tenga el formato correcto o que una edad no sea negativa.

            .tarjeta.color-primario.tarjeta--BG02.p-3(x="33.2%" y="50%" numero="+")
              p Se refiere a qué tan cercanos están los valores registrados a los valores reales. Evalúa si los datos representan correctamente la realidad que intentan describir.
            .tarjeta.color-primario.tarjeta--BG02.p-3(x="67.2%" y="50%" numero="+")
              p Mide si los datos están disponibles cuando se necesitan. Evalúa si se actualizan con la frecuencia requerida para seguir siendo útiles.

            .tarjeta.color-primario.tarjeta--BG02.p-3(x="37.8%" y="76%" numero="+")
              p Indica si todos los datos requeridos están presentes. Evalúa la existencia de valores completos, sin omisiones ni registros faltantes.

            .tarjeta.color-primario.tarjeta--BG02.p-3(x="62.5%" y="76%" numero="+")
              p Asegura que cada entidad o registro aparezca una sola vez. Verifica la ausencia de duplicados en el conjunto de datos.
      .BG_01.px-5
        .row.justify-content-center.align-items-center
          .col-lg-12(data-aos="flip-up")
            p Para garantizar esta calidad, es fundamental aplicar procesos de limpieza y transformación conforme a metodologías y estándares reconocidos. Estas metodologías comprenden un conjunto de principios y prácticas que aseguran que los datos sean apropiados para su análisis o para el desarrollo de modelos de inteligencia artificial.
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-4.col-sm-3.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
          .col-lg-7
            P Una metodología esencial es el Data Assay, descrita por Pyle (1999), que se enfoca en organizar los datos en un formato adecuado para minería y en evaluar su calidad. Sus objetivos principales son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Evaluar la calidad y detectar áreas problemáticas en los conjuntos de datos de entrada, salida, prueba y verificación.
              li
                i.fas.fa-check
                | Analizar la calidad de variables individuales en todo su rango de valores.
              li
                i.fas.fa-check
                | Estimar la independencia entre variables mediante la entropía.
            p El Data Assay permite identificar si los datos cumplen su propósito, al tiempo que revela limitaciones y brechas en el conocimiento disponible.
      p Otra metodología clave es el proceso de limpieza de datos o Data Cleaning, que se orienta a la corrección de errores y resolución de inconsistencias. Este proceso suele integrarse dentro del flujo ETL (extracción, transformación y carga), y se realiza comúnmente en un área de #[i staging].
      p.mb-4 Las técnicas de limpieza pueden incluir:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-sm-8.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img5_1.svg', alt='Texto que describa la imagen')
        .col-lg-8.col-md-6.col-sm-8.mb-4.desktop(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
      p.mb-4 En resumen, la implementación de metodologías como el Data Assay y el Data Cleaning, junto con la estandarización y validación de datos, conforma un enfoque integral para garantizar su calidad. Este enfoque es indispensable para obtener resultados confiables tanto en el análisis estadístico como en aplicaciones basadas en inteligencia artificial.

      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2	Tipos comunes de errores
      p.mb-4 Durante la recopilación, integración o almacenamiento de datos, pueden presentarse diversos errores que afectan la calidad y utilidad de la información. Estos errores, si no se detectan y corrigen a tiempo, pueden generar interpretaciones erróneas y decisiones inadecuadas. Entre los más comunes se encuentran:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
           LineaTiempoD.color-acento-botones.mb-4
            p(numero="1" titulo="Valores nulos o ausentes") Se presentan cuando falta información en una o más variables de ciertos registros. Por ejemplo, una base de datos de clientes podría tener campos vacíos en la dirección de correo electrónico o en la fecha de nacimiento, lo cual limita su utilidad para análisis o segmentación.
            p(numero="2" titulo="Duplicados") Son registros repetidos que aparecen más de una vez en el conjunto de datos. Esto puede ocurrir, por ejemplo, cuando un mismo pedido se registra dos veces, inflando el total de ventas e introduciendo errores en los indicadores comerciales.
            p(numero="3" titulo="Ruido") Hace referencia a datos irrelevantes, inconsistentes o mal formateados. Un ejemplo común es cuando se ingresan nombres de clientes con diferentes convenciones como “Ana María”, “A. María” o “Ana M.”, lo que complica la unificación de registros y la calidad del análisis.
            p(numero="4" titulo="<em>Outliers</em> (valores atípicos)") Son observaciones que se desvían notablemente del resto de los datos. Por ejemplo, si en un conjunto de datos sobre salarios se encuentra un valor que triplica al siguiente más alto, podría tratarse de un error de digitación o de un caso excepcional que requiere atención especial.
        .col-lg-4.col-md-4.col-sm-3.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
      p Identificar y corregir estos errores es fundamental para asegurar la confiabilidad de los datos y evitar interpretaciones erróneas en el análisis posterior.

      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3	Técnicas de limpieza mediante imputación, eliminación y corrección
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-8.col-sm-8.mb-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

        .col-lg-8
          p La limpieza o depuración de datos consiste en detectar, corregir o eliminar información incompleta, incorrecta o incoherente para mejorar su calidad. Este proceso es esencial en la integración de fuentes diversas y forma parte del ciclo ETL (extracción, transformación y carga) en entornos de almacenamiento de datos.
          p Antes de aplicar cualquier técnica, es necesario analizar los datos para detectar errores e inconsistencias. Este análisis puede realizarse de forma manual, mediante inspección de muestras, o con herramientas que generen metadatos e informes de calidad.
          p Rahm (2000) propone una clasificación de los problemas de calidad según su origen (una sola fuente o múltiples fuentes) y su nivel (esquema o instancia), lo cual facilita su detección y tratamiento. A continuación, se describe esta tipología:

      .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
        h5 Tabla 1.
        span  #[i Problemas comunes de calidad de datos según su origen y nivel]
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .tabla-b.color-acento-contenido.mb-4(data-aos="fade-left")
            table(alt="")
              thead
                tr
                  th Origen	
                  th Característica	
                  th Nivel de esquema	
                  th Nivel de instancia
              tbody
                tr
                  td Problemas de fuente única (Single-Source Problems)	
                  td Ocurren cuando los datos provienen de una sola fuente y presentan deficiencias internas.	
                  td 
                    p Estos problemas están vinculados al diseño del modelo de datos o a la falta de restricciones:
                    p #[b Unicidad:] existencia de registros duplicados que deberían ser únicos, como dos clientes con el mismo número de identificación.
                    p #[b Integridad referencial:] claves foráneas sin correspondencia, lo que rompe las relaciones entre tablas.
                    p #[b Otras restricciones:] definiciones inadecuadas de dominios, reglas de validación ausentes, entre otros.	
                  td 
                    p Relacionados con los valores específicos almacenados, frecuentemente causados por errores de entrada o procesamiento:
                    p #[b Errores ortográficos]: por ejemplo, escribir “Colmbia” en lugar de “Colombia”.
                    p #[b Registros duplicados]: redundancia de información que puede afectar el análisis.
                    p #[b Otros]: valores fuera de rango, campos vacíos, formatos incorrectos.
                tr
                  td Problemas de múltiples fuentes (#[i Multi-Source Problems])	
                  td Se presentan al integrar datos de distintas fuentes, lo que introduce retos adicionales.	
                  td  
                    p Los modelos de datos pueden diferir en estructura y denominación:
                    p #[ Conflictos de nombres:] como “#[i CustomerID]” frente a “#[i ClientCode]” para referirse al mismo concepto.
                    p #[ Conflictos estructurales] una misma entidad representada como tabla en una fuente y como objeto en otra.
                    p #[ Otras diferencias:] uso de distintos tipos de datos, estructuras jerárquicas frente a relacionales, etc.	
                  td
                    p Aparecen en los valores concretos provenientes de diversas fuentes:
                    p #[b Agregación inconsistente:] por ejemplo, una fuente muestra totales mensuales y la otra diarios.
                    p #[b Desincronización temporal:] los datos provienen de momentos distintos, generando incoherencias.
                    p #[b Otros:] datos faltantes en alguna fuente, formatos incompatibles, distintas unidades de medida.
        p.mb-4 Una vez identificados los errores, es posible aplicar las siguientes técnicas:
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--BG01.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-md-4
                    img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
                h5.text-center Imputación de valores faltantes
                p Consiste en reemplazar los datos ausentes con estimaciones como el promedio, la mediana, la moda o valores predichos mediante algoritmos como KNN (K-Nearest Neighbors) o regresión.
              .tarjeta.tarjeta--BG01.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-md-4
                    img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
                h5.text-center Eliminación de registros o variables
                p Se utiliza cuando el número de errores es elevado o los datos no aportan valor analítico.
              .tarjeta.tarjeta--BG01.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-md-4
                    img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
                h5.text-center Corrección de inconsistencias
                p Incluye la estandarización de formatos (por ejemplo, unificar “Colombia” y “colombia”), la armonización de unidades de medida y la corrección ortográfica.
              .tarjeta.tarjeta--BG01.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-md-4
                    img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
                h5.text-center Tratamiento de valores atípicos (#[i outliers]): 
                p Se puede realizar mediante técnicas estadísticas como el rango intercuartílico, el #[i Z-score], o modelando estos valores de forma separada si son representativos.

</template>
<script>
export default {
  name: 'Tema1',
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
