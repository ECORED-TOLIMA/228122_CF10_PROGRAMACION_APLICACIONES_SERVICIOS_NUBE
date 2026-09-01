<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos de desarrollo de <em><em>software</em></em>
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") El desarrollo de <em>software</em> comprende un conjunto de actividades organizadas que permiten transformar una necesidad o un problema en una aplicación o solución informática. Para lograrlo, es necesario establecer procesos que orienten la planificación, el análisis, el diseño, la construcción, las pruebas, la implementación y el mantenimiento del <em>software</em>, garantizando que cada etapa se ejecute de manera ordenada y contribuya al cumplimiento de los objetivos del proyecto.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img02.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Los procesos de desarrollo proporcionan una estructura de trabajo que facilita la coordinación entre los integrantes del equipo, la gestión de los recursos y el seguimiento de las actividades. Además, favorecen la definición de responsabilidades, la elaboración de productos intermedios y la aplicación de mecanismos de control que contribuyen a mejorar la calidad del <em>software</em>.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img01.jpg', alt='')
    p.mb-4(data-aos="fade-down") En el contexto de DevOps, estos procesos adquieren un enfoque colaborativo e integrado, donde las actividades de desarrollo y operación dejan de ejecutarse de forma independiente para convertirse en un flujo continuo apoyado por la automatización y la comunicación permanente entre los equipos. Este enfoque favorece la entrega frecuente de nuevas versiones, la detección temprana de errores y la mejora continua durante todo el ciclo de vida del <em>software</em>.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img03.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-1
          p.mb-0(data-aos="fade-down") Los procesos de desarrollo de <em>software</em> constituyen la base para implementar prácticas de integración continua, entrega continua y despliegue continuo, las cuales permiten optimizar el trabajo colaborativo y responder con mayor rapidez a las necesidades de las organizaciones y de los usuarios.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Ciclo de vida del desarrollo de <em><em>software</em></em>
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img04.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") El ciclo de vida del desarrollo de <em>software</em> (Software Development Life Cycle - SDLC) es un modelo que organiza las actividades necesarias para planificar, diseñar, desarrollar, probar, implementar y mantener una aplicación informática. Su propósito es proporcionar una estructura que facilite la gestión del proyecto, optimice el uso de los recursos y garantice la calidad del producto final.
        p.mb-4(data-aos="fade-down") La implementación de un ciclo de vida permite definir las actividades que deben ejecutarse en cada etapa, establecer responsabilidades y realizar el seguimiento del avance del proyecto. De esta manera, es posible reducir riesgos, controlar los cambios y asegurar que el <em>software</em> responda a los requisitos definidos por los usuarios y las organizaciones.
        p.mb-0(data-aos="fade-down") Aunque existen diferentes metodologías de desarrollo, la mayoría contempla un conjunto de etapas comunes que orientan la construcción de soluciones de <em>software</em>. Estas etapas son:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img05.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="").img100.m-auto
                  h4 Planificación
                  p Definición de los objetivos, el alcance, los recursos y el cronograma del proyecto.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="").img100.m-auto
                  h4 Análisis de requisitos
                  p Identificación y documentación de las necesidades funcionales y no funcionales que debe cumplir el <em>software</em>.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img08.svg", alt="").img100.m-auto
                  h4 Diseño
                  p Definición de la arquitectura, los componentes, la estructura de datos y la interfaz de la aplicación.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img09.svg", alt="").img100.m-auto
                  h4 Desarrollo
                  p Construcción del <em>software</em> mediante la implementación del código fuente.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img10.svg", alt="").img100.m-auto
                  h4 Pruebas
                  p Verificación del funcionamiento de la aplicación para identificar y corregir errores antes de su implementación.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img11.svg", alt="").img100.m-auto
                  h4 Implementación
                  p Puesta en funcionamiento del <em>software</em> en el entorno de producción.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img12.svg", alt="").img100.m-auto
                  h4 Mantenimiento
                  p Realización de correcciones, actualizaciones y mejoras posteriores a la implementación.
    p.mb-0(data-aos="fade-down") La aplicación ordenada de estas etapas contribuye al desarrollo de <em>software</em> con mayor calidad, facilita el trabajo colaborativo entre los equipos y proporciona una base para la implementación de prácticas DevOps orientadas a la integración y entrega continua.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Actividades del proceso de desarrollo
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img13.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") El proceso de desarrollo de <em>software</em> comprende un conjunto de actividades que permiten transformar los requisitos definidos en una solución informática funcional. Cada actividad responde a un propósito específico y se desarrolla de manera coordinada con las demás, favoreciendo la organización del proyecto, el control de las tareas y el aseguramiento de la calidad del <em>software</em>.
        p.mb-0(data-aos="fade-down") Aunque las metodologías de desarrollo pueden variar, la mayoría contempla actividades comunes que orientan la construcción, implementación y mantenimiento de las aplicaciones. En la siguiente tabla se presentan las principales actividades que conforman este proceso y el propósito de cada una.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Actividades del proceso de desarrollo de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Actividad
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Propósito
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Planificación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Define los objetivos, el alcance, los recursos y el cronograma del proyecto.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Organizar el desarrollo y establecer las condiciones necesarias para ejecutar el proyecto.
              tr
                td(data-aos="fade-down") Análisis de requisitos
                td(data-aos="fade-down") Identifica y documenta las necesidades funcionales y no funcionales del <em>software</em>.
                td(data-aos="fade-down") Comprender las necesidades del usuario y establecer las características que debe cumplir la aplicación.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Diseño
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Define la arquitectura, los componentes, las bases de datos y las interfaces del sistema.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Establecer la estructura técnica que servirá de base para el desarrollo del <em>software</em>.
              tr
                td(data-aos="fade-down") Desarrollo
                td(data-aos="fade-down") Implementa el código fuente de acuerdo con los requisitos y el diseño establecidos.
                td(data-aos="fade-down") Construir la aplicación y desarrollar sus funcionalidades.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Pruebas
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Verifica el funcionamiento del <em>software</em> e identifica posibles errores.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Validar que la aplicación cumpla los requisitos definidos y funcione correctamente.
              tr
                td(data-aos="fade-down") Implementación
                td(data-aos="fade-down") Instala y configura la aplicación en el entorno de producción.
                td(data-aos="fade-down") Poner el <em>software</em> a disposición de los usuarios para su utilización.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Mantenimiento
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Realiza correcciones, actualizaciones y mejoras posteriores a la implementación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Garantizar el funcionamiento continuo y la evolución del <em>software</em> según las necesidades de la organización.
    p.mb-0(data-aos="fade-down") La información presentada permite identificar que las actividades del proceso de desarrollo se encuentran estrechamente relacionadas y se ejecutan de forma coordinada para obtener aplicaciones funcionales y de calidad. En el enfoque DevOps, estas actividades se integran mediante prácticas colaborativas y procesos automatizados que favorecen la entrega continua y la mejora permanente del <em>software</em>.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Roles y responsabilidades del equipo de desarrollo
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img14.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> requiere la participación de profesionales con diferentes conocimientos y responsabilidades, quienes trabajan de manera coordinada para planificar, construir, implementar y mantener las aplicaciones. Cada integrante del equipo aporta habilidades específicas que contribuyen al cumplimiento de los objetivos del proyecto y a la entrega de productos de calidad.
        p.mb-4(data-aos="fade-down") En el enfoque DevOps, los roles mantienen sus funciones principales, pero fortalecen el trabajo colaborativo y la comunicación permanente entre las áreas de desarrollo, operaciones, pruebas y seguridad. Este modelo promueve la responsabilidad compartida y la integración de actividades durante todo el ciclo de vida del <em>software</em>.
        p.mb-0(data-aos="fade-down") A continuación, se describen algunos de los principales roles que participan en el desarrollo de <em>software</em> y sus responsabilidades dentro de un entorno de trabajo colaborativo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Roles y responsabilidades del equipo de desarrollo de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Rol
                th(data-aos="fade-down")(style= "width: 40%") Responsabilidades principales
                th(data-aos="fade-down")(style= "width: 40%") Participación en DevOps
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Analista de requisitos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Identificar, documentar y validar las necesidades del cliente o usuario.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la comunicación entre las partes interesadas y el equipo de desarrollo.
              tr
                td(data-aos="fade-down") Arquitecto de <em>software</em>
                td(data-aos="fade-down") Definir la arquitectura, los componentes y las tecnologías de la solución.
                td(data-aos="fade-down") Diseña soluciones que facilitan la integración, el despliegue y la escalabilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Desarrollador
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Implementar el código fuente y corregir errores de la aplicación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integra cambios frecuentes al repositorio y participa en procesos de integración continua.
              tr
                td(data-aos="fade-down") Ingeniero de pruebas (QA)
                td(data-aos="fade-down") Diseñar y ejecutar pruebas para verificar la calidad del <em>software</em>.
                td(data-aos="fade-down") Automatiza pruebas y valida el correcto funcionamiento de las aplicaciones antes de su despliegue.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administrador de operaciones (Ops)
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestionar la infraestructura, la implementación y el funcionamiento de las aplicaciones.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Colabora con el equipo de desarrollo para garantizar la disponibilidad y continuidad de los servicios.
              tr
                td(data-aos="fade-down") Administrador de proyectos o Scrum Master
                td(data-aos="fade-down") Coordinar las actividades del equipo y realizar el seguimiento del proyecto.
                td(data-aos="fade-down") Favorece la colaboración, la comunicación y la mejora continua de los procesos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img15.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> requiere la participación coordinada de diferentes profesionales. En DevOps, estos roles fortalecen el trabajo colaborativo, comparten responsabilidades y contribuyen conjuntamente al desarrollo, implementación y operación de aplicaciones de <em>software</em>.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Artefactos de <em><em>software</em></em>
    p.mb-4(data-aos="fade-down") Durante el desarrollo de <em>software</em> se generan diferentes productos o documentos que registran la información necesaria para planificar, construir, verificar y mantener una aplicación. Estos productos se conocen como artefactos de <em>software</em> y constituyen evidencias del trabajo realizado en las distintas etapas del ciclo de vida del desarrollo.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los artefactos facilitan la comunicación entre los integrantes del equipo, permiten documentar las decisiones tomadas durante el proyecto y proporcionan información para el seguimiento, la validación y el mantenimiento de la solución desarrollada. Asimismo, favorecen la trazabilidad de los requisitos y contribuyen al aseguramiento de la calidad del <em>software</em>.
    p.mb-4(data-aos="fade-down") Entre los artefactos más utilizados durante el desarrollo de <em>software</em> se encuentran:
    .cajon.cajon.C12.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4(data-aos="fade-down") Cada uno de estos artefactos cumple una función específica y contribuye a mantener la organización, la calidad y la trazabilidad durante el desarrollo del <em>software</em>.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img24.svg', alt='')
            .col-lg-10.col-12
              h4.mb-0(data-aos="fade-down") Ejemplo de utilización de artefactos de <em>software</em>
          p(data-aos="fade-down") Durante el desarrollo de una aplicación para la gestión de citas médicas, el equipo de trabajo utiliza diferentes artefactos en cada etapa del proyecto. Inicialmente, elabora un documento de requisitos para registrar las necesidades del sistema, como el agendamiento de citas y la consulta de historiales médicos. Posteriormente, desarrolla un modelo de diseño que define la arquitectura de la aplicación, las interfaces y la estructura de la base de datos.
          p.mb-0(data-aos="fade-down") Una vez aprobado el diseño, los desarrolladores construyen el código fuente de la aplicación y el equipo de calidad elabora los casos de prueba para verificar que las funcionalidades operen correctamente. Finalmente, antes de la entrega del sistema, se preparan el manual técnico, dirigido al personal encargado de la administración y el mantenimiento, y el manual de usuario, que orienta a los usuarios finales en la utilización de la aplicación.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img23.jpg', alt='')
    p.mb-0(data-aos="fade-down") Este ejemplo permite identificar que los artefactos de <em>software</em> se generan de manera progresiva durante el desarrollo de un proyecto y que cada uno cumple una función específica para documentar el proceso, facilitar el trabajo colaborativo y garantizar la calidad de la solución desarrollada.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Herramientas para el desarrollo de <em><em>software</em></em>
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img25.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img26.svg', alt='')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> requiere el apoyo de herramientas que facilitan la planificación, la construcción, las pruebas, la implementación y el mantenimiento de las aplicaciones. Estas herramientas permiten optimizar las actividades del equipo de trabajo, mejorar la productividad y favorecer la colaboración entre los diferentes participantes del proyecto.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") La selección de las herramientas depende de las características del proyecto, la metodología de desarrollo y las tecnologías utilizadas. En la actualidad, existen soluciones especializadas para la gestión de requisitos, el desarrollo del código, el control de versiones, la automatización de pruebas y la administración de los procesos de integración y despliegue continuo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Herramientas utilizadas en el desarrollo de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Categoría
                th(data-aos="fade-down")(style= "width: 30%") Ejemplos de herramientas
                th(data-aos="fade-down")(style= "width: 50%") Aplicación principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestión de proyectos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Jira, Trello y Azure Boards.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Planificar actividades, gestionar tareas y realizar el seguimiento del proyecto.
              tr
                td(data-aos="fade-down") Desarrollo de código
                td(data-aos="fade-down") Visual Studio Code, Eclipse e IntelliJ IDEA
                td(data-aos="fade-down") Crear, editar y depurar el código fuente de las aplicaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Control de versiones
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Git.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestionar los cambios realizados sobre el código fuente y facilitar el trabajo colaborativo.
              tr
                td(data-aos="fade-down") Repositorios remotos
                td(data-aos="fade-down") GitHub y GitLab.
                td(data-aos="fade-down") Almacenar el código fuente y apoyar la colaboración entre los integrantes del equipo.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Pruebas
                td(data-aos="fade-down")(style="background-color: #EEF1F7") JUnit, Selenium y Postman.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Verificar el funcionamiento de las aplicaciones mediante pruebas funcionales y automatizadas.
              tr
                td(data-aos="fade-down") Integración y automatización
                td(data-aos="fade-down") Jenkins.
                td(data-aos="fade-down") Automatizar procesos de construcción, pruebas e integración continua.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Contenedores
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Docker.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Crear entornos de ejecución consistentes para el desarrollo y despliegue de aplicaciones.
    p.mb-0(data-aos="fade-down") Cada herramienta cumple una función específica dentro del proceso de desarrollo de <em>software</em>. Su integración favorece el trabajo colaborativo, optimiza la gestión del código fuente y contribuye a la automatización de actividades relacionadas con la construcción, las pruebas y el despliegue de las aplicaciones.        
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Documento de requisitos',
        texto:
          'Reúne las necesidades funcionales y no funcionales que debe satisfacer la aplicación. Sirve como referencia para orientar el diseño, el desarrollo y la validación del <em>software</em>, además de facilitar la comunicación entre el cliente y el equipo de trabajo.',
        imagen: '@/assets/curso/temas/t2/img17.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Modelo de diseño',
        texto:
          'Describe la arquitectura del sistema, los componentes, las interfaces, las estructuras de datos y la interacción entre los diferentes elementos de la aplicación. Constituye la base técnica para el desarrollo del <em>software</em>.',
        imagen: '@/assets/curso/temas/t2/img18.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Código fuente',
        texto:
          'Corresponde al conjunto de instrucciones escritas en un lenguaje de programación que implementan las funcionalidades de la aplicación. Es el principal artefacto del desarrollo y evoluciona continuamente durante el proyecto.',
        imagen: '@/assets/curso/temas/t2/img19.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Casos de prueba',
        texto:
          'Documentan los escenarios, datos y resultados esperados que permiten verificar el correcto funcionamiento de la aplicación. Su ejecución facilita la identificación de errores y la validación de los requisitos definidos.',
        imagen: '@/assets/curso/temas/t2/img20.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Manual técnico',
        texto:
          'Contiene información sobre la instalación, configuración, arquitectura, mantenimiento y administración del sistema. Está dirigido al personal técnico responsable del soporte y la operación de la aplicación.',
        imagen: '@/assets/curso/temas/t2/img21.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Manual de usuario',
        texto:
          'Proporciona instrucciones para utilizar la aplicación, describiendo sus funcionalidades, procedimientos y recomendaciones de uso. Su propósito es facilitar la interacción de los usuarios con el sistema.',
        imagen: '@/assets/curso/temas/t2/img22.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>
