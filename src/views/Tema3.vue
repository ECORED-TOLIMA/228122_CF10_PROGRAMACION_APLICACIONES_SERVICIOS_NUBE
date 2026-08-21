<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contenedores en entornos de desarrollo
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El desarrollo de aplicaciones modernas requiere entornos de trabajo que faciliten la creación, ejecución y mantenimiento del <em>software</em> de manera consistente en diferentes plataformas. En este contexto, los contenedores se han convertido en una tecnología ampliamente utilizada, ya que permiten empaquetar una aplicación junto con sus dependencias, bibliotecas y configuraciones necesarias para su funcionamiento.
    p.mb-4(data-aos="fade-down") A diferencia de otros mecanismos de virtualización, los contenedores comparten el sistema operativo del equipo anfitrión, lo que reduce el consumo de recursos y permite ejecutar múltiples aplicaciones de forma aislada y eficiente. Esta característica facilita la portabilidad de las aplicaciones entre diferentes entornos de desarrollo, pruebas y producción, garantizando un comportamiento consistente en cada uno de ellos.
    .row.align-items-center.mb-0
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img02.svg', alt='Imagen decorativa')
      .col-lg-11.col-12
        .cajon.cajon.C08.color-primario.px-4.py-1.mb-0
          p.mb-0(data-aos="fade-down") En el enfoque DevOps, los contenedores favorecen la automatización de los procesos de desarrollo y despliegue, simplifican la administración de las aplicaciones y contribuyen a la integración continua y la entrega continua del <em>software</em>. Su utilización también facilita la colaboración entre los equipos de desarrollo y operaciones, al proporcionar entornos consistentes para la construcción, validación e implementación de las soluciones.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Características de los contenedores
    p(data-aos="fade-down") Los contenedores presentan características que los convierten en una tecnología ampliamente utilizada durante el desarrollo y la implementación de aplicaciones. Estas características permiten crear entornos consistentes, optimizar el uso de los recursos y facilitar la ejecución del <em>software</em> en diferentes plataformas.
    p.mb-4(data-aos="fade-down") Entre las principales características de los contenedores se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Aislamiento")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada contenedor ejecuta una aplicación de manera independiente, evitando conflictos con otras aplicaciones o servicios que se encuentren en el mismo sistema.
          .row(numero="2" titulo="Portabilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Pueden trasladarse entre diferentes entornos de desarrollo, pruebas y producción, manteniendo el mismo comportamiento y reduciendo los problemas asociados a la configuración del entorno.
          .row(numero="3" titulo="Ligereza")
            .col-12.mb-4.mb-md-0
              p.mb-0 Utilizan menos recursos que otros mecanismos de virtualización, ya que comparten el sistema operativo del equipo anfitrión en lugar de ejecutar un sistema operativo completo para cada instancia.
          .row(numero="4" titulo="Escalabilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten crear o eliminar instancias de una aplicación de forma rápida, facilitando la atención de cambios en la demanda de los usuarios.
          .row(numero="5" titulo="Consistencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Garantizan que la aplicación se ejecute con las mismas dependencias, bibliotecas y configuraciones en cualquier entorno donde se implemente.
          .row(numero="6" titulo="Rapidez de implementación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Su creación y puesta en funcionamiento requieren menos tiempo, lo que favorece la automatización de los procesos de desarrollo y despliegue.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img03.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Estas características hacen que los contenedores sean una alternativa eficiente para el desarrollo de aplicaciones modernas, especialmente en entornos donde se requiere automatizar procesos, optimizar recursos y garantizar la estabilidad de las aplicaciones durante todo su ciclo de vida.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Beneficios del uso de contenedores
    p.mb-4(data-aos="fade-down") La utilización de contenedores aporta ventajas significativas durante el desarrollo, las pruebas y la implementación de aplicaciones. Su capacidad para ejecutar el <em>software</em> de manera consistente en diferentes entornos facilita el trabajo colaborativo, optimiza el uso de los recursos tecnológicos y fortalece los procesos de integración y despliegue continuo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          p.mb-0(data-aos="fade-down") Los beneficios de los contenedores no solo favorecen a los equipos de desarrollo, sino también a las organizaciones, al proporcionar mayor flexibilidad para administrar las aplicaciones y responder con rapidez a las necesidades del negocio.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Beneficios del uso de contenedores
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Beneficio
                th(data-aos="fade-down")(style= "width: 30%") Descripción
                th(data-aos="fade-down")(style= "width: 50%") Impacto en el desarrollo de <em>software</em>
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Portabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite ejecutar una aplicación en diferentes entornos sin modificar su configuración.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reduce problemas de compatibilidad entre desarrollo, pruebas y producción.
              tr
                td(data-aos="fade-down") Optimización de recursos
                td(data-aos="fade-down") Comparte el sistema operativo del equipo anfitrión, disminuyendo el consumo de memoria y procesamiento.
                td(data-aos="fade-down") Permite ejecutar más aplicaciones utilizando la misma infraestructura.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Escalabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la creación o eliminación de instancias de una aplicación según la demanda.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Favorece la disponibilidad y el rendimiento de los servicios.
              tr
                td(data-aos="fade-down") Rapidez de implementación
                td(data-aos="fade-down") Reduce el tiempo necesario para crear y poner en funcionamiento nuevos entornos.
                td(data-aos="fade-down") Agiliza los procesos de desarrollo, pruebas y despliegue.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Consistencia entre entornos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Mantiene las mismas dependencias y configuraciones durante todo el ciclo de vida de la aplicación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disminuye errores asociados a diferencias entre entornos de trabajo.
              tr
                td(data-aos="fade-down") Automatización
                td(data-aos="fade-down") Se integra con herramientas y procesos de integración y despliegue continuo.
                td(data-aos="fade-down") Favorece la implementación de prácticas DevOps y la entrega continua de <em>software</em>.
    p.mb-0(data-aos="fade-down") La información presentada permite identificar que los contenedores contribuyen a optimizar el desarrollo de <em>software</em> mediante la creación de entornos consistentes, el aprovechamiento eficiente de los recursos y la automatización de procesos. Estas ventajas favorecen la calidad de las aplicaciones y fortalecen la capacidad de respuesta de las organizaciones frente a los cambios tecnológicos.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Aplicaciones de los contenedores en DevOps
    p(data-aos="fade-down") En el enfoque DevOps, los contenedores se utilizan para apoyar las diferentes actividades del desarrollo, las pruebas, la integración y el despliegue de aplicaciones. Su utilización facilita la creación de entornos consistentes, favorece la automatización de procesos y contribuye a mejorar la calidad y disponibilidad del <em>software</em>.
    p.mb-4(data-aos="fade-down") Entre las principales aplicaciones de los contenedores en DevOps se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img04.svg' alt='AvatarTop')
          h4.text-center Desarrollo de aplicaciones
          p Permiten que todos los integrantes del equipo trabajen en entornos con las mismas configuraciones, dependencias y versiones de <em>software</em>, reduciendo problemas de compatibilidad.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img05.svg' alt='AvatarTop')
          h4.text-center Integración continua (CI)
          p Facilitan la construcción y validación automática de nuevas versiones de la aplicación cada vez que se realizan cambios en el código fuente.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img06.svg' alt='AvatarTop')
          h4.text-center Ejecución de pruebas
          p Posibilitan la creación de entornos temporales donde las pruebas funcionales, de integración o de rendimiento se ejecutan de forma aislada, garantizando resultados confiables.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img07.svg' alt='AvatarTop')
          h4.text-center Entrega y despliegue continuo (CD)
          p Permiten distribuir aplicaciones entre los diferentes entornos de desarrollo, pruebas y producción de manera rápida, consistente y automatizada.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img08.svg' alt='AvatarTop')
          h4.text-center Escalabilidad de aplicaciones
          p Facilitan la creación de nuevas instancias de una aplicación cuando aumenta la demanda de los usuarios, contribuyendo a mantener la disponibilidad del servicio.
        .tarjeta.tarjeta--bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img09.svg' alt='AvatarTop')
          h4.text-center Implementación de herramientas de apoyo
          p Posibilitan ejecutar herramientas utilizadas para el análisis de calidad del código, las pruebas automatizadas y la seguridad, sin necesidad de realizar instalaciones independientes en cada servidor.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img11.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de aplicación de contenedores en DevOps
          p.mb-0(data-aos="fade-down") Durante el desarrollo de una aplicación <em>web</em>, cada integrante del equipo utiliza un contenedor con la misma configuración del proyecto. Cuando un desarrollador incorpora cambios al código fuente, el sistema inicia un proceso automatizado que construye una nueva versión de la aplicación, ejecuta las pruebas correspondientes y prepara el despliegue en el entorno definido. Este procedimiento reduce errores asociados a diferencias entre entornos y favorece la entrega continua de nuevas versiones del <em>software</em>.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img10.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La utilización de contenedores en DevOps fortalece la automatización de los procesos, mejora la colaboración entre los equipos y facilita la entrega de aplicaciones más estables, consistentes y adaptables a las necesidades de las organizaciones.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Uso de contenedores en entornos DevOps
    p.mb-4(data-aos="fade-down") En los entornos DevOps, la creación y administración de contenedores suele realizarse mediante herramientas especializadas. Entre ellas, Docker es una de las más utilizadas, ya que permite construir imágenes, ejecutar contenedores y automatizar procesos relacionados con el desarrollo, las pruebas y el despliegue de aplicaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img12.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") Para crear una imagen de un contenedor se utiliza un archivo denominado Dockerfile, el cual contiene las instrucciones necesarias para preparar el entorno donde se ejecutará la aplicación.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo simplificado de un Dockerfile:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | FROM node:18-alpine
              |
              | WORKDIR /app
              |
              | COPY . .
              |
              | RUN npm install
              |
              | EXPOSE 3000
              |
              | CMD ["node", "server.js"]
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img13.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 En este ejemplo:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>FROM</b> especifica la imagen base que utilizará el contenedor.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>WORKDIR</b> establece el directorio de trabajo.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>COPY</b> copia los archivos de la aplicación al contenedor.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>RUN</b> ejecuta comandos durante la construcción de la imagen.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>EXPOSE</b> indica el puerto utilizado por la aplicación.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>CMD</b> define el comando que se ejecutará al iniciar el contenedor.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Comandos básicos de Docker
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Comando
                th(data-aos="fade-down")(style= "width: 30%") Propósito
                th(data-aos="fade-down")(style= "width: 50%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker build
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Construir una imagen a partir de un Dockerfile.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker build -t mi-aplicacion .
              tr
                td(data-aos="fade-down") docker run
                td(data-aos="fade-down") Crear y ejecutar un contenedor desde una imagen.
                td(data-aos="fade-down") docker run -d -p 8080:3000 mi-aplicacion
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker ps
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Mostrar los contenedores en ejecución.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker ps
              tr
                td(data-aos="fade-down") docker stop
                td(data-aos="fade-down") Detener un contenedor en ejecución.
                td(data-aos="fade-down") docker stop mi-contenedor
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker images
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Listar las imágenes almacenadas localmente.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") docker images
              tr
                td(data-aos="fade-down") docker <em>logs</em>
                td(data-aos="fade-down") Consultar los registros de un contenedor.
                td(data-aos="fade-down") docker <em>logs</em> mi-contenedor
    p.mb-0(data-aos="fade-down") La utilización de herramientas como Docker facilita la administración de contenedores durante el desarrollo y la operación de aplicaciones. Su integración con las prácticas DevOps favorece la automatización de procesos, la consistencia entre entornos y la entrega continua de <em>software</em>.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
