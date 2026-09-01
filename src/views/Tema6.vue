<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Automatización de procesos CI/CD
    p.mb-4(data-aos="fade-down") La automatización constituye uno de los principios fundamentales del enfoque DevOps, ya que permite ejecutar de manera repetitiva y confiable actividades relacionadas con la construcción, validación, prueba e implementación de aplicaciones de <em>software</em>. Mediante la automatización de estos procesos es posible reducir la intervención manual, disminuir la ocurrencia de errores y acelerar la entrega de nuevas versiones del <em>software</em>.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Dentro de este contexto, las herramientas de integración y entrega continua desempeñan un papel fundamental al coordinar las diferentes actividades que conforman el ciclo de desarrollo. Estas herramientas ejecutan automáticamente tareas como la compilación del código, la ejecución de pruebas, la generación de artefactos y el despliegue de aplicaciones, garantizando que cada cambio incorporado al proyecto sea validado antes de su publicación.
    p.mb-0(data-aos="fade-down") Entre las herramientas más utilizadas para este propósito se encuentra Jenkins, una plataforma de automatización de código abierto ampliamente utilizada para implementar procesos de integración continua y entrega continua. Su capacidad para integrarse con diferentes herramientas de desarrollo permite construir flujos de trabajo automatizados que fortalecen la calidad del <em>software</em> y optimizan el proceso de desarrollo.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Introducción a Jenkins
    p.mb-4(data-aos="fade-down") La automatización de procesos constituye uno de los principios fundamentales del enfoque DevOps, ya que permite reducir tareas manuales, minimizar errores y acelerar la entrega de nuevas versiones de <em>software</em>. Para lograr este propósito, se utilizan herramientas especializadas que ejecutan automáticamente actividades como la compilación del código, la ejecución de pruebas y el despliegue de aplicaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t6/img02.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") <b>Jenkins</b> es una herramienta de automatización de código abierto (<em>open source</em>) ampliamente utilizada para implementar procesos de integración continua (CI) y entrega continua (CD). Su función principal consiste en coordinar y ejecutar automáticamente diferentes tareas del ciclo de desarrollo de <em>software</em> cada vez que se detectan cambios en el código fuente.
    p(data-aos="fade-down") Jenkins puede integrarse con sistemas de control de versiones como Git, plataformas de alojamiento de repositorios como GitHub y GitLab, herramientas para la ejecución de pruebas automatizadas, tecnologías de contenedores como Docker y diferentes servicios de despliegue. Gracias a esta capacidad de integración, se convierte en un elemento central dentro de los procesos de automatización implementados en entornos DevOps.
    p.mb-4(data-aos="fade-down") Entre las principales características de Jenkins se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Automatización de procesos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ejecuta tareas repetitivas relacionadas con la construcción, las pruebas y el despliegue de aplicaciones.
          .row(numero="2" titulo="Integración con múltiples herramientas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite trabajar con plataformas y tecnologías utilizadas durante el desarrollo de <em>software</em>.
          .row(numero="3" titulo="Extensibilidad mediante complementos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incorpora funcionalidades adicionales a través de una amplia colección de plugins.
          .row(numero="4" titulo="Ejecución de tareas programadas o automáticas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Inicia procesos a partir de cambios en el código fuente o de eventos previamente definidos.
          .row(numero="5" titulo="Monitoreo de procesos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Registra el estado de las ejecuciones y facilita el seguimiento de los resultados obtenidos.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t6/img03.png', alt='')
    p.mb-4(data-aos="fade-down") La utilización de Jenkins contribuye a mejorar la calidad del <em>software</em>, reducir los tiempos de entrega y fortalecer la automatización de los procesos de integración y despliegue continuo.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t6/img05.svg', alt='')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de utilización de Jenkins
          p.mb-0(data-aos="fade-down") Un desarrollador realiza cambios en el código fuente de una aplicación y los publica en el repositorio remoto del proyecto. Jenkins detecta automáticamente la actualización, inicia la compilación del <em>software</em>, ejecuta las pruebas configuradas y, si todas las validaciones son satisfactorias, deja preparada la nueva versión para su implementación en el entorno correspondiente.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img04.jpg', alt='')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar que Jenkins automatiza diferentes actividades del ciclo de desarrollo de <em>software</em>, reduciendo la intervención manual y favoreciendo la integración y la entrega continua de aplicaciones.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Jenkins como herramienta de automatización en un flujo DevOps
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img06.svg', alt='En la figura 8 se presenta el papel de Jenkins dentro de un flujo DevOps, mostrando cómo los cambios realizados en un repositorio de código fuente activan procesos automatizados de compilación, pruebas y despliegue para generar una versión actualizada de la aplicación.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t6/img07.svg', alt='En la figura 8 se presenta el papel de Jenkins dentro de un flujo DevOps, mostrando cómo los cambios realizados en un repositorio de código fuente activan procesos automatizados de compilación, pruebas y despliegue para generar una versión actualizada de la aplicación.')
    p.mb-4(data-aos="fade-down") Jenkins desempeña un papel clave dentro de un flujo DevOps, automatizando la compilación, las pruebas y el despliegue de aplicaciones a partir de los cambios realizados en un repositorio de código fuente.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--blanca.p-4
          .row.justify-content-center.align-items-center
            .col.col-lg-10.col-12
              p Como complemento al proceso de aprendizaje, se recomienda consultar la documentación oficial de Jenkins, donde se encuentran disponibles guías, tutoriales y ejemplos relacionados con la automatización de procesos de integración y entrega continua.
            .col.col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/t6/img08.svg', alt='')
            .row.mb-0
              .col.col-lg-6.col-12
                a.anexo.mb-4.mb-lg-0(href="https://www.jenkins.io/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. Jenkins
              .col.col-lg-6.col-12.mb-4
                a.anexo.mb-4.mb-lg-0(href="https://www.jenkins.io/doc/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. Documentación de Jenkins
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Arquitectura y componentes de Jenkins
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img09.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Jenkins está diseñado para automatizar procesos relacionados con el desarrollo de <em>software</em> mediante una arquitectura flexible que permite distribuir tareas entre diferentes equipos y entornos de ejecución. Esta organización facilita la ejecución de procesos de integración continua y entrega continua, optimizando el uso de los recursos disponibles y mejorando el rendimiento de las tareas automatizadas.
        .cajon.cajon.C08.color-primario.px-4.py-2.mb-3
          p.mb-0(data-aos="fade-down") La arquitectura de Jenkins se basa en un componente principal encargado de administrar el sistema y uno o varios componentes secundarios que ejecutan los procesos definidos por el equipo de desarrollo. Gracias a esta distribución, es posible ejecutar varias tareas de forma simultánea, administrar diferentes proyectos y adaptarse a las necesidades de cada organización.
        p.mb-0(data-aos="fade-down") Los principales componentes de Jenkins se describen a continuación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Componentes principales de Jenkins
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Controller
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Es el componente principal de Jenkins. Administra la configuración del sistema, coordina la ejecución de los procesos y distribuye las tareas entre los agentes disponibles.
              tr
                td(data-aos="fade-down") Agents
                td(data-aos="fade-down") Son los equipos o servidores encargados de ejecutar las tareas enviadas por el Controller, como la compilación, las pruebas o el despliegue de aplicaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Jobs
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Representan las tareas automatizadas que Jenkins ejecuta de acuerdo con una configuración previamente definida.
              tr
                td(data-aos="fade-down") <em>pipelines</em>
                td(data-aos="fade-down") Definen el conjunto de etapas que conforman un proceso automatizado, como la construcción, las pruebas y el despliegue del <em>software</em>.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Plugins
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Complementos que amplían las funcionalidades de Jenkins e integran la herramienta con otras plataformas y tecnologías utilizadas durante el desarrollo de <em>software</em>.
    p.mb-4(data-aos="fade-down") Cada uno de estos componentes cumple una función específica dentro de la arquitectura de Jenkins y permite automatizar diferentes actividades del ciclo de desarrollo de <em>software</em> de manera organizada y eficiente.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Arquitectura general de Jenkins
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img10.svg', alt='En la figura 9 se presenta la arquitectura general de Jenkins, exponiendo el controller como componente principal que administra los procesos automatizados y coordina la ejecución de tareas en diferentes agents, apoyándose en Jobs, <em>pipelines</em> y plugins para automatizar la compilación, las pruebas y el despliegue de aplicaciones.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t6/img11.svg', alt='En la figura 9 se presenta la arquitectura general de Jenkins, exponiendo el controller como componente principal que administra los procesos automatizados y coordina la ejecución de tareas en diferentes agents, apoyándose en Jobs, <em>pipelines</em> y plugins para automatizar la compilación, las pruebas y el despliegue de aplicaciones.')
    p.mb-4(data-aos="fade-down") La comprensión de estos componentes permite identificar cómo Jenkins distribuye y coordina las diferentes actividades del proceso de integración continua. El siguiente ejemplo describe la forma en que estos elementos interactúan durante la automatización de un proyecto de desarrollo de <em>software</em>.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t6/img13.svg', alt='')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de funcionamiento
          p.mb-0(data-aos="fade-down") Una organización desarrolla varias aplicaciones de <em>software</em> de manera simultánea. El <b>Controller</b> de Jenkins administra los procesos de automatización y distribuye las tareas entre diferentes <b>Agents</b>. Mientras un agente ejecuta la compilación de una aplicación, otro realiza pruebas automatizadas y un tercero prepara el despliegue de una nueva versión. Gracias a esta distribución, los procesos se ejecutan de manera paralela, optimizando el tiempo y los recursos disponibles.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img12.jpg', alt='')
    p.mb-0(data-aos="fade-down") Este ejemplo permite identificar cómo la arquitectura de Jenkins distribuye las tareas entre sus componentes para automatizar de forma eficiente diferentes actividades del proceso de desarrollo.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Creación de <em><em>pipelines</em></em> de integración continua
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img14.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t6/img15.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") Los procesos de integración continua requieren una secuencia organizada de actividades que permitan validar automáticamente los cambios realizados al código fuente antes de incorporarlos a una nueva versión del <em>software</em>. En Jenkins, esta secuencia se implementa mediante los <em>pipelines</em>, los cuales describen las etapas que deben ejecutarse durante el proceso de automatización.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Un pipeline es un flujo de trabajo que organiza y automatiza actividades como la compilación del código, la ejecución de pruebas y la preparación de la aplicación para su implementación. Cada etapa se ejecuta de forma secuencial o paralela, de acuerdo con la configuración definida para el proyecto, permitiendo verificar que el <em>software</em> cumple con los criterios de calidad establecidos.
        p.mb-0(data-aos="fade-down") La creación de un <em>pipeline</em> consiste en definir las diferentes etapas que conforman el proceso de integración continua, especificando las tareas que Jenkins debe ejecutar automáticamente desde que se detecta un cambio en el repositorio hasta que la aplicación queda preparada para su despliegue.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Generalmente, un <em>pipeline</em> de integración continua comprende las siguientes etapas:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t6/img16.svg' alt='AvatarTop')
          h4.text-center Obtención del código fuente
          p Descarga la versión más reciente del proyecto desde el repositorio remoto.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t6/img17.svg' alt='AvatarTop')
          h4.text-center Compilación
          p Construye la aplicación utilizando el código actualizado.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t6/img18.svg' alt='AvatarTop')
          h4.text-center Ejecución de pruebas
          p Verifica el correcto funcionamiento del <em>software</em> mediante pruebas automatizadas.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t6/img19.svg' alt='AvatarTop')
          h4.text-center Generación de artefactos
          p Produce los archivos necesarios para la distribución o implementación de la aplicación.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t6/img20.svg' alt='AvatarTop')
          h4.text-center Notificación de resultados
          p Informa el estado de la ejecución y registra los resultados obtenidos durante el proceso.
    p.mb-4(data-aos="fade-down") La utilización de <em>pipelines</em> permite estandarizar los procesos de integración continua, reducir errores asociados a tareas manuales y garantizar que cada nueva versión del <em>software</em> sea validada antes de continuar con las siguientes etapas del ciclo de desarrollo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Etapas generales de un <em>pipeline</em> de integración continua
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img21.svg', alt='En la figura 10 se presentan las etapas generales de un Pipeline de integración continua, iniciando con la obtención del código fuente y continuando con la compilación, las pruebas automatizadas, la generación de artefactos y la notificación de los resultados del proceso.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t6/img22.svg', alt='En la figura 10 se presentan las etapas generales de un Pipeline de integración continua, iniciando con la obtención del código fuente y continuando con la compilación, las pruebas automatizadas, la generación de artefactos y la notificación de los resultados del proceso.')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t6/img23.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Aunque la configuración de un <em>pipeline</em> puede variar según las necesidades del proyecto, Jenkins utiliza con frecuencia un archivo denominado Jenkinsfile, donde se definen las etapas del proceso de automatización.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Un ejemplo simplificado es el siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | pipeline {
              |     agent any
              | 
              |     stages {
              |         stage('Compilación') {
              |             steps {
              |                 echo 'Compilando la aplicación...'
              |             }
              |         }
              | 
              |         stage('Pruebas') {
              |             steps {
              |                 echo 'Ejecutando pruebas...'
              |             }
              |         }
              |     }
              | }
    p.mb-4(data-aos="fade-down") Este ejemplo presenta la estructura básica de un Jenkinsfile, donde se definen dos etapas de un <em>pipeline</em>: la compilación y la ejecución de pruebas. En proyectos reales pueden incorporarse etapas adicionales relacionadas con el análisis del código, la generación de artefactos o el despliegue de la aplicación.
    .row.justify-content-center.mb-0
      .col.col-12
        .tarjeta.tarjeta--C15.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t6/img24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como complemento al proceso de aprendizaje, se recomienda consultar la documentación oficial de Jenkins sobre la creación de <em>pipelines</em>, donde se presentan ejemplos y buenas prácticas para automatizar procesos de integración continua. 
                .col-sm-auto
                  a.boton(href="https://www.jenkins.io/doc/book/pipeline/" target="_blank")
                    span Enlace <em>web</em>
                    i.fas.fa-file-video
    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Automatización de procesos de construcción, pruebas y despliegue
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img25.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La automatización de procesos permite ejecutar de forma organizada y repetitiva las diferentes actividades necesarias para construir, validar e implementar una aplicación de <em>software</em>. En el enfoque DevOps, esta automatización reduce la intervención manual, disminuye la posibilidad de errores y acelera la entrega de nuevas versiones del producto.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") A través de herramientas como Jenkins, las tareas definidas en un <em>pipeline</em> se ejecutan automáticamente cuando se detectan cambios en el código fuente. Esto permite verificar el correcto funcionamiento de la aplicación antes de su publicación, garantizando que cada versión cumpla con los requisitos de calidad establecidos.
        p.mb-0(data-aos="fade-down") Generalmente, un proceso automatizado comprende las siguientes etapas:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Automatización de procesos de construcción, pruebas y despliegue
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img26.svg', alt=' En la figura 11 se presenta el flujo de automatización de procesos CI/CD, iniciando con la construcción de la aplicación, continuando con la ejecución de pruebas automatizadas y finalizando con el despliegue de la versión validada en el entorno correspondiente.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t6/img27.svg', alt=' En la figura 11 se presenta el flujo de automatización de procesos CI/CD, iniciando con la construcción de la aplicación, continuando con la ejecución de pruebas automatizadas y finalizando con el despliegue de la versión validada en el entorno correspondiente.')
    p.mb-4(data-aos="fade-down") La automatización de estas actividades permite estandarizar el proceso de desarrollo, mejorar la calidad del <em>software</em> y reducir el tiempo requerido para entregar nuevas versiones a los usuarios.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          h4.mb-4(data-aos="fade-down") Ejemplo de automatización
          p.mb-0(data-aos="fade-down") Un desarrollador publica una nueva versión del código fuente en el repositorio del proyecto. Automáticamente, Jenkins inicia el proceso de construcción de la aplicación, ejecuta las pruebas configuradas y, si todas las validaciones son satisfactorias, despliega la nueva versión en el entorno de pruebas. Este proceso se realiza sin intervención manual, reduciendo el tiempo necesario para validar y distribuir el <em>software</em>.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img28.jpg', alt='')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar cómo la automatización de procesos fortalece la integración continua, mejora la calidad del <em>software</em> y agiliza la entrega de nuevas versiones. La implementación de estas prácticas genera beneficios que impactan positivamente el desarrollo de <em>software</em>, favoreciendo la eficiencia, la calidad y la confiabilidad de los procesos. A continuación, se presentan algunos de los principales beneficios de la automatización de procesos de construcción, pruebas y despliegue.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Beneficios de la automatización de procesos de construcción, pruebas y despliegue
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Beneficio
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reducción de errores
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disminuye las fallas ocasionadas por actividades manuales.
              tr
                td(data-aos="fade-down") Mayor rapidez
                td(data-aos="fade-down") Reduce el tiempo necesario para validar y publicar nuevas versiones.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Calidad del <em>software</em>
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite ejecutar pruebas de manera consistente en cada integración.
              tr
                td(data-aos="fade-down") Repetibilidad
                td(data-aos="fade-down") Garantiza que los procesos se ejecuten siempre bajo las mismas condiciones.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Productividad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Libera al equipo de tareas repetitivas para concentrarse en el desarrollo de nuevas funcionalidades.
    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Monitoreo y gestión de procesos CI/CD
    p.mb-4(data-aos="fade-down") La automatización de procesos no finaliza con la ejecución de las actividades de construcción, pruebas o despliegue de una aplicación. Para garantizar la calidad y confiabilidad del desarrollo de <em>software</em>, es necesario realizar un seguimiento permanente a cada una de las tareas ejecutadas dentro de los procesos de integración y entrega continua.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img29.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") El monitoreo consiste en supervisar el estado de las ejecuciones automatizadas, verificando si las tareas programadas se completan correctamente o si presentan errores que requieran atención. Por su parte, la gestión comprende el análisis de los resultados obtenidos, la administración de las ejecuciones y la implementación de acciones que permitan optimizar el funcionamiento de los procesos CI/CD.
        p.mb-0(data-aos="fade-down") Herramientas como Jenkins proporcionan diferentes mecanismos para realizar el monitoreo y la gestión de los procesos automatizados, permitiendo consultar el estado de las ejecuciones, revisar los registros (<em>logs</em>), identificar fallos y generar notificaciones cuando ocurre algún evento durante la ejecución de un <em>pipeline</em>.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Entre las principales actividades relacionadas con el monitoreo y la gestión de procesos CI/CD se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Supervisión de ejecuciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite verificar el estado de los procesos automatizados y detectar posibles fallos.
          .row(numero="2" titulo="Revisión de registros (<em>logs</em>)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita el análisis de los eventos generados durante la ejecución de los procesos.
          .row(numero="3" titulo="Gestión de notificaciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Informa oportunamente sobre el éxito o el fallo de las tareas automatizadas.
          .row(numero="4" titulo="Análisis de resultados")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite identificar oportunidades de mejora y optimizar el desempeño de los procesos.
          .row(numero="5" titulo="Seguimiento de indicadores")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita la evaluación del comportamiento de los procesos automatizados a lo largo del tiempo.
      .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t6/img30.jpg', alt='')
    p.mb-4(data-aos="fade-down") La aplicación de estas actividades contribuye a mantener la estabilidad de los procesos CI/CD y favorece la mejora continua durante el desarrollo de <em>software</em>.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          h4.mb-4(data-aos="fade-down") Ejemplo de monitoreo
          p.mb-0(data-aos="fade-down") Durante la ejecución automática de un <em>pipeline</em>, Jenkins detecta que una de las pruebas de integración no se completó correctamente. El equipo de desarrollo consulta los registros de ejecución, identifica la causa del problema y realiza las correcciones necesarias en el código fuente. Posteriormente, el <em>pipeline</em> se ejecuta nuevamente, verificando que las modificaciones solucionaron el inconveniente y permitiendo continuar con el proceso de despliegue.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img31.jpg', alt='')
    p(data-aos="fade-down") Este ejemplo permite identificar que el monitoreo y la gestión de procesos CI/CD no solo permiten detectar errores durante la automatización, sino también implementar acciones de mejora que fortalecen la calidad y confiabilidad del desarrollo de <em>software</em>.
    p.mb-4(data-aos="fade-down") La implementación de actividades de monitoreo y gestión aporta beneficios que permiten mantener la estabilidad de los procesos automatizados y mejorar continuamente su desempeño.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Actividades de monitoreo y gestión en procesos CI/CD
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Actividad
                th(data-aos="fade-down")(style= "width: 70%") Propósito
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Supervisar ejecuciones
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Verificar el estado de los procesos automatizados e identificar posibles fallos durante su ejecución.
              tr
                td(data-aos="fade-down") Revisar registros (<em>logs</em>)
                td(data-aos="fade-down") Analizar la información generada por cada ejecución para determinar el origen de posibles errores.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestionar notificaciones
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Informar oportunamente al equipo sobre el éxito o el fallo de las ejecuciones automatizadas.
              tr
                td(data-aos="fade-down") Evaluar indicadores
                td(data-aos="fade-down") Analizar el comportamiento de los procesos mediante métricas relacionadas con tiempos de ejecución, estabilidad y frecuencia de errores.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Implementar acciones de mejora
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Aplicar ajustes que permitan optimizar el rendimiento y la confiabilidad de los procesos CI/CD.
    p.mb-0(data-aos="fade-down") La aplicación de estas actividades permite fortalecer la confiabilidad de los procesos automatizados, facilitar la detección temprana de errores y promover la mejora continua durante el desarrollo de <em>software</em>.
</template>
<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
