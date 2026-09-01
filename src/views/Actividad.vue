<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los principales conceptos relacionados con el enfoque DevOps y su aplicación en los procesos de desarrollo de <em>software</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal del enfoque DevOps?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar las actividades de desarrollo y operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover la colaboración y la automatización durante el desarrollo de <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el uso de herramientas de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las pruebas de <em>software</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué originó el surgimiento del enfoque DevOps?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La necesidad de reemplazar los lenguajes de programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La creación de nuevos sistemas operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La necesidad de mejorar la colaboración entre los equipos de desarrollo y operaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El uso obligatorio de contenedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes corresponde a un principio de DevOps?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Virtualización exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programación estructurada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es uno de los beneficios de implementar DevOps?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las tareas manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación entre equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la calidad del <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Agilizar la entrega de nuevas versiones del <em>software</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito del ciclo de vida del desarrollo de <em>software</em>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar las actividades necesarias para desarrollar una aplicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar redes de computadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Configurar servidores <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué función cumplen los artefactos de <em>software</em>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documentar y respaldar las diferentes etapas del desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar pruebas automáticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar redes de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es una característica de los contenedores?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requieren un sistema operativo independiente para cada aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten ejecutar aplicaciones con sus dependencias de forma aislada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo funcionan en servidores físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen las bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué beneficio aporta el uso de contenedores en DevOps?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el tiempo de despliegue.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la colaboración entre equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar la portabilidad de las aplicaciones entre diferentes entornos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de repositorios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué significa la sigla CI?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuous Integration.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Continuous Infrastructure.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Code Integration.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Collaborative Integration.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo principal de la entrega continua (CD)?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las pruebas automatizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener el <em>software</em> preparado para su implementación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el control de versiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear nuevas ramas del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué herramienta se utiliza para gestionar versiones del código fuente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Docker',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Jenkins',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Git',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Kubernetes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué función cumple Git dentro de la integración continua?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatizar el despliegue del <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar el historial de cambios del código fuente y facilitar la integración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los contenedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una plataforma utilizada para alojar repositorios remotos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'PostgreSQL',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Docker Hub',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'GitHub',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Apache',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'En la estrategia GitFlow, ¿qué rama contiene la versión estable del proyecto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'feature',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'develop',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'release',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'main',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es una buena práctica en la gestión del código fuente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar cambios directamente en la rama principal sin validación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar documentar las modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar mensajes descriptivos en los <em>commits</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el historial de versiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es la función principal de Jenkins?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Automatizar procesos de integración y entrega continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar Git.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué componente de Jenkins administra y coordina las ejecuciones automatizadas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agent',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plugin',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Pipeline</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controller',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué representa un <em>pipeline</em> en Jenkins?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una base de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un flujo automatizado de etapas para ejecutar procesos de integración continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un repositorio remoto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un contenedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes actividades hace parte de un proceso automatizado de CI/CD?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Construcción, pruebas y despliegue.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseño de logotipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administración financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaboración de manuales impresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito del monitoreo de procesos CI/CD?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los registros de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impedir la automatización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Supervisar las ejecuciones, identificar errores y promover la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir las pruebas automatizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los principales conceptos relacionados con el enfoque DevOps, las herramientas y las prácticas utilizadas para automatizar y optimizar los procesos de desarrollo de <em>software</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
