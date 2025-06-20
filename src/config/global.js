export default {
  global: {
    componenteFormativo:
      'Limpieza, transformación e integración de datos para modelos predictivos.',
    descripcionCurso:
      'Este componente fortalece las competencias técnicas para analizar, validar y preparar datos, facilitando su conversión en conocimiento útil. Prepara a los aprendices para procesar información en entornos digitales dinámicos, con enfoque en su aplicación en modelos de Inteligencia Artificial (IA).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de limpieza de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y dimensiones de la calidad de los datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos comunes de errores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Técnicas de limpieza mediante imputación, eliminación y corrección',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Codificación y normalización de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de inconsistencias y duplicados',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Detección de inconsistencias y duplicados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Transformación de datos para modelos de inteligencia artificial',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Integración y almacenamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proceso ETL',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Preparación de datos para modelos de aprendizaje automático',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Diseño de modelos de datos para algoritmos de inteligencia artificial y aprendizaje automático',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: '<em>Pipelines</em> de procesamiento de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Automatización de modelos de inteligencia artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Automatización de procesos de preparación y modelado de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Automatización mediante herramientas especializadas',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_21710119_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Codificación y normalización de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Proceso de normalización de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hKwuc-JJisI',
    },
    {
      tema: '3. Integración y almacenamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2024). Proceso de integración de datos y ETL [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ilmPbQSBBoM',
    },
    {
      tema: '4.1 Automatización de procesos de preparación y modelado de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Fundamentos de modelamiento de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tmYngyjHmbc',
    },
  ],
  glosario: [
    {
      termino: 'Calidad de los datos',
      significado:
        'conjunto de atributos que determinan la utilidad de los datos, como precisión, completitud, consistencia y actualidad.',
    },
    {
      termino: 'Codificación de variables categóricas',
      significado:
        'conversión de variables no numéricas en formatos numéricos mediante técnicas como <em>one-hot encoding</em> o <em>label encoding</em>.',
    },
    {
      termino: 'Duplicados',
      significado:
        'registros repetidos dentro de un conjunto de datos que deben identificarse y eliminarse para evitar distorsiones en el análisis.',
    },
    {
      termino: 'ETL (<em>Extract, Transform, Load</em>):',
      significado:
        'proceso que consiste en extraer datos de diversas fuentes, transformarlos para análisis o modelado, y cargarlos en un sistema de almacenamiento.',
    },
    {
      termino: 'Imputación',
      significado:
        'técnica utilizada para reemplazar valores faltantes en un conjunto de datos mediante estimaciones basadas en otros valores disponibles.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso que ajusta la escala de los datos numéricos para que estén dentro de un mismo rango, facilitando el entrenamiento de modelos de aprendizaje automático.',
    },
    {
      termino: '<em>Pipeline</em> de procesamiento de datos',
      significado:
        'secuencia automatizada de pasos para preparar los datos, que puede incluir limpieza, transformación, modelado y evaluación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Almeida, F., & Calistru, C. (2013). The main challenges and issues of big data management. International Journal of Research Studies in Computing, 2(1), 11–20.',
      link: '',
    },
    {
      referencia:
        'Chen, M., Mao, S., & Liu, Y. (2014). Big data: Una encuesta. Redes y Aplicaciones Móviles, 19(2), 171–209.',
      link: '',
    },
    {
      referencia:
        'Elgendy, N., & Elragal, A. (2014). Big data analytics: A literature review paper. In Advances in Data Mining. Applications and Theoretical Aspects: 14th Industrial Conference, ICDM 2014, St. Petersburg, Russia, July 16–20, 2014. Proceedings 14 (pp. 214–227). Springer International Publishing.',
      link: '',
    },
    {
      referencia:
        'FreeCodeCamp.org. (2024). Learn to code - for free. Build projects. Earn certifications (SQL, Tableau, Power BI, Python, Excel, Pandas, Projects, more). ',
      link: 'https://www.freecodecamp.org',
    },
    {
      referencia:
        'Gehani, A., & Tariq, D. (2012). SPADE: Support for provenance auditing in distributed environments. In International Provenance and Annotation Workshop (pp. 101–120). Springer. ',
      link: 'https://doi.org/10.1007/978-3-642-35170-9_6',
    },
    {
      referencia:
        'Maltby, D. (2011, October). Big data analytics. In 74th Annual Meeting of the Association for Information Science and Technology (ASIST) (pp. 1–6).',
      link: '',
    },
    {
      referencia:
        'Mesa Guerrero, J. A., & Caicedo Zambrano, S. J. (2020). Introducción a la estadística descriptiva.',
      link: '',
    },
    {
      referencia:
        'Pyle, D. (1999). Data preparation for data mining. Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Rahm, E., & Do, H. H. (2000). Data cleaning: Problems and current approaches. IEEE Data Engineering Bulletin, 23(4), 3–13.',
      link: '',
    },
    {
      referencia:
        'Sahoo, K., Samal, A. K., Pramanik, J., & Pani, S. K. (2019). Exploratory data analysis using Python. International Journal of Innovative Technology and Exploring Engineering, 8(12), 4727–4735.',
      link: '',
    },
    {
      referencia:
        'Tsai, C. W., Lai, C. F., Chao, H. C., & Vasilakos, A. V. (2015). Big data analytics: A survey. Journal of Big Data, 2, 1–32.',
      link: '',
    },
    {
      referencia:
        'Wang, L. (2017). Heterogeneous data and big data analytics. Automatic Control and Information Sciences, 3(1), 8–15. ',
      link: 'https://doi.org/10.12691/acis-3-1-3 ',
    },
    {
      referencia:
        'Zakir, J., Seymour, T., & Berg, K. (2015). Big data analytics. Issues in Information Systems, 16(2).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
