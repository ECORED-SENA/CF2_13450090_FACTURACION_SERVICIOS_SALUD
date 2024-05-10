<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manual SOAT y Manual ISS 
    .f-3-1.mn.p-5.pt-0.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
          p En el contexto de la gestión de riesgos y la provisión de servicios esenciales, los manuales del Seguro Obligatorio de Accidentes de Tránsito (SOAT) y del Instituto de Seguros Sociales (ISS) representan herramientas fundamentales. Estos documentos no solo sirven como guías operativas para la administración de servicios específicos, sino que también establecen las normativas y procedimientos que aseguran la protección y el bienestar de los ciudadanos en situaciones críticas. 
          .titulo-tres.mb-4: h3 Manual SOAT 
          p.mb-0 Este manual proporciona una guía completa sobre el Seguro Obligatorio de Accidentes de Tránsito (SOAT), un seguro exigido por ley en muchos países para todos los vehículos automotores que circulan por vías públicas. Su objetivo es garantizar que todas las víctimas de accidentes de tráfico reciban atención médica inmediata y adecuada, independientemente de quién sea el culpable del accidente. 
        .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/32.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/33.png', alt='')
        .col-lg-8(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
            div(titulo="Procedimientos quirúrgicos graves ")
              p.mb-0 Se factura con el 50% de la tarifa si el paciente permanece más de 6 horas en UCI o UCE, dependiendo del grupo quirúrgico. 
            div(titulo="Procedimientos bilaterales ")
              p.mb-0 Facturación adicional del 50% según el grupo quirúrgico. Un procedimiento realizado en una región diferente o por un especialista distinto se factura al 100%. 
            div(titulo="Sala de parto ")
              p.mb-0 Incluye trabajo de parto, postparto, observación del recién nacido, servicios de dotación básica, equipos, accesorios, uso de ropa y atención de enfermería. Tarifas: Nivel I: $26,705; Nivel II: $35,055; Nivel III: $42,125. 
            div(titulo="Sala de recuperación  ")
              p.mb-0 Para pacientes posquirúrgicos que superan las 6 horas en grupos del 2 al 13, se factura al 50%. En cirugía ambulatoria que excede las 6 horas, se factura el valor de una habitación de tres camas. Si la recuperación es en UCI por menos de 24 horas, se factura un 50% adicional. 
            div(titulo="Urgencias y consulta externa ")
              p.mb-0 Incluye derechos de sutura o curaciones, uso de consultorio o sala instrumental y servicios de enfermería. 
            div(titulo="Procedimiento ambulatorio ")
              p.mb-0 Se factura si la duración supera las 6 horas. En caso de recuperación en UCI por menos de 24 horas, se factura al 50% según el tipo de cama. 
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
            div(titulo="Materiales   ")
              p.mb-0 Facturación del consumo de materiales que superan el grupo del 20 al 23. En procedimientos bilaterales, se factura un 75% adicional según el grupo       
            div(titulo="Habitación  ")
              p.mb-0 La estancia se reconoce por hasta 24 horas con todos los servicios de los artículos 40 y 45. Para observaciones menores a 6 horas, se reconocen los valores indicados. Si la estancia supera las 6 horas, se factura una habitación de 4 o más camas, según el nivel de la institución.       
            div(titulo="Ambulancia  ")
              p.mb-0 Las tarifas se establecen en función de los recorridos y el tipo de ambulancia.       
            div(titulo="Nutrición parenteral o enteral  ")
              p.mb-0 Facturación del nutricionista, medicamentos y equipos necesarios con un valor de 0.84.       
            div(titulo="Actualización del manual  ")
              p.mb-0 El manual se actualiza anualmente tomando en cuenta el salario mínimo legal vigente. Las entidades pueden asignar y cambiar los porcentajes de los valores listados en momentos determinados.        
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/34.png', alt='')
    .f-3-2.mn.p-5.pt-0.mb-4
      .titulo-tres.mb-4: h3 Manual ISS 
      p.mb-5(data-aos='fade-right') Este documento proporciona una visión general completa sobre el Instituto de Seguros Sociales (ISS), el cual fue una entidad pública encargada de administrar el sistema de seguridad social en varios países. Su principal objetivo es garantizar la prestación de beneficios y servicios de seguridad social a sus afiliados.
      .row.justify-content-center.mb-5
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/35.png', alt='')
        .col-lg-8(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
            div(titulo="Procedimientos quirúrgicos cruentos ")
              p.mb-0 No se facturan. Si el paciente posquirúrgico supera las 6 horas, se factura la sala de observación. 
            div(titulo="Procedimientos bilaterales ")
              p.mb-0 Se factura un 75% adicional de las UVR para procedimientos realizados por el mismo especialista, mediante una sola vía de acceso y una única intervención. Los demás procedimientos se facturan al 50%. 
            div(titulo="Sala de parto ")
              p.mb-0 Incluye las unidades de trabajo de parto, postparto y observación del recién nacido. 
            div(titulo="Sala de recuperación  ")
              p.mb-0 Engloba todos los materiales para el parto y postparto, incluida la observación del recién nacido. En caso de cesárea, se facturan los derechos de sala de cirugía conforme al grupo. 
            div(titulo="Derecho de sala especial ")
              p.mb-0 Se factura según el tipo de cama y solo cuando el procedimiento no se puede realizar en un consultorio (Artículo 50). 
            div(titulo="Derecho de sala de urgencia  ")
              p.mb-0 Se factura después de dos horas de observación y se considera un valor diario. Incluye las salas de observación de nivel I, II, III, la sala de sutura de heridas y la sala de curaciones. 
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
            div(titulo="Materiales  ")
              p.mb-0 Los materiales que excedan las 170 UVR se facturan al consumo. Los materiales utilizados en procedimientos en la sala especial están incluidos en la sala del artículo 51. Los materiales de sutura, curaciones, agentes y gases anestésicos se facturan a 9.410 UVR. 
            div(titulo="Habitación  ")
              p.mb-0 Se establecen valores máximos para la estancia cuando se garantizan todos los servicios detallados en los artículos del 35 al 41. En caso de anomalías que impidan suministrar algún medicamento o material al paciente, su valor no se incluirá. 
            div(titulo="Ambulancia  ")
              p.mb-0 Se establecen valores para cada tipo de “Ambulancia de traslado”, ya sea traslado simple o redondo, basados en la distancia del recorrido. 
            div(titulo="Consultas  ")
              p.mb-0 Detalla los tipos de consultas y atenciones que deben facturarse, incluyendo consultas externas, ambulatorias y de urgencias, así como la consulta pre-quirúrgica y/o intrahospitalaria y la consulta pre-anestesia. 
            div(titulo="Atención diaria intrahospitalaria  ")
              p.mb-0 La atención diaria en el hospital por parte del especialista tratante se detalla para pacientes quirúrgicos y no quirúrgicos, incluyendo la política de no facturación para pacientes que no superan los 15 días de recuperación. 
            div(titulo="Nutrición parenteral o enteral ")
              p.mb-0 La facturación de la nutrición parenteral o enteral se realiza incluyendo el valor del nutricionista y los medicamentos y productos necesarios para el proceso. 
            div(titulo="Actualización del manual ")
              p.mb-0 El manual se actualiza anualmente con las tarifas del año 2000, y las entidades o partes pueden asignar porcentajes a los valores listados en el manual, los cuales pueden variar con el tiempo.  
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/36.png', alt='')
      .titulo-tres.mb-5: h3 Procedimientos o intervenciones quirúrgicas 
      div(style="background-color: #daf2e4 ")
        .row.justify-content-center.mb-5.g-0
          .col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/37.png', alt='')
          .col-lg-7
            p.mb-0.p-5 La mayoría de los procedimientos o intervenciones quirúrgicas requieren que el paciente sea ingresado al establecimiento donde se realizará la prestación. Esto es debido a la necesidad de soporte para la complejidad de la intervención, la tecnología aplicada, el cuidado postoperatorio del paciente y, en general, para todas las posibles complicaciones que puedan surgir tanto por la condición clínica del paciente como por la magnitud de la cirugía. Actualmente, gracias a los avances tecnológicos y en técnicas quirúrgicas, existen intervenciones quirúrgicas mínimamente invasivas. 










    
</template>

<script>
export default {
  name: 'Tema3',
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
