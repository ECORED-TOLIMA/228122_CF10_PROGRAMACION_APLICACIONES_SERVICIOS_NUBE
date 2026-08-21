export default {
  global: {
    Name: 'DevOps e integración continua',
    Description:
      'Este componente formativo aborda los fundamentos de DevOps, los procesos de desarrollo de <em>software</em>, el uso de contenedores, la integración, entrega y despliegue continuo, así como las herramientas Git, GitHub, GitLab y Jenkins. Estos conocimientos permiten comprender la automatización y la integración continua como soporte para el desarrollo y la entrega de <em>software</em>.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Introducción a DevOps',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia y evolución de DevOps',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de DevOps',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cultura de colaboración y automatización',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Beneficios de la implementación de DevOps',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesos de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo de vida del desarrollo de <em>software</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Actividades del proceso de desarrollo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Roles y responsabilidades del equipo de desarrollo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Artefactos de <em>software</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Herramientas para el desarrollo de <em>software</em>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contenedores en entornos de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características de los contenedores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Beneficios del uso de contenedores',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aplicaciones de los contenedores en DevOps',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Uso de contenedores en entornos DevOps',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Integración, entrega y despliegue continuo (CI/CD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Integración continua (CI)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Entrega continua (CD)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Despliegue continuo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Beneficios de la automatización de procesos CI/CD',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Flujo de trabajo en entornos DevOps',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de versiones con Git',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fundamentos del control de versiones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Git como soporte para la integración continua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Repositorios remotos con GitHub y GitLab',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Estrategia de ramificación GitFlow',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Buenas prácticas en la gestión de código fuente',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Automatización de procesos CI/CD',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Introducción a Jenkins',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Arquitectura y componentes de Jenkins',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Creación de <em>pipelines</em> de integración continua',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Automatización de procesos de construcción, pruebas y despliegue',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Monitoreo y gestión de procesos CI/CD',
            hash: 't_6_5',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Artefacto de <em>software</em>',
      significado:
        'documento, archivo o producto generado durante el ciclo de vida del desarrollo de <em>software</em>, como requisitos, modelos, código fuente, ejecutables, manuales o reportes de pruebas.',
    },
    {
      termino: 'Automatización',
      significado:
        'ejecución de tareas o procesos mediante herramientas y tecnologías, reduciendo la intervención manual y aumentando la eficiencia, la repetibilidad y la confiabilidad de las actividades.',
    },
    {
      termino: 'CI/CD',
      significado:
        'conjunto de prácticas que integran la integración continua (<em>Continuous Integration</em>), la entrega continua (<em>Continuous Delivery</em>) y el despliegue continuo (<em>Continuous Deployment</em>) para automatizar el desarrollo y la distribución de <em>software</em>.',
    },
    {
      termino: 'Contenedor',
      significado:
        'tecnología que permite empaquetar una aplicación junto con sus dependencias y configuraciones para ejecutarla de forma consistente en diferentes entornos.',
    },
    {
      termino: 'Despliegue continuo (<em>Continuous Deployment</em>)',
      significado:
        'práctica que automatiza la publicación de nuevas versiones del <em>software</em> en un entorno de ejecución una vez superadas las validaciones establecidas.',
    },
    {
      termino: 'DevOps',
      significado:
        'enfoque que integra los equipos de desarrollo y operaciones mediante la colaboración, la automatización y la mejora continua para optimizar el ciclo de vida del desarrollo de <em>software</em>.',
    },
    {
      termino: 'Git',
      significado:
        'sistema de control de versiones distribuido que permite registrar, gestionar y controlar los cambios realizados en el código fuente de un proyecto.',
    },
    {
      termino: 'GitFlow',
      significado:
        'estrategia de ramificación para Git que organiza el desarrollo de <em>software</em> mediante ramas destinadas al desarrollo de funcionalidades, preparación de versiones y corrección de errores.',
    },
    {
      termino: 'Integración continua (<em>Continuous Integration</em>)',
      significado:
        'práctica que consiste en incorporar de forma frecuente los cambios realizados al código fuente y validarlos mediante procesos automatizados de construcción y pruebas.',
    },
    {
      termino: 'Jenkins',
      significado:
        'herramienta de automatización de código abierto utilizada para implementar procesos de integración, entrega y despliegue continuo mediante la ejecución de <em>pipelines</em>.',
    },
    {
      termino: 'Repositorio remoto',
      significado:
        'espacio de almacenamiento compartido donde se alojan los proyectos de <em>software</em> y su historial de versiones, facilitando el trabajo colaborativo entre los equipos de desarrollo.',
    },
    {
      termino: 'Versionamiento',
      significado:
        'proceso de registrar, controlar y administrar las diferentes versiones de un proyecto de <em>software</em>, permitiendo realizar seguimiento a los cambios y recuperar versiones anteriores cuando sea necesario.',
    },
  ],
  referencias: [
    {
      referencia: 'Atlassian. (s. f.). <em>Git tutorials and training</em>.',
      link: 'https://www.atlassian.com/git/tutorials',
    },
    {
      referencia:
        'Chacon, S., & Straub, B. (2014). <em>Pro Git</em> (2.ª ed.). Apress.',
      link: 'https://git-scm.com/book/es/v2',
    },
    {
      referencia: 'Docker, Inc. (s. f.). <em>Docker documentation</em>.',
      link: 'https://docs.docker.com/',
    },
    {
      referencia: 'Git. (s. f.). <em>Git</em>.',
      link: 'https://git-scm.com/',
    },
    {
      referencia: 'GitHub, Inc. (s. f.). <em>GitHub</em>.',
      link: 'https://github.com/',
    },
    {
      referencia: 'GitHub, Inc. (s. f.). <em>GitHub Docs</em>.',
      link: 'https://docs.github.com/es',
    },
    {
      referencia: 'GitLab B.V. (s. f.). <em>GitLab</em>.',
      link: 'https://about.gitlab.com/es/',
    },
    {
      referencia: 'GitLab B.V. (s. f.). <em>GitLab documentation</em>.',
      link: 'https://docs.gitlab.com/',
    },
    {
      referencia: 'Jenkins. (s. f.). <em>Documentation</em>.',
      link: 'https://www.jenkins.io/doc/',
    },
    {
      referencia: 'Jenkins. (s. f.). <em>Jenkins</em>.',
      link: 'https://www.jenkins.io/',
    },
    {
      referencia: 'Jenkins. (s. f.). <em>Pipeline</em>.',
      link: 'https://www.jenkins.io/doc/book/pipeline/',
    },
    {
      referencia: 'Learn Git Branching. (s. f.). <em>Learn Git Branching</em>.',
      link: 'https://learngitbranching.js.org/?locale=es_ES',
    },
    {
      referencia: 'Red Hat. (s. f.). <em>What is DevOps?</em>',
      link: 'https://www.redhat.com/en/topics/devops',
    },
    {
      referencia:
        "Skoulikari, A. (2023). <em>Learning Git: A hands-on and visual guide to the basics of Git</em>. O'Reilly Media.",
      link: '',
    },
    {
      referencia: 'The Linux Foundation. (s. f.). <em>What is DevOps?</em>',
      link: 'https://training.linuxfoundation.org/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
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
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
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
