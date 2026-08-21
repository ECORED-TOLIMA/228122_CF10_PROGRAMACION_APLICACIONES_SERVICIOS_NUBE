<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La implementación del enfoque DevOps transforma la forma en que se desarrollan, prueban y despliegan las aplicaciones de <em>software</em>, promoviendo la colaboración entre los equipos de trabajo y la automatización de los procesos. La integración de prácticas como el uso de contenedores, la gestión de versiones, la integración y entrega continua, junto con herramientas como Git y Jenkins, contribuye a optimizar el ciclo de vida del desarrollo de <em>software</em>, fortalecer la calidad de las aplicaciones y agilizar la entrega de soluciones tecnológicas de manera eficiente y confiable.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis contiene los principales temas relacionados con el enfoque DevOps, incluyendo la introducción a sus fundamentos, los procesos de desarrollo de software, el uso de contenedores, la integración, entrega y despliegue continuo (CI/CD), la gestión de versiones con Git y la automatización de procesos mediante Jenkins, destacando su contribución al desarrollo colaborativo, la automatización y la mejora continua del ciclo de vida del software.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
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
