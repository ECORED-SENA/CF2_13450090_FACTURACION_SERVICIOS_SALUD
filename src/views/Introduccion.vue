<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .mn.intro-f-1.p-5.py-0
      .tarjeta.p-5(style="background-color:#95dbb3 ").mb-3
        .row.justify-content-center.align-items-center
          .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
            p Las Entidades Promotoras de Salud (EPS) en Colombia están obligadas por la Ley 100 de 1993 y sus modificaciones a garantizar la oportunidad y calidad de sus servicios a los usuarios. Estas normativas solo buscan ampliar, mediante actualizaciones y anexos jurídicos, la cobertura y accesibilidad para la población en todo el territorio colombiano. Para ello, es crucial implementar procesos de contratación que se ajusten a las normativas vigentes, como lo estipula el Decreto 441 de 2022, el cual hace parte integral del Decreto Reglamentario Único 780 de 2016, en reemplazo del Decreto 4747 de 2007.
            p.mb-0 #[b Decreto 441 de 2022:]
            p “Por medio del cual se sustituye el Capítulo 4 del Título 3 de la Parte 5 del Libro 2 del Decreto 780 de 2016 relativo a los acuerdos de voluntades entre las entidades responsables de pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud”.
            p.mb-0 Dichos procesos deben establecer criterios claros para los acuerdos firmados entre las partes involucradas (responsables de pago y prestadores de servicios de salud).
          .col-lg-2.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.svg', alt='')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', style="width: 167px" alt='').m-auto
        .col-lg-11(data-aos="fade-left")
          .tarjeta.p-4(style="background-color: #3c604b ")
            p.mb-0.text-white Conforme a la Ley 100 y sus actualizaciones, las Instituciones Prestadoras de Servicios de Salud (IPS) están obligadas a facturar por los servicios ofrecidos, con el objetivo de recuperar los recursos invertidos en la atención médica de los usuarios y asegurar su sostenibilidad financiera. 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-7(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.png', alt='')
        .col-lg-8(data-aos='fade-left')
          p.mb-0 Por esta razón, las IPS deben implementar procesos de auditoría para evaluar la calidad del servicio prestado y analizar las cuentas post-facturación. Este procedimiento asegura que toda la documentación respaldatoria esté correctamente presentada y facilita la adopción de medidas correctivas que fortalecen las actividades administrativas relacionadas con la liquidación de los servicios de salud. 
            br
            br
            |Además, las entidades responsables de los pagos adoptan estrategias similares, como la creación de áreas de auditoría médica. En estas áreas, el equipo administrativo gestiona la revisión de las facturas, mientras que el equipo médico evalúa la pertinencia de los servicios brindados, basándose en su experiencia y conocimientos. Esto asegura una alta calidad en la prestación de los servicios y el cumplimiento adecuado de los protocolos de atención.

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
