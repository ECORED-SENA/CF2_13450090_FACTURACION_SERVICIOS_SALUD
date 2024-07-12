<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Liquidación de los Servicios de Salud normatividad
    p.mb-5(data-aos='fade-right') El proceso de liquidación de servicios de salud está regulado, ya que se trata de un asunto de gran importancia para garantizar el adecuado desempeño financiero de cualquier institución del sector salud. Sin embargo, es necesario tener en cuenta las modalidades de contratación, las tarifas pactadas y los manuales tarifarios, entre otros factores. 
      br
      br
      | #[b Las principales normativas incluyen:] 
    .f-1-1.mn.p-5.mb-4
      .tarjeta.bg-white.p-4.mb-5(data-aos='fade-left')
        LineaTiempoC.color-secundario(text-small)
          .row.justify-content-center(titulo="Decreto 2423 de 1996")
            .col-lg-6.mb-4.mb-md-0
              h4 Decreto 2423 de 1996
              p Determina la nomenclatura y clasificación de los procedimientos médicos, quirúrgicos y hospitalarios del Manual Tarifario y dicta otras disposiciones.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/4.svg', alt='')
          .row.justify-content-center(titulo="Acuerdo 209 de 1999")
            .col-lg-6.mb-4.mb-md-0
              h4 Acuerdo 209 de 1999
              p Manual tarifario mejor conocido como ISS 2000, frecuentemente utilizado como base tarifaria para los acuerdos de voluntades entre actores del sistema.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/6.svg', alt='')
          .row.justify-content-center(titulo="Resolución 3374 de 2000")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 3374 de 2000
              p Reglamenta los datos básicos que deben reportar los prestadores de servicios de salud y las entidades administradoras de planes de beneficios sobre los servicios de salud prestados.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
          .row.justify-content-center(titulo="Acuerdo 256 de 2001")
            .col-lg-6.mb-4.mb-md-0
              h4 Acuerdo 256 de 2001
              p Aprueba el “Manual de tarifas” de la entidad promotora de salud del seguro social “EPS-ISS”.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/5.svg', alt='')
          .row.justify-content-center(titulo="Decreto 441 de 2022")
            .col-lg-6.mb-4.mb-md-0
              h4 Decreto 441 de 2022
              p Determina los acuerdos de voluntades entre las entidades responsables de pago, los prestadores de servicios de salud y los proveedores de tecnologías en salud.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
          .row.justify-content-center(titulo="Decreto 1652 de 2022")
            .col-lg-6.mb-4.mb-md-0
              h4 Decreto 1652 de 2022
              p Determina el régimen aplicable para el cobro de pagos compartidos o copagos y cuotas moderadoras a los afiliados al SGSSS.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/8.svg', alt='')
          .row.justify-content-center(titulo="Resolución 2336 de 2023")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 2336 de 2023
              p Establece la Clasificación Única de Procedimientos en Salud — CUPS 2024.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/9.svg', alt='')
          .row.justify-content-center(titulo="Resolución 2366 de 2023")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 2366 de 2023
              p Actualiza integralmente los servicios y tecnologías de salud financiados con recursos de la Unidad de Pago por Capitación (UPC).
            .col-lg-3.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
          .row.justify-content-center(titulo="Resolución 2275 de 2023")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 2275 de 2023
              p Expide la resolución única reglamentaria de RIPS (JSON).
            .col-lg-3.col-6: img(src='@/assets/curso/temas/8.svg', alt='')
          .row.justify-content-center(titulo="CIE-11")
            .col-lg-6.mb-4.mb-md-0
              h4 CIE-11
              p Clasificación Internacional de Enfermedades, utilizada globalmente para estándares de salud, la cual está en transición a ser adoptada por las IPS del país. A través del siguiente enlace podrá encontrar mayor información: 
                | 
                a(href="https://icd.who.int/es" target="_blank") https://icd.who.int/es
            .col-lg-3.col-6: img(src='@/assets/curso/temas/10.svg', alt='')
    .row.justify-content-center
      .col-lg-10
        .tarjeta(style="background-color: #3c604b")(data-aos='fade-right').p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-4.mb-lg-0: img(src='@/assets/curso/temas/11.svg', alt='')
            .col-lg-10.text-white 
              h4 Importancia del personal de facturación 
              p.mb-0 El personal de facturación requiere estar muy concentrado, altamente capacitado y entrenado para asumir con idoneidad y responsabilidad este cargo. En primer lugar, debe conocer qué tipo de acuerdo fue realizado entre los actores del aseguramiento y la prestación del servicio de salud, ya que estos servicios pueden estar contratados según los diferentes manuales. Entre los más comunes encontramos los manuales tarifarios SOAT y el manual tarifario ISS. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
