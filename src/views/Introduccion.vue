<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") En la actualidad, las organizaciones requieren desarrollar y entregar soluciones de <em>software</em> con mayor rapidez, calidad y capacidad de adaptación a los cambios del entorno. Para responder a estas necesidades, DevOps integra prácticas, procesos y herramientas que fortalecen la colaboración entre los equipos de desarrollo y operaciones, promoviendo la automatización y la mejora continua durante el ciclo de vida del <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Este componente formativo presenta los fundamentos de DevOps, los procesos de desarrollo de <em>software</em> y el papel de los contenedores como tecnología para la creación de entornos consistentes y escalables. Asimismo, aborda los conceptos de integración, entrega y despliegue continuo (CI/CD), destacando su contribución a la automatización de las actividades de construcción, prueba y publicación de aplicaciones.
        p(data-aos="fade-down") Finalmente, se desarrollan los principios del control de versiones mediante Git, el uso de repositorios remotos con GitHub y GitLab, la estrategia de ramificación GitFlow y la automatización de procesos con Jenkins. Estos conocimientos proporcionan una base para comprender cómo las prácticas y herramientas DevOps favorecen el trabajo colaborativo, optimizan los procesos de desarrollo y contribuyen a la entrega continua de soluciones de <em>software</em> con mayor calidad y confiabilidad.
        p.mb-0(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/MBrmvfZHfoc?si=64xU09n079ZVzs8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
