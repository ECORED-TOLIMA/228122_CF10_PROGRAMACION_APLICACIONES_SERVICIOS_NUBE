<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Integración, entrega y despliegue continuo (CI/CD)
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El desarrollo moderno de aplicaciones requiere procesos que permitan incorporar cambios al <em>software</em> de manera ágil, segura y con altos niveles de calidad. En este contexto, las prácticas de integración continua, entrega continua y despliegue continuo, conocidas de forma conjunta como CI/CD, constituyen un conjunto de estrategias que automatizan diferentes actividades del ciclo de vida del desarrollo, facilitando la construcción, validación y distribución de las aplicaciones.
    p.mb-4(data-aos="fade-down") La adopción de CI/CD permite que los cambios realizados al código fuente sean integrados, verificados y preparados para su implementación de manera frecuente, reduciendo los tiempos de entrega y disminuyendo los errores asociados a los procesos manuales. Estas prácticas fortalecen la colaboración entre los equipos de desarrollo y operaciones, favoreciendo la entrega continua de <em>software</em> y la mejora permanente de los procesos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos DevOps, la integración, la entrega y el despliegue continuo se apoyan en herramientas que automatizan actividades como la compilación del código, la ejecución de pruebas, la generación de artefactos y la implementación de aplicaciones en diferentes entornos. Esta automatización contribuye a incrementar la eficiencia del desarrollo, mejorar la calidad del <em>software</em> y responder con mayor rapidez a las necesidades de las organizaciones y de los usuarios.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Integración continua (CI)
    p.mb-4(data-aos="fade-down") La integración continua <b>(Continuous Integration - CI)</b> es una práctica de desarrollo de <em>software</em> que consiste en integrar de manera frecuente los cambios realizados al código fuente dentro de un repositorio compartido. Cada vez que un desarrollador incorpora nuevas funcionalidades o realiza modificaciones, estos cambios son verificados automáticamente mediante procesos de compilación y pruebas, con el propósito de identificar errores de forma temprana.
    figure.mb-4
      img(src='@/assets/curso/temas/t4/img02.png', alt='Imagen decorativa')
    p(data-aos="fade-down") La integración continua favorece el trabajo colaborativo entre los integrantes del equipo de desarrollo, ya que permite detectar incompatibilidades antes de que afecten el funcionamiento de la aplicación. De esta manera, se reducen los conflictos durante la integración del código y se incrementa la estabilidad del proyecto.
    p.mb-4(data-aos="fade-down") Generalmente, el proceso de integración continua comprende las siguientes actividades:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C15")
          .row(titulo="Incorporación de cambios al repositorio")
            .col-12.mb-0.mb-md-0
              p Los desarrolladores integran periódicamente las modificaciones realizadas al código fuente.
          .row(titulo="Compilación automática")
            .col-12.mb-0.mb-md-0
              p El sistema construye una nueva versión de la aplicación utilizando el código actualizado.
          .row(titulo="Ejecución de pruebas automatizadas")
            .col-12.mb-0.mb-md-0
              p Se verifica el correcto funcionamiento del <em>software</em> mediante pruebas previamente definidas.
          .row(titulo="Generación de resultados")
            .col-12.mb-0.mb-md-0
              p El sistema informa si la integración fue exitosa o si existen errores que deben corregirse antes de continuar con el proceso.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img03.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La implementación de la integración continua permite detectar problemas en etapas tempranas del desarrollo, mejorar la calidad del <em>software</em> y preparar la aplicación para los procesos de entrega y despliegue continuo.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img05.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de integración continua
          p.mb-0(data-aos="fade-down") Un desarrollador incorpora una nueva funcionalidad a una aplicación y registra los cambios en el repositorio del proyecto. De forma automática, el sistema inicia la compilación del código y ejecuta las pruebas definidas. Si todas las verificaciones son satisfactorias, la nueva versión queda disponible para continuar con las siguientes etapas del proceso de desarrollo.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img04.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Este ejemplo permite identificar que la integración continua automatiza la validación de los cambios realizados al <em>software</em>, favoreciendo la detección temprana de errores y fortaleciendo la calidad del producto desarrollado.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Entrega continua (CD)
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img06.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") La entrega continua (Continuous Delivery - CD) es una práctica que amplía el proceso de integración continua, preparando automáticamente las aplicaciones para su implementación en diferentes entornos.
        p(data-aos="fade-down") Después de integrar y verificar los cambios en el código fuente, el <em>software</em> queda listo para ser entregado de manera rápida, confiable y controlada cuando la organización lo requiera.
        p(data-aos="fade-down") En la entrega continua, los procesos de construcción, validación y preparación de la aplicación se realizan de forma automatizada. Sin embargo, la implementación en el entorno de producción suele requerir una aprobación o decisión por parte del equipo responsable antes de publicar la nueva versión para los usuarios.
        p.mb-0(data-aos="fade-down") Generalmente, la entrega continua comprende las siguientes actividades:
    .desktop
      .row.mb-0
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img07.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Preparación de la aplicación
                p.mb-0 Genera una versión estable del <em>software</em> después de superar las pruebas de integración.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img08.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Ejecución de pruebas adicionales
                p.mb-0 Verifica aspectos funcionales, de rendimiento o seguridad antes de la implementación.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img09.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Generación de artefactos de despliegue
                p.mb-0 Posibilita crear nuevas clases a partir de otras existentes, reutilizando atributos y métodos comunes para facilitar el desarrollo y mantenimiento del <em>software</em>.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img10.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Disponibilidad para la implementación
                p.mb-0 Deja la aplicación preparada para ser desplegada cuando se autorice su publicación.
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img11.png', alt='Imagen decorativa')
            h4 Preparación de la aplicación
            p.mb-0 Genera una versión estable del <em>software</em> después de superar las pruebas de integración.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img12.png', alt='Imagen decorativa')
            h4 Ejecución de pruebas adicionales
            p.mb-0 Verifica aspectos funcionales, de rendimiento o seguridad antes de la implementación.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img13.png', alt='Imagen decorativa')
            h4 Generación de artefactos de despliegue
            p.mb-0 Posibilita crear nuevas clases a partir de otras existentes, reutilizando atributos y métodos comunes para facilitar el desarrollo y mantenimiento del <em>software</em>.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img14.png', alt='Imagen decorativa')
            h4 Disponibilidad para la implementación
            p.mb-0 Deja la aplicación preparada para ser desplegada cuando se autorice su publicación.
    p.mb-4.mt-4(data-aos="fade-down") La entrega continua permite reducir los tiempos necesarios para publicar nuevas versiones del <em>software</em>, mejorar la calidad de las implementaciones y disminuir los riesgos asociados a los procesos manuales.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img16.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de entrega continua
          p.mb-0(data-aos="fade-down") Después de validar una nueva versión de una aplicación, el sistema genera automáticamente el paquete de despliegue y lo almacena en un repositorio. La versión queda preparada para ser implementada en el entorno de producción una vez el responsable del proyecto autorice su publicación.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img15.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Este ejemplo permite identificar que la entrega continua automatiza la preparación del <em>software</em> para su implementación, garantizando que cada versión validada se encuentre disponible para ser desplegada de manera rápida y controlada.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Despliegue continuo
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img17.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El despliegue continuo (Continuous Deployment) es una práctica mediante la cual las nuevas versiones de una aplicación se implementan automáticamente en el entorno de producción una vez han superado todas las pruebas y validaciones establecidas. A diferencia de la entrega continua, este proceso no requiere una aprobación manual para publicar los cambios, ya que la implementación se realiza de forma automatizada.
        .cajon.cajon.C08.color-primario.px-4.py-2.mb-3
          p.mb-0(data-aos="fade-down") El despliegue continuo permite que las mejoras, correcciones y nuevas funcionalidades lleguen a los usuarios con mayor rapidez, manteniendo un flujo permanente de actualizaciones. Para lograrlo, es necesario contar con procesos de automatización confiables y mecanismos de validación que garanticen la estabilidad y el correcto funcionamiento de la aplicación antes de su publicación.
        p.mb-0(data-aos="fade-down") Generalmente, el despliegue continuo comprende las siguientes actividades:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t4/img18.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C07.px-5.py-3
            .p-4
              h4 Validación automática del <em>software</em>
              p.mb-0 Verifica que la aplicación haya superado satisfactoriamente las pruebas definidas.
              br
      .col.col-lg-6.col-12.mb-4.mb-lg-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t4/img19.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C07.px-5.py-3
            .p-4
              h4 Implementación automática
              p.mb-0 Publica la nueva versión en el entorno de producción sin intervención manual.
              br
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t4/img20.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C07.px-5.py-3
            .p-4
              h4 Verificación del funcionamiento
              p.mb-0 Comprueba que la aplicación opere correctamente después del despliegue.
              br
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t4/img21.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C07.px-5.py-3
            .p-4
              h4 Monitoreo continuo
              p.mb-0 Supervisa el comportamiento de la aplicación para identificar posibles incidentes y facilitar su atención oportuna.
    p.mb-4(data-aos="fade-down") La implementación del despliegue continuo permite reducir los tiempos de publicación, agilizar la entrega de nuevas funcionalidades y fortalecer la capacidad de respuesta frente a las necesidades de los usuarios y de las organizaciones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img23.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de despliegue continuo
          p.mb-0(data-aos="fade-down") Una aplicación supera automáticamente las pruebas de integración, seguridad y funcionamiento. Una vez finalizadas estas validaciones, el sistema publica la nueva versión en el entorno de producción sin intervención del equipo de desarrollo. Posteriormente, el comportamiento de la aplicación es monitoreado para verificar que el servicio continúe funcionando correctamente.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img22.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Este ejemplo permite identificar que el despliegue continuo automatiza la publicación de nuevas versiones del <em>software</em>, favoreciendo actualizaciones frecuentes y reduciendo el tiempo requerido para poner las aplicaciones a disposición de los usuarios. A continuación, se resumen las principales diferencias entre la integración continua, la entrega continua y el despliegue continuo, destacando el propósito de cada práctica dentro del enfoque DevOps.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Diferencias entre integración continua, entrega continua y despliegue continuo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Práctica
                th(data-aos="fade-down")(style= "width: 30%") Objetivo principal
                th(data-aos="fade-down")(style= "width: 50%") Implementación en producción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integración continua (CI)
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integrar y validar los cambios en el código fuente.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") No aplica.
              tr
                td(data-aos="fade-down") Entrega continua (CD)
                td(data-aos="fade-down") Preparar automáticamente la aplicación para su implementación.
                td(data-aos="fade-down") Requiere aprobación manual para publicar la versión.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Despliegue continuo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Publicar automáticamente la aplicación una vez superadas las validaciones.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Se realiza de forma automática, sin intervención manual.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Beneficios de la automatización de procesos CI/CD
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img24.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La automatización de los procesos de integración, entrega y despliegue continuo constituye uno de los principales fundamentos del enfoque DevOps. Mediante la ejecución automática de actividades como la compilación, las pruebas, la generación de artefactos y la implementación de aplicaciones, es posible optimizar el desarrollo de <em>software</em>, reducir la intervención manual y mejorar la confiabilidad de los procesos.
    p.mb-4(data-aos="fade-down") La implementación de prácticas CI/CD permite responder con mayor rapidez a los cambios en los proyectos, fortalecer la colaboración entre los equipos de desarrollo y operaciones y garantizar que las nuevas versiones del <em>software</em> sean entregadas con mayores niveles de calidad y estabilidad.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Beneficios de la automatización de procesos CI/CD
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Beneficio
                th(data-aos="fade-down")(style= "width: 30%") Descripción
                th(data-aos="fade-down")(style= "width: 50%") Impacto en el desarrollo de <em>software</em>
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reducción de errores
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disminuye las fallas ocasionadas por actividades manuales repetitivas.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Incrementa la calidad y confiabilidad del <em>software</em>.
              tr
                td(data-aos="fade-down") Mayor rapidez en las entregas
                td(data-aos="fade-down") Automatiza procesos de construcción, pruebas e implementación.
                td(data-aos="fade-down") Reduce el tiempo necesario para publicar nuevas versiones.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Mejora de la calidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite ejecutar pruebas de manera frecuente y consistente.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la detección temprana de errores y defectos.
              tr
                td(data-aos="fade-down") Trabajo colaborativo
                td(data-aos="fade-down") Integra las actividades de desarrollo y operaciones mediante procesos compartidos.
                td(data-aos="fade-down") Favorece la comunicación y la coordinación entre los equipos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Eficiencia operativa
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Optimiza el uso de recursos al disminuir tareas manuales y repetitivas.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Incrementa la productividad durante el ciclo de desarrollo.
              tr
                td(data-aos="fade-down") Mayor confiabilidad en los despliegues
                td(data-aos="fade-down") Automatiza la implementación de aplicaciones utilizando procesos previamente validados.
                td(data-aos="fade-down") Reduce riesgos durante la publicación de nuevas versiones.
    p.mb-0(data-aos="fade-down") La automatización de procesos CI/CD constituye un elemento clave para el desarrollo moderno de aplicaciones, ya que facilita la integración de cambios, fortalece la calidad del <em>software</em> y mejora la capacidad de respuesta frente a las necesidades de las organizaciones y de los usuarios.
    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Flujo de trabajo en entornos DevOps
    p.mb-4(data-aos="fade-down") El flujo de trabajo en DevOps integra las actividades de desarrollo, pruebas, implementación y operación mediante procesos automatizados que favorecen la entrega continua de <em>software</em>. Este enfoque permite que los cambios realizados al código fuente avancen de forma ordenada a través de las diferentes etapas del ciclo de desarrollo, garantizando la calidad de las aplicaciones antes de su publicación.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-0
          p.mb-0(data-aos="fade-down") En un entorno DevOps, cada modificación incorporada al proyecto inicia una secuencia de actividades que incluye la integración del código, la ejecución de pruebas automatizadas, la preparación de nuevas versiones y su implementación en los entornos correspondientes. Una vez la aplicación se encuentra en producción, su funcionamiento es monitoreado continuamente para identificar oportunidades de mejora y atender oportunamente posibles incidentes.
    p.mb-4(data-aos="fade-down") De manera general, el flujo de trabajo comprende las siguientes etapas:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img25.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img26.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Desarrollo
                  p Implementación de nuevas funcionalidades o corrección de errores en el código fuente.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img27.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Integración continua
                  p Incorporación y validación automática de los cambios realizados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img28.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Pruebas automatizadas
                  p Verificación del funcionamiento de la aplicación mediante diferentes tipos de pruebas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img29.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Entrega continua
                  p Preparación de la aplicación para su implementación en los diferentes entornos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img30.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Despliegue continuo
                  p Publicación automática de nuevas versiones cuando se cumplen los criterios establecidos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img31.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Monitoreo
                  p Supervisión permanente del comportamiento de la aplicación para garantizar su disponibilidad, rendimiento y estabilidad.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un esquema general del flujo de trabajo utilizado en un entorno DevOps.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Flujo de trabajo en un entorno DevOps
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img32.svg', alt='En la figura 4 se presenta el flujo de trabajo en un entorno DevOps, el cual inicia con el desarrollo del código, continúa con la integración continua, las pruebas automatizadas, la entrega continua y el despliegue continuo, finalizando con el monitoreo y la retroalimentación para dar inicio a un nuevo ciclo de mejora.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img33.svg', alt='En la figura 4 se presenta el flujo de trabajo en un entorno DevOps, el cual inicia con el desarrollo del código, continúa con la integración continua, las pruebas automatizadas, la entrega continua y el despliegue continuo, finalizando con el monitoreo y la retroalimentación para dar inicio a un nuevo ciclo de mejora.')
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        p.mb-0(data-aos="fade-down") Este proceso permite integrar el desarrollo, las pruebas, la implementación y el monitoreo de las aplicaciones dentro de un ciclo continuo orientado a la mejora permanente del <em>software</em>.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
