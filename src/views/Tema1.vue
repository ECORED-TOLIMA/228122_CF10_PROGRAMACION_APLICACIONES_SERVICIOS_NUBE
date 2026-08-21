<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a DevOps
    p.mb-4(data-aos="fade-down") El desarrollo de <em>software</em> ha evolucionado para responder a las necesidades de organizaciones que requieren entregar aplicaciones de manera más rápida, confiable y alineada con las expectativas de los usuarios. En este contexto, DevOps surge como un enfoque que integra personas, procesos y herramientas con el propósito de fortalecer la colaboración entre los equipos de desarrollo y operaciones, optimizando el ciclo de vida del <em>software</em> desde la planificación hasta el despliegue y mantenimiento.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El término DevOps proviene de la unión de las palabras Development (desarrollo) y Operations (operaciones). Más que una tecnología o una herramienta específica, representa una cultura de trabajo basada en la comunicación, la colaboración y la automatización de actividades, con el fin de mejorar la calidad del <em>software</em> y acelerar su entrega. Este enfoque promueve la participación conjunta de los diferentes equipos involucrados en el desarrollo, favoreciendo la detección temprana de errores, la integración continua de cambios y la entrega frecuente de nuevas funcionalidades.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          p.mb-0(data-aos="fade-down") DevOps también impulsa la adopción de prácticas que permiten automatizar tareas repetitivas, estandarizar procesos y fortalecer la retroalimentación durante todas las etapas del desarrollo. Para ello, se apoya en metodologías, herramientas y tecnologías que facilitan la integración del código, la ejecución de pruebas, el despliegue de aplicaciones y el monitoreo de los servicios en funcionamiento.
    p.mb-0(data-aos="fade-down") En la actualidad, DevOps es ampliamente utilizado en proyectos de desarrollo de <em>software</em> y en entornos de computación en la nube, donde la rapidez de respuesta, la escalabilidad y la disponibilidad de los servicios son factores determinantes. Su implementación favorece equipos de trabajo más colaborativos, procesos más eficientes y una mayor capacidad para adaptarse a los cambios del entorno tecnológico.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Historia y evolución de DevOps
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img02.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Antes de la adopción de DevOps, los equipos de desarrollo y los equipos de operaciones trabajaban de forma independiente. Mientras los desarrolladores se enfocaban en crear nuevas funcionalidades para el <em>software</em>, el personal de operaciones era responsable de implementarlo, administrarlo y garantizar su disponibilidad. Esta separación generaba dificultades de comunicación, retrasos en las entregas, errores durante los despliegues y una limitada capacidad para responder a los cambios del entorno.
        p(data-aos="fade-down") Con el crecimiento de las aplicaciones <em>web</em>, los servicios en la nube y la necesidad de realizar actualizaciones con mayor frecuencia, las organizaciones comenzaron a buscar nuevas formas de mejorar la colaboración entre ambos equipos. En este contexto surgió DevOps, un enfoque que promueve la integración de personas, procesos y herramientas para optimizar el desarrollo, la implementación y el mantenimiento del <em>software</em>.
        .cajon.cajon.C02.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Desde su aparición a finales de la primera década del siglo XXI, DevOps ha evolucionado mediante la incorporación de prácticas orientadas a la automatización, la integración continua, la entrega continua y el monitoreo permanente de las aplicaciones. Esta evolución también ha estado acompañada por el uso de tecnologías como los contenedores, la computación en la nube y las plataformas de automatización, que facilitan la creación de entornos más flexibles, escalables y confiables.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img03.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") En la actualidad, DevOps constituye una práctica ampliamente adoptada por organizaciones de diferentes sectores, ya que favorece ciclos de desarrollo más ágiles, mejora la calidad del <em>software</em> y fortalece la capacidad de responder de manera oportuna a las necesidades de los usuarios y del negocio.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Evolución del desarrollo tradicional hacia el enfoque DevOps
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img04.svg', alt='En la figura 1 se presenta la evolución del desarrollo tradicional hacia el enfoque DevOps, evidenciando la transición desde equipos de desarrollo y operaciones separados hasta la adopción de prácticas colaborativas, automatización y tecnologías que favorecen la entrega continua y la mejora de la calidad del <em>software</em>.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img05.svg', alt='En la figura 1 se presenta la evolución del desarrollo tradicional hacia el enfoque DevOps, evidenciando la transición desde equipos de desarrollo y operaciones separados hasta la adopción de prácticas colaborativas, automatización y tecnologías que favorecen la entrega continua y la mejora de la calidad del <em>software</em>.')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Principios de DevOps
    p(data-aos="fade-down") DevOps se fundamenta en un conjunto de principios que orientan la forma en que las organizaciones desarrollan, implementan y mantienen aplicaciones de <em>software</em>. Estos principios promueven la integración entre las personas, los procesos y las herramientas, con el propósito de mejorar la calidad del <em>software</em>, optimizar los tiempos de entrega y fortalecer la colaboración durante todo el ciclo de vida del desarrollo.
    p.mb-4(data-aos="fade-down") Entre los principios que sustentan el enfoque DevOps se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Principios fundamentales de DevOps
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/t1/img06.svg', alt='En la figura 2 se presentan los principios fundamentales de DevOps: colaboración, automatización, integración continua, retroalimentación continua y mejora continua, como elementos que orientan el desarrollo, la implementación y el mantenimiento de aplicaciones de <em>software</em>.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img07.svg', alt='En la figura 2 se presentan los principios fundamentales de DevOps: colaboración, automatización, integración continua, retroalimentación continua y mejora continua, como elementos que orientan el desarrollo, la implementación y el mantenimiento de aplicaciones de <em>software</em>.')
    p.mb-0(data-aos="fade-down") Estos principios se complementan entre sí y constituyen la base para implementar prácticas DevOps orientadas a la colaboración, la automatización y la entrega continua de soluciones de <em>software</em>.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Cultura de colaboración y automatización
    p.mb-4(data-aos="fade-down") La cultura DevOps promueve una forma de trabajo basada en la colaboración, la comunicación y la responsabilidad compartida entre los equipos que participan en el desarrollo y la operación del <em>software</em>. Este enfoque busca eliminar las barreras tradicionales entre las diferentes áreas, favoreciendo el intercambio de conocimientos y la coordinación de actividades durante todo el ciclo de vida de las aplicaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img08.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") En este contexto, desarrolladores, personal de operaciones, especialistas en calidad y demás integrantes del equipo trabajan de manera conjunta para planificar, desarrollar, probar, implementar y monitorear las soluciones de <em>software</em>. Esta colaboración permite identificar y resolver inconvenientes de forma temprana, mejorar la calidad de los productos y responder con mayor rapidez a las necesidades de los usuarios.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Otro elemento esencial de la cultura DevOps es la <b>automatización</b>, la cual consiste en utilizar herramientas que ejecutan de forma automática tareas repetitivas del proceso de desarrollo. La automatización reduce la intervención manual en actividades como la compilación del código, la ejecución de pruebas, la integración de cambios, el despliegue de aplicaciones y el monitoreo de los servicios, contribuyendo a disminuir errores y optimizar los tiempos de trabajo.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Las principales características de una cultura DevOps son:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img10.svg' alt='AvatarTop')
          h4.text-center Trabajo colaborativo
          p Promueve la participación activa de todos los integrantes del equipo durante el ciclo de vida del <em>software</em>.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img11.svg' alt='AvatarTop')
          h4.text-center Comunicación permanente
          p Facilita el intercambio continuo de información entre las áreas involucradas.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img12.svg' alt='AvatarTop')
          h4.text-center Responsabilidad compartida
          p Fomenta el compromiso conjunto con la calidad, la disponibilidad y el funcionamiento de las aplicaciones.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img13.svg' alt='AvatarTop')
          h4.text-center Automatización de procesos
          p Disminuye la ejecución manual de tareas repetitivas y mejora la eficiencia.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img14.svg' alt='AvatarTop')
          h4.text-center Mejora continua
          p Impulsa la evaluación constante de los procesos para identificar oportunidades de optimización.
    p.mb-4(data-aos="fade-down") La cultura de colaboración y automatización constituye uno de los pilares de DevOps, ya que favorece la integración entre las personas, la optimización de los procesos y el uso de herramientas que contribuyen al desarrollo continuo de <em>software</em>. A continuación, se resumen los principales elementos que caracterizan este enfoque de trabajo.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Cultura de colaboración y automatización en DevOps
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img15.svg', alt='En la figura 2 se presentan los principios fundamentales de DevOps: colaboración, automatización, integración continua, retroalimentación continua y mejora continua, como elementos que orientan el desarrollo, la implementación y el mantenimiento de aplicaciones de <em>software</em>.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img16.svg', alt='En la figura 2 se presentan los principios fundamentales de DevOps: colaboración, automatización, integración continua, retroalimentación continua y mejora continua, como elementos que orientan el desarrollo, la implementación y el mantenimiento de aplicaciones de <em>software</em>.')
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Beneficios de la implementación de DevOps
    p(data-aos="fade-down") La implementación de DevOps aporta beneficios que favorecen el desarrollo, la entrega y el mantenimiento de aplicaciones de <em>software</em>. La integración entre las personas, los procesos y las herramientas permite optimizar las actividades del ciclo de vida del desarrollo, fortalecer la calidad de los productos y responder con mayor rapidez a las necesidades de las organizaciones y de los usuarios.
    p.mb-4(data-aos="fade-down") Entre los principales beneficios de la implementación de DevOps se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Reducción de los tiempos de entrega")
            .col-12.mb-4.mb-md-0
              p.mb-0 La automatización de procesos permite desarrollar, probar y desplegar aplicaciones de manera más ágil.
          .row(numero="2" titulo="Mejora de la calidad del <em>software</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 La integración continua y las pruebas automatizadas contribuyen a detectar errores de forma temprana.
          .row(numero="3" titulo="Mayor colaboración entre los equipos")
            .col-12.mb-4.mb-md-0
              p.mb-0 El trabajo conjunto fortalece la comunicación y la responsabilidad compartida durante todo el ciclo de vida del <em>software</em>.
          .row(numero="4" titulo="Optimización de los procesos")
            .col-12.mb-4.mb-md-0
              p.mb-0 La automatización disminuye tareas repetitivas, reduce errores y mejora la eficiencia operativa.
          .row(numero="5" titulo="Mayor capacidad de adaptación al cambio")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita la incorporación de nuevas funcionalidades y la respuesta oportuna a los requerimientos del negocio.
          .row(numero="6" titulo="Fortalecimiento de la continuidad del servicio")
            .col-12.mb-4.mb-md-0
              p.mb-0 Las prácticas de monitoreo y mejora continua contribuyen a mantener aplicaciones más estables y confiables.
      .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img17.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La implementación de DevOps no depende únicamente del uso de herramientas tecnológicas, sino también de la adopción de una cultura organizacional basada en la colaboración, la automatización y la mejora continua. La integración de estos elementos permite desarrollar soluciones de <em>software</em> con mayor calidad, optimizar los procesos de trabajo y generar valor para las organizaciones.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Beneficios de la implementación de DevOps
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Beneficio
                th(data-aos="fade-down")(style= "width: 70%") Aporte al desarrollo de <em>software</em>
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reducción de los tiempos de entrega
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Agiliza la construcción, prueba y despliegue de aplicaciones.
              tr
                td(data-aos="fade-down") Mejora de la calidad
                td(data-aos="fade-down") Favorece la detección temprana de errores mediante pruebas automatizadas.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Trabajo colaborativo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Fortalece la comunicación y la responsabilidad compartida entre los equipos.
              tr
                td(data-aos="fade-down") Automatización de procesos
                td(data-aos="fade-down") Reduce tareas manuales y mejora la eficiencia operativa.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Adaptación al cambio
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la incorporación de nuevas funcionalidades y actualizaciones.
              tr
                td(data-aos="fade-down") Continuidad del servicio
                td(data-aos="fade-down") Contribuye a la estabilidad y disponibilidad de las aplicaciones.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img18.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") La información presentada permite identificar que la implementación de DevOps genera beneficios tanto para los equipos de trabajo como para las organizaciones, al favorecer procesos de desarrollo más ágiles, colaborativos y orientados a la mejora continua.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
