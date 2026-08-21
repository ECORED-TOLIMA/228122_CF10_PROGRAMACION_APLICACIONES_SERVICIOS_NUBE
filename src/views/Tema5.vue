<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de versiones con Git
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> implica la realización constante de cambios sobre el código fuente, ya sea para incorporar nuevas funcionalidades, corregir errores o mejorar el rendimiento de las aplicaciones. Para administrar estas modificaciones de manera organizada y facilitar el trabajo colaborativo, se utilizan sistemas de control de versiones que permiten registrar la evolución del proyecto y mantener un historial de los cambios realizados.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Entre las herramientas de control de versiones más utilizadas se encuentra Git, un sistema distribuido que permite gestionar el código fuente, coordinar el trabajo de varios desarrolladores y recuperar versiones anteriores cuando es necesario. Su utilización favorece la trazabilidad de los cambios, reduce los conflictos durante el desarrollo y constituye un elemento fundamental dentro de las prácticas de integración continua e implementación de DevOps.
        p.mb-0(data-aos="fade-down") La gestión de versiones con Git también facilita la colaboración entre los integrantes del equipo mediante el uso de repositorios compartidos, estrategias de ramificación y mecanismos para integrar los cambios de forma controlada. Estas capacidades permiten desarrollar aplicaciones de manera más organizada, mantener la estabilidad del código y responder con mayor agilidad a las necesidades de los proyectos de <em>software</em>.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Fundamentos del control de versiones
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> implica la creación y modificación constante del código fuente durante todo el ciclo de vida de una aplicación. A medida que un proyecto evoluciona, diferentes desarrolladores pueden realizar cambios de manera simultánea, incorporar nuevas funcionalidades, corregir errores o adaptar el <em>software</em> a nuevas necesidades. En este contexto, resulta necesario contar con mecanismos que permitan registrar, organizar y controlar cada una de estas modificaciones.
    p.mb-4(data-aos="fade-down") El control de versiones es un conjunto de prácticas y herramientas que permite gestionar los cambios realizados sobre los archivos de un proyecto, conservando un historial de las modificaciones efectuadas a lo largo del tiempo. Gracias a este proceso, es posible identificar quién realizó un cambio, cuándo se efectuó y, si es necesario, recuperar versiones anteriores del <em>software</em>.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img04.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") La utilización de sistemas de control de versiones favorece el trabajo colaborativo, facilita la integración de cambios realizados por diferentes desarrolladores y reduce el riesgo de pérdida de información. Además, proporciona trazabilidad sobre la evolución del proyecto y permite mantener un registro organizado del desarrollo de las aplicaciones.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Entre las principales funciones del control de versiones se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-10.col-12
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Registrar los cambios realizados en el código fuente durante el desarrollo del proyecto.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Conservar el historial de versiones, facilitando la consulta y recuperación de estados anteriores del <em>software</em>.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Favorecer el trabajo colaborativo, permitiendo que varios desarrolladores trabajen sobre un mismo proyecto de forma organizada.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Controlar los cambios, identificando las modificaciones realizadas en cada versión.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Facilitar la recuperación del código, en caso de errores, pérdidas de información o necesidad de volver a una versión anterior.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Funcionamiento general del control de versiones
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img05.svg', alt='En la figura 5 se presenta el funcionamiento general del control de versiones mediante una secuencia de versiones de un proyecto de <em>software</em>, conservando el registro histórico de los cambios realizados y la posibilidad de acceder a versiones anteriores durante el desarrollo.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img06.svg', alt='En la figura 5 se presenta el funcionamiento general del control de versiones mediante una secuencia de versiones de un proyecto de <em>software</em>, conservando el registro histórico de los cambios realizados y la posibilidad de acceder a versiones anteriores durante el desarrollo.')
    p.mb-0(data-aos="fade-down") El control de versiones registra la evolución de un proyecto de <em>software</em>, conservando el historial de los cambios realizados y permitiendo recuperar versiones anteriores cuando sea necesario.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Git como soporte para la integración continua
    p.mb-4(data-aos="fade-down") La integración continua requiere que los cambios realizados al código fuente sean incorporados de forma frecuente, organizada y segura dentro de un repositorio compartido. Para lograrlo, se utilizan sistemas de control de versiones como Git, los cuales permiten registrar las modificaciones realizadas por los desarrolladores, mantener un historial de cambios y facilitar el trabajo colaborativo durante el desarrollo de <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img07.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") En un entorno de integración continua, Git actúa como el punto de partida del proceso automatizado. Cada vez que un desarrollador incorpora cambios al repositorio, estos pueden activar procesos de compilación, ejecución de pruebas y validación del <em>software</em> mediante herramientas de automatización. De esta manera, es posible identificar errores de forma temprana y garantizar que el código integrado cumpla con los criterios de calidad establecidos.
        p.mb-0(data-aos="fade-down") El uso de Git como soporte para la integración continua ofrece, entre otras, las siguientes ventajas:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Registro de cambios")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conserva el historial de las modificaciones realizadas sobre el código fuente.
          .row(numero="2" titulo="Trabajo colaborativo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite que varios desarrolladores participen simultáneamente en un mismo proyecto.
          .row(numero="3" titulo="Integración de cambios")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita la incorporación de nuevas funcionalidades mediante procesos controlados.
          .row(numero="4" titulo="Trazabilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite identificar quién realizó cada modificación y en qué momento.
          .row(numero="5" titulo="Automatización")
            .col-12.mb-4.mb-md-0
              p.mb-0 Posibilita la ejecución automática de procesos de construcción, pruebas e integración cuando se incorporan cambios al repositorio.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img08.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Como ejemplo, algunos de los comandos básicos utilizados para registrar cambios en Git son los siguientes:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t5/img09.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 git add
            h5.t2.mb-2 git add
            p.mb-0 Agrega los archivos modificados al área de preparación (staging).
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t5/img10.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 git commit
            h5.t2.mb-2 git commit
            p.mb-0 Registra los cambios realizados en el repositorio local.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t5/img11.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 git push
            h5.t2.mb-2 git push
            p.mb-0 Envía los cambios registrados al repositorio remoto.
    p.mb-4(data-aos="fade-down") Estos comandos forman parte del flujo de trabajo habitual en Git y constituyen el punto de partida para los procesos de integración continua implementados en los proyectos de desarrollo de <em>software</em>.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t5/img13.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de integración entre Git y CI 
          p.mb-0(data-aos="fade-down") Un desarrollador realiza modificaciones en el código fuente de una aplicación y registra los cambios mediante un git commit. Posteriormente, utiliza git push para enviar la nueva versión al repositorio remoto. A partir de esta acción, una herramienta de integración continua inicia automáticamente la compilación de la aplicación y la ejecución de las pruebas definidas para verificar que los cambios puedan integrarse correctamente al proyecto.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img12.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar que Git no solo permite gestionar versiones del código fuente, sino que también actúa como el mecanismo que desencadena los procesos automatizados de integración continua dentro del enfoque DevOps.
    .row.justify-content-center.mb-0
      .col.col-12
        .tarjeta.tarjeta--C15.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/img14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como complemento al proceso de aprendizaje, se recomienda explorar la plataforma <b>Learn Git Branching</b>, la cual ofrece ejercicios interactivos para comprender el funcionamiento de Git y practicar operaciones relacionadas con el control de versiones, la gestión de ramas y la integración de cambios en proyectos de desarrollo de <em>software</em>.
                .col-sm-auto
                  a.boton(href="https://learngitbranching.js.org/?locale=es_ES" target="_blank")
                    span Enlace <em>web</em>
                    i.fas.fa-file-video
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Repositorios remotos con GitHub y GitLab
    p.mb-4(data-aos="fade-down") El desarrollo de aplicaciones de <em>software</em> suele realizarse de manera colaborativa, involucrando equipos de trabajo que participan en diferentes etapas del proyecto. Para facilitar esta colaboración, resulta necesario disponer de un espacio centralizado donde se almacene el código fuente y se registren los cambios realizados por cada integrante del equipo. En este contexto, los repositorios remotos constituyen una herramienta fundamental para la gestión de proyectos de <em>software</em>.
    figure.mb-4
      img(src='@/assets/curso/temas/t5/img15.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Un repositorio remoto es un espacio de almacenamiento ubicado en un servidor al que pueden acceder los desarrolladores autorizados mediante una conexión a Internet. A diferencia del repositorio local, que se encuentra en el equipo de cada desarrollador, el repositorio remoto centraliza la información del proyecto y permite compartir, sincronizar y administrar las diferentes versiones del código fuente.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img16.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Las plataformas GitHub y GitLab son dos de las soluciones más utilizadas para alojar repositorios remotos basados en Git. Además de almacenar el código fuente, estas plataformas proporcionan herramientas que facilitan el trabajo colaborativo, la administración de proyectos, la revisión de cambios y la integración con procesos de automatización propios del enfoque DevOps.
        p.mb-0(data-aos="fade-down") El trabajo con un repositorio remoto sigue un proceso organizado que permite mantener sincronizado el código fuente entre todos los integrantes del equipo de desarrollo. De manera general, este proceso comprende las siguientes etapas:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img17.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img18.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Creación del repositorio
                  p Se crea un repositorio remoto en una plataforma como GitHub o GitLab para almacenar el proyecto.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img19.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Clonación del repositorio
                  p Cada desarrollador obtiene una copia del proyecto en su equipo mediante Git.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img20.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Desarrollo de funcionalidades
                  p Cada integrante realiza modificaciones o incorpora nuevas características en su repositorio local.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img21.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Registro de cambios
                  p Las modificaciones se guardan mediante confirmaciones (<em>commits</em>), conservando el historial de versiones.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img22.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Publicación de cambios
                  p Los cambios se envían al repositorio remoto para que estén disponibles para los demás integrantes del equipo.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img23.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Integración de versiones
                  p Los cambios son revisados e incorporados al proyecto principal, manteniendo una única versión actualizada del código.
    p.mb-4(data-aos="fade-down") A continuación, se presenta el funcionamiento general de un repositorio remoto durante el desarrollo colaborativo de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Funcionamiento general de un repositorio remoto
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img24.svg', alt=' En la figura 6 se presenta el funcionamiento general de un repositorio remoto, donde varios desarrolladores trabajan en sus repositorios locales y sincronizan los cambios con un repositorio central alojado en GitHub o GitLab, permitiendo mantener un proyecto actualizado y compartido para todo el equipo.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img25.svg', alt=' En la figura 6 se presenta el funcionamiento general de un repositorio remoto, donde varios desarrolladores trabajan en sus repositorios locales y sincronizan los cambios con un repositorio central alojado en GitHub o GitLab, permitiendo mantener un proyecto actualizado y compartido para todo el equipo.')
    p.mb-4(data-aos="fade-down") Además del almacenamiento del código fuente, GitHub y GitLab incorporan diferentes funcionalidades que apoyan el desarrollo colaborativo de aplicaciones.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Funcionalidades de GitHub y GitLab
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Funcionalidad
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Repositorios remotos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Almacenan el código fuente de los proyectos y permiten compartirlo con otros desarrolladores.
              tr
                td(data-aos="fade-down") Gestión de ramas
                td(data-aos="fade-down") Facilitan el desarrollo paralelo de nuevas funcionalidades o correcciones sin afectar la versión principal del proyecto.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Control de versiones
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Conservan el historial de cambios realizados sobre el código fuente.
              tr
                td(data-aos="fade-down") Revisión de código
                td(data-aos="fade-down") Permiten analizar y aprobar modificaciones antes de incorporarlas al proyecto principal.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Trabajo colaborativo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilitan la participación de varios desarrolladores mediante mecanismos de sincronización y administración de cambios.
              tr
                td(data-aos="fade-down") Integración con herramientas DevOps
                td(data-aos="fade-down") Permiten conectar el repositorio con herramientas de integración, pruebas y despliegue continuo para automatizar procesos de desarrollo.
    p.mb-4(data-aos="fade-down") Aunque ambas plataformas ofrecen funcionalidades similares, presentan algunas características que pueden adaptarse a diferentes necesidades de desarrollo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Comparación general entre GitHub y GitLab.
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 30%") GitHub
                th(data-aos="fade-down")(style= "width: 50%") GitLab
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Enfoque principal
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Desarrollo colaborativo y alojamiento de proyectos de <em>software</em>.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Desarrollo colaborativo con herramientas integradas para DevOps.
              tr
                td(data-aos="fade-down") Integración con Git
                td(data-aos="fade-down") Sí
                td(data-aos="fade-down") Sí
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestión de repositorios
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Sí
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Sí
              tr
                td(data-aos="fade-down") Gestión de ramas
                td(data-aos="fade-down") Sí
                td(data-aos="fade-down") Sí
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integración con procesos CI/CD
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disponible mediante herramientas y servicios integrados.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Incorpora funcionalidades CI/CD de forma nativa.
    p.mb-4(data-aos="fade-down") No se trata de determinar cuál plataforma es mejor, sino de reconocer que ambas permiten gestionar repositorios remotos y apoyar el desarrollo colaborativo de aplicaciones mediante Git.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t5/img27.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de utilización de un repositorio remoto
          p.mb-0(data-aos="fade-down") Un equipo desarrolla una aplicación para la gestión de inventarios utilizando un repositorio remoto alojado en GitHub. Cada desarrollador crea una copia local del proyecto y trabaja en nuevas funcionalidades de manera independiente. Una vez finalizadas las modificaciones, registra los cambios mediante Git y los publica en el repositorio remoto. Posteriormente, el equipo revisa las contribuciones y las integra al proyecto principal, garantizando que todos los integrantes trabajen sobre una versión actualizada del código fuente.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img26.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar que los repositorios remotos facilitan el trabajo colaborativo, centralizan la gestión del código fuente y permiten mantener un historial organizado de las diferentes versiones del proyecto.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--blanca.p-4
          .row.justify-content-center.align-items-center
            .col.col-lg-10.col-12
              p Como complemento al proceso de aprendizaje, se recomienda consultar los recursos oficiales de GitHub y GitLab, donde se encuentran disponibles guías, tutoriales y documentación sobre la creación de repositorios, la colaboración entre desarrolladores y la administración de proyectos mediante Git.
            .col.col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/t5/img28.svg', alt='Imagen decorativa')
            .row.mb-0
              .col.col-lg-6.col-12
                a.anexo.mb-4.mb-lg-0(href="https://github.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. GitHub
              .col.col-lg-6.col-12.mb-4
                a.anexo.mb-4.mb-lg-0(href="https://docs.github.com/es" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. Documentación de GitHub
              .col.col-lg-6.col-12
                a.anexo.mb-4.mb-lg-0(href="https://about.gitlab.com/es/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. GitLab
              .col.col-lg-6.col-12
                a.anexo.mb-4.mb-lg-0(href="https://docs.gitlab.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em></b>. Documentación de GitLab
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Estrategia de ramificación GitFlow
    p.mb-4(data-aos="fade-down") Durante el desarrollo de una aplicación es común que varios integrantes del equipo trabajen al mismo tiempo en nuevas funcionalidades, correcciones de errores y mejoras del sistema. Si todas estas modificaciones se realizaran directamente sobre la versión principal del proyecto, aumentaría el riesgo de generar conflictos y afectar el funcionamiento de la aplicación.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img29.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Para evitar esta situación, se utilizan estrategias de ramificación que permiten organizar el desarrollo del <em>software</em> de manera controlada. Una de las más utilizadas es GitFlow, un modelo de trabajo que define diferentes ramas (<em>branches</em>) para desarrollar nuevas funcionalidades, preparar versiones y corregir errores sin comprometer la estabilidad del proyecto.
    p.mb-4(data-aos="fade-down") Cada rama cumple una función específica dentro del proceso de desarrollo, permitiendo que los integrantes del equipo trabajen simultáneamente y que los cambios se integren de forma organizada.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Principales ramas de la estrategia GitFlow
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Rama
                th(data-aos="fade-down")(style= "width: 70%") Propósito
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") main
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Contiene la versión estable del proyecto, lista para ser utilizada por los usuarios.
              tr
                td(data-aos="fade-down") develop
                td(data-aos="fade-down") Reúne los cambios que se encuentran en desarrollo antes de incorporarlos a la versión estable.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") feature
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Se utiliza para desarrollar nuevas funcionalidades de forma independiente.
              tr
                td(data-aos="fade-down") release
                td(data-aos="fade-down") Permite preparar una nueva versión del <em>software</em> antes de su publicación.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") hotfix
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Se emplea para corregir errores críticos detectados en la versión que se encuentra en producción.
    p.mb-4.text-center(data-aos="fade-down") El funcionamiento de GitFlow puede comprenderse mediante un ejemplo sencillo.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t5/img31.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Supóngase que un equipo desarrolla una aplicación para la gestión de inventarios. Inicialmente existe una versión estable del sistema, la cual se encuentra almacenada en la rama main.
          p.mb-4(data-aos="fade-down") Cuando el equipo necesita incorporar una nueva funcionalidad, como el registro de proveedores, no modifica directamente la rama main. En su lugar, crea una rama feature, donde desarrolla y prueba la nueva funcionalidad de manera independiente.
          .cajon.cajon.C13.p-4.mb-4
            p Una vez finalizado el desarrollo, los cambios se integran en la rama develop, que reúne todas las funcionalidades que harán parte de la siguiente versión del sistema.
            p.mb-0 Cuando el proyecto está listo para publicarse, se crea una rama release, destinada a realizar las pruebas finales y los últimos ajustes antes de liberar la nueva versión.
          p(data-aos="fade-down") Finalmente, cuando la versión ha sido validada, esta se incorpora a la rama main, convirtiéndose en la nueva versión estable del proyecto.
          p.mb-0(data-aos="fade-down") Si posteriormente se detecta un error crítico en producción, se crea una rama hotfix a partir de main, se corrige el problema y la solución se incorpora nuevamente tanto a main como a develop, garantizando que la corrección también forme parte de las futuras versiones del <em>software</em>.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img30.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Flujo general de la estrategia de ramificación GitFlow
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/t5/img32.svg', alt='En la figura 7 se presenta el flujo general de las ramas en la estrategia GitFlow, exponiendo cómo las ramas feature se integran en develop, cómo se crea una rama release para preparar una nueva versión y cómo una rama hotfix permite corregir errores en la versión estable antes de integrar los cambios nuevamente al proceso de desarrollo.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t5/img32.svg', alt='En la figura 7 se presenta el flujo general de las ramas en la estrategia GitFlow, exponiendo cómo las ramas feature se integran en develop, cómo se crea una rama release para preparar una nueva versión y cómo una rama hotfix permite corregir errores en la versión estable antes de integrar los cambios nuevamente al proceso de desarrollo.')
          .col-auto
            a.anexo.mb-5(:href="obtenerLink('/downloads/Anexo_Flujo_general_de_la_estrategia_de_ramificación_GitFlow.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Flujo general de la estrategia de ramificación GitFlow
    p.mb-4(data-aos="fade-down") GitFlow organiza el trabajo del equipo mediante ramas con propósitos específicos, permitiendo desarrollar, probar y liberar nuevas versiones de <em>software</em> de manera segura y controlada.
    .row.justify-content-center.mb-0
      .col.col-12
        .tarjeta.tarjeta--C15.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/img14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como complemento al proceso de aprendizaje, se recomienda explorar la plataforma interactiva <b>Learn Git Branching</b>, donde es posible practicar el uso de ramas, fusiones e integración de cambios mediante ejercicios guiados en un entorno simulado. 
                .col-sm-auto
                  a.boton(href="https://learngitbranching.js.org/?locale=es_ES" target="_blank")
                    span Enlace <em>web</em>
                    i.fas.fa-file-video
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Buenas prácticas en la gestión de código fuente
    p.mb-4(data-aos="fade-down") La gestión del código fuente no solo depende del uso de herramientas como Git o de plataformas para alojar repositorios remotos. También requiere la aplicación de buenas prácticas que favorezcan la organización del proyecto, faciliten el trabajo colaborativo y contribuyan a mantener la calidad del <em>software</em> durante todo su ciclo de desarrollo.
    figure.mb-4
      img(src='@/assets/curso/temas/t5/img33.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La adopción de estas prácticas permite reducir errores, mejorar la trazabilidad de los cambios y facilitar la integración del trabajo realizado por los diferentes integrantes del equipo de desarrollo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Buenas prácticas en la gestión del código fuente
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Buena práctica
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Realizar <em>commits</em> frecuentes
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Registrar los cambios de manera periódica para mantener un historial organizado y facilitar la recuperación de versiones.
              tr
                td(data-aos="fade-down") Escribir mensajes descriptivos
                td(data-aos="fade-down") Utilizar mensajes claros que indiquen el propósito de cada cambio realizado en el código fuente.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Trabajar en ramas independientes
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Desarrollar nuevas funcionalidades o corregir errores en ramas específicas antes de integrarlas al proyecto principal.
              tr
                td(data-aos="fade-down") Mantener el repositorio sincronizado
                td(data-aos="fade-down") Actualizar periódicamente el repositorio local con los cambios realizados por otros integrantes del equipo.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Revisar el código antes de integrarlo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Verificar que las modificaciones cumplan con los requisitos del proyecto antes de incorporarlas a la rama principal.
              tr
                td(data-aos="fade-down") Evitar almacenar información sensible
                td(data-aos="fade-down") No incluir contraseñas, claves de acceso o información confidencial dentro del código fuente o del repositorio.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Documentar los cambios importantes
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Registrar las modificaciones relevantes para facilitar el mantenimiento y la comprensión del proyecto.
    p.mb-4(data-aos="fade-down") La aplicación de estas buenas prácticas favorece el desarrollo colaborativo, fortalece la calidad del <em>software</em> y facilita la administración del código fuente durante todas las etapas del proyecto.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t5/img35.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de aplicación
          p.mb-0(data-aos="fade-down") Un equipo de desarrollo implementa una nueva funcionalidad para una aplicación <em>web</em>. Cada desarrollador trabaja en una rama independiente, registra sus cambios mediante <em>commits</em> con mensajes descriptivos y sincroniza periódicamente su repositorio local con el repositorio remoto. Antes de integrar la funcionalidad al proyecto principal, el equipo revisa el código para verificar su correcto funcionamiento y garantizar que cumple con los estándares definidos para el proyecto.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img34.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar que la aplicación de buenas prácticas facilita la colaboración entre los integrantes del equipo, mejora la organización del código fuente y contribuye al desarrollo de aplicaciones más confiables.
    .row.justify-content-center.mb-0
      .col.col-12
        .tarjeta.tarjeta--C15.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/img36.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como complemento al proceso de aprendizaje, se recomienda consultar la guía oficial de buenas prácticas para el uso de Git disponible en la documentación de GitHub, donde se presentan recomendaciones para la gestión de repositorios, ramas y colaboración en proyectos de desarrollo de <em>software</em>.
                .col-sm-auto
                  a.boton(href="https://docs.github.com/es" target="_blank")
                    span Enlace <em>web</em>
                    i.fas.fa-file-video
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
